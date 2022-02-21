import Table, { TableColumn } from 'src/components/Layout/Table'
import LoadingBlock from 'src/ui/LoadingBlock'
import { perPage } from 'src/ui/Pagination'

type TableLoaderProps = {
  cols: TableColumn[]
}

const TableLoader = ({ cols }: TableLoaderProps) => {
  return (
    <Table
      cols={cols}
      rows={[...Array(perPage)].map(() =>
        [...Array(cols.length)].map((_, i) => <LoadingBlock key={i} />)
      )}
    />
  )
}

export default TableLoader
