const ItemList = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="overflow-hidden border border-gray-300 bg-white sm:rounded-md">
      <ul className="divide-y divide-gray-200">{children}</ul>
    </div>
  )
}

export default ItemList
