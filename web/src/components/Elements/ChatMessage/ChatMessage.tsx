interface MessageProps {
  sent?: boolean
}

const ChatMessage = React.forwardRef<HTMLDivElement, MessageProps>(
  (props, ref) => {
    const { sent } = props

    return (
      <div
        ref={ref}
        className={`${
          sent
            ? 'ml-auto items-end text-right'
            : 'mr-auto items-start text-left'
        } flex max-w-xs flex-col`}
      >
        <p className="mb-1 text-xs text-gray-500">1m ago</p>
        <div
          className={`${
            sent ? 'bg-indigo-600 text-white' : 'bg-indigo-100'
          } rounded-lg border border-indigo-600 px-3 py-2`}
        >
          <h4 className="text-sm font-bold">
            <span className="sr-only">from</span>
            {sent ? 'You' : 'User'}
          </h4>
          <p className="text-sm">Here&apos;s a message!</p>
        </div>
      </div>
    )
  }
)

export default ChatMessage
