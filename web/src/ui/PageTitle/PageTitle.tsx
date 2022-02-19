import { useContext, useEffect } from 'react'
import { MetaTags } from '@redwoodjs/web'
import {
  AppContext,
  SearchItem,
} from 'src/components/Providers/AppProviderCell'
import Breadcrumbs, { Breadcrumb } from 'src/ui/Breadcrumbs'
import MenuButtonGroup, {
  ActionButton,
} from 'src/components/Elements/MenuButtonGroup'

interface PageTitleProps {
  title: string
  breadcrumbs?: Breadcrumb[]
  currentCrumbLabel?: string
  buttons?: ActionButton[]
  search?: SearchItem
}

const PageTitle = ({
  title,
  breadcrumbs,
  currentCrumbLabel,
  buttons,
  search,
}: PageTitleProps) => {
  const { setSearch } = useContext(AppContext)

  useEffect(() => {
    setSearch(search)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const metaTitle =
    breadcrumbs?.length > 0
      ? `${title} | ${breadcrumbs[breadcrumbs.length - 1].title}`
      : title

  return (
    <>
      <MetaTags title={metaTitle} />

      <div className="page-title mb-12">
        <Breadcrumbs
          breadcrumbs={breadcrumbs}
          currentCrumbLabel={currentCrumbLabel || title}
        />

        <div className="mt-2 md:flex md:items-center md:justify-between">
          <div className="min-w-0 flex-1">
            <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl">
              {title}
            </h1>
          </div>
          {buttons && buttons.length && (
            <div className="mt-4 flex flex-shrink-0 space-x-2 md:mt-0 md:ml-4">
              <MenuButtonGroup buttons={buttons} />
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default PageTitle
