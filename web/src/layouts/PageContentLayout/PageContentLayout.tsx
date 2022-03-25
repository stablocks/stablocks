type PageContentLayoutProps = {
  full?: boolean
  aside?: React.ReactNode
  children?: React.ReactNode
}

const PageContentLayout = ({
  aside,
  full,
  children,
}: PageContentLayoutProps) => {
  return (
    <article
      className={`${
        !full
          ? 'grid grid-cols-1 gap-6 lg:grid-cols-3 lg:grid-flow-col-dense '
          : ''
      }max-w-[96rem] mx-auto`}
    >
      <div className={`${!full ? 'lg:col-span-2' : ''}`}>{children}</div>
      {!full && aside && <aside className="space-y-6">{aside}</aside>}
    </article>
  )
}

export default PageContentLayout
