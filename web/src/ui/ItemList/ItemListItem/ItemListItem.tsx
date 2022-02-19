import { Link } from '@redwoodjs/router'
import { ChevronRightIcon } from '@heroicons/react/outline'

type ItemListItemProps = {
  title: string
  description?: string
  to: string
  subItems?: {
    count: number
    title: string
    singularTitle: string
  }
}

const ItemListItem = ({
  title,
  description,
  to,
  subItems,
}: ItemListItemProps) => {
  let subItemText = ''

  if (subItems) {
    subItemText += subItems.count
    subItemText += ` ${
      subItems.count === 1 ? subItems.singularTitle : subItems.title
    }`
  }

  return (
    <li>
      <Link to={to} className="block hover:bg-gray-50">
        <div className="flex items-center px-4 py-4 sm:px-6">
          <div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
            <div className="truncate">
              <div className="flex text-base">
                <p className="truncate font-semibold text-indigo-600">
                  {title}
                </p>
              </div>
              {description && (
                <div className="mt-1 flex">
                  <div className="flex items-center text-sm text-gray-500">
                    <p>{description}</p>
                  </div>
                </div>
              )}
            </div>
            {subItems && (
              <div className="mt-4 flex-shrink-0 text-sm text-gray-500 sm:mt-0 sm:ml-5">
                {subItemText}
              </div>
            )}
          </div>
          <div className="ml-5 flex-shrink-0">
            <ChevronRightIcon
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </div>
        </div>
      </Link>
    </li>
  )
}

export default ItemListItem
