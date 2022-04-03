type TableProps = {
  cols: {
    label: string
    hidden?: boolean
  }[]
  rows: React.ReactNode[][]
}

const Table = ({ cols, rows }: TableProps) => {
  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-lg border border-gray-300">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  {cols.map((col, i) => (
                    <th
                      key={i}
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                    >
                      {col.hidden ? (
                        <span className="sr-only">{col.label}</span>
                      ) : (
                        col.label
                      )}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {rows.map((row, i) => (
                  <tr key={i}>
                    {row.map((data, j) => (
                      <td
                        key={j}
                        className="whitespace-nowrap px-6 py-4 text-sm"
                      >
                        {data}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Table
