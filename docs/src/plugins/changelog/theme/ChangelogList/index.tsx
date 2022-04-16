import React from 'react';
import BlogLayout from '@theme/BlogLayout';
import BlogListPaginator from '@theme/BlogListPaginator';
import type {Props} from '@theme/BlogListPage';
import {
  PageMetadata,
  HtmlClassNameProvider,
  ThemeClassNames,
} from '@docusaurus/theme-common';
import Link from '@docusaurus/Link';
import ChangelogItem from '@theme/ChangelogItem';

import styles from './styles.module.css';
import SearchMetadata from '@theme/SearchMetadata';
import clsx from 'clsx';

function ChangelogListMetadata(props: Props): JSX.Element {
  const {metadata} = props;
  const {blogTitle, blogDescription} = metadata;
  return (
    <>
      <PageMetadata title={blogTitle} description={blogDescription} />
      <SearchMetadata tag="blog_posts_list" />
    </>
  );
}

function ChangelogListContent(props: Props): JSX.Element {
  const {metadata, items, sidebar} = props;
  const {blogTitle} = metadata;

  return (
    <BlogLayout sidebar={sidebar}>
      <header className="margin-bottom--lg">
        <h1 style={{fontSize: '3rem'}}>{blogTitle}</h1>
      </header>
      {items.map(({content: BlogPostContent}) => (
        <ChangelogItem
          key={BlogPostContent.metadata.permalink}
          frontMatter={BlogPostContent.frontMatter}
          assets={BlogPostContent.assets}
          metadata={BlogPostContent.metadata}
          truncated={BlogPostContent.metadata.truncated}>
          <BlogPostContent />
        </ChangelogItem>
      ))}
      <BlogListPaginator metadata={metadata} />
    </BlogLayout>
  );
}

export default function ChangelogList(props: Props): JSX.Element {
  return (
    <HtmlClassNameProvider
      className={clsx(
        ThemeClassNames.wrapper.blogPages,
        ThemeClassNames.page.blogListPage,
      )}>
      <ChangelogListMetadata {...props} />
      <ChangelogListContent {...props} />
    </HtmlClassNameProvider>
  );
}