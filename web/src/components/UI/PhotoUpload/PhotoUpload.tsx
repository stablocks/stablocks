import { useRef, useState } from 'react'
import { FileField, HiddenField } from '@redwoodjs/forms'

interface PhotoUploadProps {
  name: string
  defaultValue: string
}

const PhotoUpload = ({ name, defaultValue }: PhotoUploadProps) => {
  const [localFile, setLocalFile] = useState('')
  const [uploaded, setUploaded] = useState(false)
  const [fieldValue, setFieldValue] = useState('')
  const fileButton = useRef(null)

  const onSelect = () => {
    fileButton.current.click()
  }

  const handleChange = async (e) => {
    const file = e.target.files[0]

    setLocalFile(URL.createObjectURL(file))
  }

  const onUpload = () => {
    setUploaded(true)
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
        <button type="button" className="btn" onClick={onSelect}>
          {defaultValue ? 'Replace File' : 'Select File'}
        </button>
      ) : (
        !uploaded && (
          <button type="button" className="btn btn-primary" onClick={onUpload}>
            Upload
          </button>
        )
      )}
      {!uploaded ? (
        <FileField
          name={name}
          ref={fileButton}
          className="hidden"
          onChange={handleChange}
          accept="image/png, image/jpeg"
        />
      ) : (
        <HiddenField name={name} value={fieldValue} />
      )}
    </div>
  )
}

export default PhotoUpload
