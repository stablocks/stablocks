import { Dispatch, SetStateAction, useEffect } from 'react'
import { Link, routes, useLocation } from '@redwoodjs/router'
import Loader from 'src/ui/Loader'

import type { FindSearchQuery } from 'types/graphql'
import type { CellSuccessProps } from '@redwoodjs/web'

export const QUERY = gql`
  query FindSearchQuery($type: String!, $query: String!) {
    search(type: $type, query: $query) {
      id
      title
      type
    }
  }
`

export const Loading = () => <Loader />

export const Empty = ({
  setEmptyResult,
}: {
  setEmptyResult: Dispatch<SetStateAction<boolean>>
}) => {
  useEffect(() => {
    setEmptyResult(true)
  }, [setEmptyResult])

  return <p className="mt-6 text-center text-xs text-white">No results found</p>
}

function createTo(type: string, value: string) {
  const paths = [
    { type: 'application', to: routes.application({ id: value }) },
    { type: 'company', to: routes.company({ id: value }) },
    { type: 'contact', to: routes.contact({ id: value }) },
    { type: 'department', to: routes.department({ id: value }) },
    { type: 'employee', to: routes.employee({ id: value }) },
    { type: 'expense', to: routes.expense({ id: value }) },
    { type: 'income', to: routes.income({ id: value }) },
    { type: 'invoice', to: routes.invoice({ id: parseInt(value) }) },
    { type: 'job', to: routes.job({ id: value }) },
    { type: 'project', to: routes.project({ id: value }) },
    { type: 'task', to: routes.task({ id: value }) },
    { type: 'ticket', to: routes.ticket({ id: parseInt(value) }) },
  ]

  const thePath = paths.find((path) => path.type === type)

  if (!thePath) return '#'

  return thePath.to
}

interface SearchSuccessProps extends CellSuccessProps<FindSearchQuery> {
  setEmptyResult: Dispatch<SetStateAction<boolean>>
}

export const Success = ({ search, setEmptyResult }: SearchSuccessProps) => {
  const { pathname } = useLocation()

  useEffect(() => {
    setEmptyResult(false)
  }, [setEmptyResult])

  return (
    <div className="max-h-72 scroll-py-2 overflow-y-auto p-2 text-sm text-gray-800">
      {search.map((result, i) =>
        pathname !== createTo(result.type, result.id) ? (
          <Link
            key={i}
            to={createTo(result.type, result.id)}
            className="group flex items-center justify-between select-none px-4 py-2 rounded-md overflow-hidden hover:bg-indigo-600 hover:text-white focus:bg-indigo-600 focus:text-white focus:outline-none transition-colors duration-300"
          >
            <span className="font-medium">{result.title}</span>
            <span className="text-2xs uppercase text-gray-500 group-hover:text-gray-100 group-focus:text-gray-100 transition-colors duration-300">
              {result.type}
            </span>
          </Link>
        ) : (
          <div
            key={i}
            className="group flex items-center justify-between select-none px-4 py-2 rounded-md overflow-hidden bg-gray-100"
          >
            <span className="font-medium text-gray-500">{result.title}</span>
            <span className="text-2xs uppercase text-gray-500">
              current page
            </span>
          </div>
        )
      )}
    </div>
  )
}
