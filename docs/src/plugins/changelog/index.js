const path = require('path');
const fs = require('fs-extra');
const pluginContentBlog = require('@docusaurus/plugin-content-blog');
const {aliasedSitePath, docuHash, normalizeUrl} = require('@docusaurus/utils');

/**
* Multiple versions may be published on the same day, causing the order to be
* the reverse. Therefore, our publish time has a "fake hour" to order them.
*/
const publishTimes = new Set();
/**
* @type {Record<string, {name: string, url: string,alias: string, imageURL: string}>}
*/
const authorsMap = {};

/**
* @param {string} section
*/
function processSection(section) {
  const title = section
    .match(/\n## .*/)?.[0]
    .trim()
    .replace('## ', '');
  if (!title) {
    return null;
  }
  const content = section
    .replace(/\n## .*/, '')
    .trim();

  let authors = [...content.match(/\[@[A-Za-z0-9]*\]/g)];
  if (authors && authors.length > 0) {
    authors = authors.map((author) => {
      const tag = author.replace(/[^a-z0-9]/gi, '');

      return {
        name: tag,
        alias: tag,
        url: `https://github.com/${tag}`,
        imageURL: `https://github.com/${tag}.png`,
      }
    })
    .sort((a, b) => a.url.localeCompare(b.url))

    authors.forEach((author) => {
      authorsMap[author.alias] = author;
    });
  }

  let hour = 20;
  const date = title.match(/ \((?<date>.*)\)/)?.groups.date;
  while (publishTimes.has(`${date}T${hour}:00`)) {
    hour -= 1;
  }
  publishTimes.add(`${date}T${hour}:00`);

  return {
    title: title.replace(/ \(.*\)/, ''),
    content: `---
date: ${`${date}T${hour}:00`}${
      authors
        ? `
authors:
${authors.map((author) => `  - '${author.alias}'`).join('\n')}`
        : ''
    }
---

# ${title.replace(/ \(.*\)/, '')}

<!-- truncate -->

${content.replace(/####/g, '##')}`,
  };
}

/**
* @param {import('@docusaurus/types').LoadContext} context
* @returns {import('@docusaurus/types').Plugin}
*/
async function ChangelogPlugin(context, options) {
  const generateDir = path.join(context.siteDir, 'changelog/source');
  const blogPlugin = await pluginContentBlog.default(context, {
    ...options,
    path: generateDir,
    id: 'changelog',
    blogListComponent: '@theme/ChangelogList',
    blogPostComponent: '@theme/ChangelogPage',
  });
  const changelogPath = path.join(__dirname, '../../../CHANGELOG.md');
  return {
    ...blogPlugin,
    name: 'changelog-plugin',
    async loadContent() {
      const fileContent = await fs.readFile(changelogPath, 'utf-8');
      const sections = fileContent
        .split(/(?=\n## )/)
        .map(processSection)
        .filter(Boolean);
      await Promise.all(
        sections.map((section) =>
          fs.outputFile(
            path.join(generateDir, `${section.title}.md`),
            section.content,
          ),
        ),
      );
      const authorsPath = path.join(generateDir, 'authors.json');
      await fs.outputFile(authorsPath, JSON.stringify(authorsMap, null, 2));
      const content = await blogPlugin.loadContent();
      content.blogPosts.forEach((post, index) => {
        const pageIndex = Math.floor(index / options.postsPerPage);
        post.metadata.listPageLink = normalizeUrl([
          context.baseUrl,
          options.routeBasePath,
          pageIndex === 0 ? '/' : `/page/${pageIndex + 1}`,
        ]);
      });
      return content;
    },
    configureWebpack(...args) {
      const config = blogPlugin.configureWebpack(...args);
      const pluginDataDirRoot = path.join(
        context.generatedFilesDir,
        'changelog-plugin',
        'default',
      );
      // Redirect the metadata path to our folder
      config.module.rules[0].use[1].options.metadataPath = (mdxPath) => {
        // Note that metadataPath must be the same/in-sync as
        // the path from createData for each MDX.
        const aliasedPath = aliasedSitePath(mdxPath, context.siteDir);
        return path.join(pluginDataDirRoot, `${docuHash(aliasedPath)}.json`);
      };
      return config;
    },
    getThemePath() {
      return './theme';
    },
    getPathsToWatch() {
      // Don't watch the generated dir
      return [changelogPath];
    },
  };
}

ChangelogPlugin.validateOptions = pluginContentBlog.validateOptions;

module.exports = ChangelogPlugin;