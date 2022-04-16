declare module '@theme/ChangelogItem';
declare module '@theme/ChangelogAuthors';
declare module '@theme/ChangelogAuthor';
declare module '@theme/IconExpand' {
import type {ComponentProps} from 'react';

export interface Props extends ComponentProps<'svg'> {
  expanded?: boolean;
}

export default function IconExpand(props: Props): JSX.Element;
}