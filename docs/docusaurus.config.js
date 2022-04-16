// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Stablocks',
  tagline:
    'Open-source, modular software for growing startups where you own your data',
  url: 'https://learn.stablocks.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'stablocks',
  projectName: 'stablocks',

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: 'users',
          routeBasePath: 'users',
          editUrl: 'https://github.com/stablocks/learn/edit/develop/',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          routeBasePath: 'posts',
          path: 'posts',
          editUrl: 'https://github.com/stablocks/learn/edit/develop/',
          showReadingTime: true,
          feedOptions: {
            type: 'all',
            title: 'Stablocks Latest News & Updates',
            description: 'View the latest news and updates from Stablocks',
            copyright: `Copyright © ${new Date().getFullYear()} Stablocks.`,
            language: 'en',
          },
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'devs',
        path: 'devs',
        routeBasePath: 'devs',
        editUrl: 'https://github.com/stablocks/learn/edit/develop/',
        sidebarPath: require.resolve('./sidebars.js'),
      },
    ],
    [
      require.resolve('./src/plugins/changelog/index.js'),
      {
        blogTitle: 'Stablocks changelog',
        blogDescription:
          'Keep yourself up-to-date about new features in every release',
        blogSidebarCount: 'ALL',
        blogSidebarTitle: 'Changelog',
        routeBasePath: '/changelog',
        showReadingTime: false,
        postsPerPage: 20,
        archiveBasePath: null,
        authorsMapPath: 'authors.json',
        feedOptions: {
          type: 'all',
          title: 'Stablocks changelog',
          description:
            'Keep yourself up-to-date about new features in every release',
          copyright: `Copyright © ${new Date().getFullYear()} Stablocks.`,
          language: 'en',
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Stablocks',
        logo: {
          alt: 'Stablocks',
          src: '/img/logo.svg',
          srcDark: '/img/logo-light.svg',
        },
        items: [
          {
            to: '/users/',
            label: 'For Users',
            position: 'left',
            activeBaseRegex: `/users/`,
          },
          {
            to: '/devs/',
            label: 'For Developers',
            position: 'left',
            activeBaseRegex: `/devs/`,
          },
          {
            to: '/posts/',
            label: 'News & Updates',
            position: 'left',
            activeBaseRegex: `/posts/`,
          },
          // {
          //   type: 'docsVersionDropdown',
          //   position: 'right',
          // },
          {
            href: 'https://stablocks.com',
            position: 'right',
            label: 'stablocks.com',
          },
          {
            href: 'https://github.com/stablocks/stablocks',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Learn',
            items: [
              {
                label: 'For Users',
                to: '/users',
              },
              {
                label: 'For Developers',
                to: '/devs',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discussions',
                href: 'https://github.com/stablocks/stablocks/discussions',
              },
              {
                label: 'Feature Requests',
                to: '/feature-requests',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/stablocks/stablocks',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'News & Updates',
                to: '/posts',
              },
              // {
              //   label: 'Changelog',
              //   to: '/changelog',
              // },
              {
                label: 'stablocks.com',
                href: 'https://stablocks.com',
              },
            ],
          },
          {
            title: 'Social',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/stablocks',
              },
              {
                label: 'LinkedIn',
                href: 'https://linkedin.com/company/stablocks',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} <a href="https://stablocks.com" target="_blank" rel="noreferrer">Stablocks</a>.`,
        logo: {
          alt: 'Stablocks',
          src: '/img/logo.svg',
          height: '50px',
        },
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        defaultLanguage: 'javascript',
      },
      colorMode: {
        respectPrefersColorScheme: true,
      },
      announcementBar: {
        content:
          '⚠️ The Stablocks documentation is still under construction and things may change! ⚠️',
        backgroundColor: '#4f46e5',
        textColor: '#ffffff',
        isCloseable: false,
      },
      algolia: {
        // The application ID provided by Algolia
        appId: 'K13KU64J7O',

        // Public API key: it is safe to commit it
        apiKey: '1a6108c4d98ad28aefde26ba46004ebf',

        indexName: 'stablocks',

        // Optional: see doc section below
        contextualSearch: true,

        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        // externalUrlRegex: 'external\\.com|domain\\.com',

        // Optional: Algolia search parameters
        searchParameters: {},

        // Optional: path for search page that enabled by default (`false` to disable it)
        // searchPagePath: 'search',

        //... other Algolia params
      },
    }),
}

async function createConfig() {
  const FeatureRequestsPlugin = (
    await import('./src/plugins/featureRequests/FeatureRequestsPlugin.mjs')
  ).default
  config.plugins?.push(FeatureRequestsPlugin)
  return config
}

module.exports = createConfig
