import { Transition } from '@headlessui/react'
import Table, { TableColumn } from 'src/components/Layout/Table'
import LoadingBlock from 'src/ui/LoadingBlock'
import { perPage } from 'src/ui/Pagination'

type TableLoaderProps = {
  cols: TableColumn[]
}

const TableLoader = ({ cols }: TableLoaderProps) => {
  return (
    <Transition
      appear={true}
      show={true}
      enter="transition-opacity duration-500"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-500"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <Table
        cols={cols}
        rows={[...Array(perPage)].map(() =>
          [...Array(cols.length)].map((_, i) => <LoadingBlock key={i} />)
        )}
      />
    </Transition>
  )
}

export default TableLoader
