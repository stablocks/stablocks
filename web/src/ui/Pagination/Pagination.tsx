import { navigate, useLocation } from '@redwoodjs/router'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'
import { classNames } from 'src/utils/base'

export const perPage = 25

type PaginationProps = {
  total: number
}

const Pagination = ({ total }: PaginationProps) => {
  const { pathname, search } = useLocation()
  const [currentPage, setCurrentPage] = React.useState(1)

  const startingItem = (currentPage - 1) * perPage + 1
  const endingItem = startingItem + (perPage - 1)
  const lastPage = Math.ceil(total / perPage)

  const pageBelow = currentPage === 1 ? null : currentPage - 1
  const pageAbove = currentPage === lastPage ? null : currentPage + 1

  React.useEffect(() => {
    const params = new URLSearchParams(search)
    const page = params.get('page')

    if (page) setCurrentPage(parseInt(page))
  }, [search])

  const onPrevious = () => {
    if (currentPage === 1) return

    const params = new URLSearchParams(search)
    const prevPage = currentPage - 1
    params.set('page', prevPage.toString())
    navigate(`${pathname}?${params.toString()}`)
  }

  const onNext = () => {
    if (currentPage === lastPage) return

    const params = new URLSearchParams(search)
    const nextPage = currentPage + 1
    params.set('page', nextPage.toString())
    navigate(`${pathname}?${params.toString()}`)
  }

  const onNavigate = (value: number) => {
    const params = new URLSearchParams(search)
    params.set('page', value.toString())
    navigate(`${pathname}?${params.toString()}`)
  }

  const PageButton = ({ value }: { value: number }) => {
    return (
      <button
        aria-current={value === currentPage ? 'page' : undefined}
        onClick={() => onNavigate(value)}
        className={classNames(
          value === currentPage
            ? 'z-10 bg-indigo-50 border-indigo-500 text-indigo-600'
            : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50',
          'relative inline-flex items-center px-4 py-2 border text-sm font-medium'
        )}
      >
        {value}
      </button>
    )
  }

  const SpacerButton = () => (
    <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
      ...
    </span>
  )

  return (
    <div className="py-3 flex items-center justify-between">
      <div className="flex-1 flex justify-between sm:hidden">
        <button
          onClick={onPrevious}
          disabled={currentPage === 1}
          className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:bg-gray-100 disabled:text-gray-400"
        >
          Previous
        </button>
        <button
          onClick={onNext}
          disabled={currentPage === lastPage}
          className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:bg-gray-100 disabled:text-gray-400"
        >
          Next
        </button>
      </div>
      <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">{startingItem}</span> to{' '}
            <span className="font-medium">
              {endingItem > total ? total : endingItem}
            </span>{' '}
            of <span className="font-medium">{total}</span> results
          </p>
        </div>
        <div>
          <nav
            className="relative z-0 inline-flex rounded-md -space-x-px"
            aria-label="Pagination"
          >
            <button
              onClick={onPrevious}
              disabled={currentPage === 1}
              className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:bg-gray-100 disabled:text-gray-400"
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </button>

            <PageButton value={1} />

            {currentPage - 2 > 1 && <SpacerButton />}

            {pageBelow && pageBelow !== 1 && <PageButton value={pageBelow} />}

            {![1, lastPage].includes(currentPage) && (
              <PageButton value={currentPage} />
            )}

            {pageAbove && pageAbove !== lastPage && (
              <PageButton value={pageAbove} />
            )}

            {currentPage + 2 < lastPage && <SpacerButton />}

            <PageButton value={lastPage} />

            <button
              onClick={onNext}
              disabled={currentPage === lastPage}
              className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:bg-gray-100 disabled:text-gray-400"
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Pagination
