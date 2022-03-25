type ContentBlockProps = {
  title: string
  subtitle?: string
  icon?: (props: React.ComponentProps<'svg'>) => JSX.Element
  children?: React.ReactNode
}

const ContentBlock = (props: ContentBlockProps) => {
  return (
    <section className="bg-white border border-gray-300 rounded-md overflow-hidden">
      <div className="flex items-center px-4 py-5 sm:px-6">
        {props.icon && <props.icon className="h-5 w-5 mr-2" />}
        <div>
          <h2 className="text-lg leading-6 font-medium text-gray-900">
            {props.title}
          </h2>
          {props.subtitle && (
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              {props.subtitle}
            </p>
          )}
        </div>
      </div>
      <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
        {props.children}
      </div>
    </section>
  )
}

export default ContentBlock
