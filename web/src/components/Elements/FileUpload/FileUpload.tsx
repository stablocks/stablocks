import { forwardRef, useRef, useState } from 'react'
import { FileField, HiddenField } from '@redwoodjs/forms'

interface FileUploadProps {
  name: string
  defaultValue: string
  type: string
}

const FileUpload = forwardRef<HTMLButtonElement, FileUploadProps>(
  (props, ref) => {
    const { name, defaultValue, type } = props

    const [localFile, setLocalFile] = useState('')
    const [uploaded, setUploaded] = useState(false)
    const [showFileLarge, setShowFileLarge] = useState(false)
    const [fieldValue] = useState('')
    const fileButton = useRef(null)

    const onSelect = () => {
      fileButton.current.click()
    }

    const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = (e.target as HTMLInputElement).files[0]

      if (file.size > 1048576) {
        setShowFileLarge(true)
      } else {
        setShowFileLarge(false)
        setLocalFile(URL.createObjectURL(file))
      }
    }

    const onUpload = () => {
      setUploaded(true)
    }

    const onCancel = () => {
      setLocalFile('')
      setUploaded(false)
      fileButton.current.value = ''
    }

    return (
      <div className="flex flex-wrap items-center">
        {(defaultValue || localFile) && (
          <img
            src={localFile || defaultValue}
            alt={name}
            className="object-cover w-24 h-24 mr-4"
          />
        )}

        {!localFile ? (
          <button type="button" ref={ref} className="btn" onClick={onSelect}>
            {defaultValue ? 'Replace File' : 'Select File'}
          </button>
        ) : (
          !uploaded && (
            <>
              <button
                type="button"
                ref={ref}
                className="btn btn-primary"
                onClick={onUpload}
              >
                Upload
              </button>
              <button
                type="button"
                ref={ref}
                className="btn ml-2"
                onClick={onCancel}
              >
                Cancel
              </button>
            </>
          )
        )}

        {showFileLarge && (
          <span className="ml-3 text-xs text-red-600">
            This file is too large, file size must be under 1MB
          </span>
        )}

        {!uploaded ? (
          <FileField
            name={name}
            ref={fileButton}
            className="hidden"
            onChange={handleChange}
            accept={type}
          />
        ) : (
          <HiddenField name={name} value={fieldValue} />
        )}
      </div>
    )
  }
)

export default FileUpload
