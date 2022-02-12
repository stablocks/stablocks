import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'

import type { ReleasesQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const beforeQuery = (props) => {
  return {
    variables: props,
    fetchPolicy: 'cache-first',
  }
}

export const QUERY = gql`
  query ReleasesQuery {
    releases {
      tag
      name
      body
    }
  }
`

export const Loading = () => <>Loading...</>

export const Empty = () => <>No releases yet</>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ releases }: CellSuccessProps<ReleasesQuery>) => {
  return (
    <div className="space-y-2">
      {releases.map((release) => (
        <Disclosure key={release.tag}>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-indigo-100 px-4 py-2 text-left text-sm font-medium text-indigo-900 hover:bg-indigo-200 focus:outline-none focus-visible:ring focus-visible:ring-indigo-500 focus-visible:ring-opacity-75">
                <span>{release.name || release.tag}</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-indigo-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="divide-y divide-gray-300 p-2 text-sm text-gray-500">
                {/* <div className="w-full">{release.body}</div> */}
                <p className="mt-4 pt-4">
                  <a
                    href={`https://github.com/stablocks/stablocks/releases/tag/${release.tag}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-indigo-600"
                  >
                    More information
                  </a>
                </p>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      ))}
    </div>
  )
}
