import React, {useState} from 'react';
import clsx from 'clsx';
import type {Props} from '@theme/BlogPostAuthors';
import ChangelogAuthor from '@theme/ChangelogAuthor';

import styles from './styles.module.css';
import IconExpand from '@theme/IconExpand';

// Component responsible for the authors layout
export default function BlogPostAuthors({
  authors,
  assets,
}: Props): JSX.Element | null {
  const [expanded, setExpanded] = useState(false);
  const reducedAuthors = Array.from(new Set(authors.map(a => a.alias)))
  .map(alias => {
    return authors.find(a => a.alias === alias)
  })

  const authorsCount = reducedAuthors.length;
  if (authorsCount === 0) {
    return null;
  }
  const filteredAuthors = reducedAuthors.slice(0, expanded ? reducedAuthors.length : 10);
  return (
    <div
      className={clsx(
        'margin-top--md margin-bottom--sm',
        styles.imageOnlyAuthorRow,
      )}>
      {filteredAuthors.map((author, idx) => (
        <div className={styles.imageOnlyAuthorCol} key={idx}>
          <ChangelogAuthor
            author={{
              ...author,
              // Handle author images using relative paths
              imageURL: assets.authorsImageUrls[idx] ?? author.imageURL,
            }}
          />
        </div>
      ))}
      {reducedAuthors.length > 10 && (
        <button
          className={clsx('clean-btn', styles.toggleButton)}
          type="button"
          onClick={() => setExpanded((v) => !v)}
          aria-label="expand">
          <IconExpand expanded={expanded} />
        </button>
      )}
    </div>
  );
}