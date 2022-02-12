import { Dispatch, SetStateAction, useEffect } from 'react'
import { Link, routes } from '@redwoodjs/router'

import type { FindSearchQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query FindSearchQuery($type: String!, $query: String!) {
    search(type: $type, query: $query) {
      id
      title
      type
    }
  }
`

export const Loading = () => <></>

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

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

function createTo(type: string, value: string) {
  const paths = [
    // { type: 'company', to: routes.company({ id: value }) },
    // { type: 'contact', to: routes.contact({ id: value }) },
    { type: 'employee', to: routes.employee({ id: value }) },
    // { type: 'expense', to: routes.expense({ id: value }) },
    // { type: 'income', to: routes.income({ id: value }) },
    // { type: 'job', to: routes.job({ id: value }) },
    { type: 'project', to: routes.project({ id: value }) },
    { type: 'task', to: routes.task({ id: value }) },
    { type: 'ticket', to: routes.ticket({ id: parseInt(value) }) },
  ]

  const thePath = paths.find((path) => path.type === type)

  if (!thePath) return '#'

  return thePath.to
}

export const Success = ({
  search,
  setEmptyResult,
}: CellSuccessProps<FindSearchQuery>) => {
  useEffect(() => {
    setEmptyResult(false)
  }, [setEmptyResult])

  return (
    <div className="mt-4 divide-y divide-gray-300">
      {search.map((result, i) => (
        <Link
          key={i}
          to={createTo(result.type, result.id)}
          className={classNames(
            i === 0 ? 'rounded-t-md' : '',
            i === search.length - 1 ? 'rounded-b-md' : '',
            'group flex w-full items-center justify-between overflow-hidden bg-gray-100 px-3 py-3 transition-colors duration-300 hover:bg-indigo-100 focus:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-indigo-700'
          )}
        >
          <span className="font-medium transition-colors duration-300 group-hover:text-indigo-700">
            {result.title}
          </span>
          <span className="text-2xs uppercase text-gray-500">
            {result.type}
          </span>
        </Link>
      ))}
    </div>
  )
}
