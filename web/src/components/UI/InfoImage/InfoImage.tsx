import Empty from 'src/images/empty.svg'
import ErrorImg from 'src/images/error.svg'
import NotFound from 'src/images/not_found.svg'

type InfoImageProps = {
  type: 'empty' | 'error' | 'not-found'
  message: string
}

type ImageOption = {
  slug: string
  image: React.FC<React.SVGProps<SVGSVGElement>>
}

const InfoImage = ({ type, message }: InfoImageProps) => {
  const options: ImageOption[] = [
    { slug: 'error', image: ErrorImg },
    { slug: 'empty', image: Empty },
    { slug: 'not_found', image: NotFound },
  ]

  const selected = options.find((option) => option.slug === type)

  return (
    <div className="relative max-w-sm mx-auto">
      {selected && <selected.image className="w-full h-auto" />}
      <p className="text-center mt-4 text-lg font-semibold text-gray-700">
        {message}
      </p>
    </div>
  )
}

export default InfoImage
