type ContentBlockProps = {
  title: string
  subtitle?: string
  children?: React.ReactNode
}

const ContentBlock = ({ title, subtitle, children }: ContentBlockProps) => {
  return (
    <section className="bg-white border border-gray-300 rounded-md overflow-hidden">
      <div className="px-4 py-5 sm:px-6">
        <h2 className="text-lg leading-6 font-medium text-gray-900">{title}</h2>
        {subtitle && (
          <p className="mt-1 max-w-2xl text-sm text-gray-500">{subtitle}</p>
        )}
      </div>
      <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
        {children}
      </div>
    </section>
  )
}

export default ContentBlock
