import { useEffect, useState } from 'react'
import { Form, FormError, Submit } from '@redwoodjs/forms'

interface DescriptionListProps {
  title: string
  description?: string
  onSubmit: (data: any) => void
  isSaved: boolean
  loading?: boolean
  error: any
  children: React.ReactNode
}

const DescriptionList = ({
  title,
  description,
  onSubmit = () => {},
  isSaved,
  loading,
  error,
  children,
}: DescriptionListProps) => {
  const [editAll, setEditAll] = useState(false)

  useEffect(() => {
    if (isSaved) {
      setEditAll(false)
    }
  }, [isSaved])

  return (
    <Form onSubmit={onSubmit} error={error} className="max-w-3xl">
      <div className="items-center justify-between sm:flex">
        <div>
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            {title}
          </h3>
          {description && (
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              {description}
            </p>
          )}
        </div>
        <div className="btn-group mt-5 sm:mt-0">
          <button
            type="button"
            className="btn"
            onClick={() => setEditAll(!editAll)}
          >
            {editAll ? 'Cancel' : 'Edit'}
          </button>
          {editAll && (
            <Submit className="btn btn-primary" disabled={loading}>
              Save
            </Submit>
          )}
        </div>
      </div>

      <FormError
        error={error}
        wrapperClassName="text-xs mt-5 text-red-600"
        titleClassName=""
        listClassName=""
      />

      <div className="mt-5 border-t border-gray-200">
        <dl className="sm:divide-y sm:divide-gray-200">
          {React.Children.map(children, (child) => {
            if (typeof child === 'string') {
              return child
            }

            if (React.isValidElement(child)) {
              return React.cloneElement(child, {
                editAll,
              })
            }

            return child
          })}
        </dl>
      </div>

      {editAll && (
        <div className="flex items-center border-t border-gray-200 pt-5 sm:justify-end">
          <div className="btn-group">
            <button
              type="button"
              className="btn"
              onClick={() => setEditAll(!editAll)}
            >
              Cancel
            </button>

            <Submit className="btn btn-primary" disabled={loading}>
              Save
            </Submit>
          </div>
        </div>
      )}
    </Form>
  )
}

export default DescriptionList
