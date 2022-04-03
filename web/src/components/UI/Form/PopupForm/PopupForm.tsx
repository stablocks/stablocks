import Popup from 'src/components/UI/Popup'
import { classNames } from 'src/utils/base'
import EditForm from '../EditForm'

import type { FormProps } from '../Form'

const PopupForm = (props: FormProps) => {
  const { popup, isSaved } = props
  const [isOpen, setIsOpen] = React.useState(false)

  React.useEffect(() => {
    if (isSaved) setIsOpen(false)
  }, [isSaved])

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={classNames(
          popup.type === 'button'
            ? 'btn btn-primary'
            : 'font-medium text-indigo-600 hover:text-indigo-700',
          'truncate max-w-[24rem] rounded-sm'
        )}
      >
        {popup.label}
      </button>
      <Popup
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        title={popup.title || popup.label}
      >
        <div className="mt-4">
          <EditForm {...props} />
        </div>
      </Popup>
    </>
  )
}

export default PopupForm
