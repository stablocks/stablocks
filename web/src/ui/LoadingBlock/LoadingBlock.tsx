import { classNames } from 'src/utils/base'

type LoadingBlockProps = {
  height?: string
  maxWidth?: string
}

const LoadingBlock = ({ height, maxWidth }: LoadingBlockProps) => {
  return (
    <div
      className={classNames(
        height ? height : 'h-3',
        maxWidth ? maxWidth : 'w-full',
        'bg-gray-200 animate-pulse rounded-full'
      )}
    />
  )
}

export default LoadingBlock
