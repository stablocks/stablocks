import React, { Fragment, useEffect, useState } from 'react'
import { navigate, useLocation } from '@redwoodjs/router'
import { Tab } from '@headlessui/react'

interface TabItem {
  label: string
  slug: string
  icon?: (props: React.ComponentProps<'svg'>) => JSX.Element
  count?: number
}

interface TabMenuProps {
  tabs: TabItem[]
  children: React.ReactNode
}

const TabMenu = ({ tabs, children }: TabMenuProps) => {
  const { pathname, search } = useLocation()

  useEffect(() => {
    if (search) {
      const params = new URLSearchParams(search)
      const page = params.get('page')

      if (page) {
        const index = tabs.findIndex((tab) => tab.slug === page)

        if (index) setDefaultTab(index)
      }
    }
  }, [])

  const [defaultTab, setDefaultTab] = useState(0)

  const onChange = (index: number) => {
    if (index === 0) {
      navigate(pathname)
    } else {
      const slug = tabs[index].slug

      navigate(`${pathname}?page=${slug}`)
    }
  }

  return (
    <Tab.Group onChange={onChange} defaultIndex={defaultTab}>
      <div className="mb-12 border-b border-gray-300">
        <Tab.List className="-mb-px flex space-x-4">
          {tabs.map((tab, i) => (
            <Tab key={i} as={Fragment}>
              {({ selected }) => (
                <button
                  className={`${
                    selected
                      ? 'border-indigo-500 text-indigo-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-400'
                  } whitespace-nowrap group flex py-4 px-1 border-b-2 font-medium text-sm`}
                >
                  {tab.icon && (
                    <tab.icon
                      className={`${
                        selected
                          ? 'text-indigo-500'
                          : 'text-gray-400 group-hover:text-gray-500'
                      } -ml-0.5 mr-2 h-5 w-5`}
                      aria-hidden="true"
                    />
                  )}
                  <span>{tab.label}</span>
                  {tab.count ? (
                    <span
                      className={`${
                        selected
                          ? 'bg-indigo-100 text-indigo-600'
                          : 'bg-gray-200'
                      } hidden ml-2 py-0.5 px-2.5 rounded-full text-xs font-medium md:inline-block`}
                    >
                      {tab.count}
                    </span>
                  ) : null}
                </button>
              )}
            </Tab>
          ))}
        </Tab.List>
      </div>
      <Tab.Panels>
        {React.Children.map(children, (child) => {
          let element: React.ReactNode

          if (typeof child === 'string') {
            element = child
          } else if (React.isValidElement(child)) {
            element = React.cloneElement(child)
          } else {
            element = child
          }

          return <Tab.Panel>{element}</Tab.Panel>
        })}
      </Tab.Panels>
    </Tab.Group>
  )
}

export default TabMenu
