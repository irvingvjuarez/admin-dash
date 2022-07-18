import { OrderRow } from "@app/components/OrderRow"

interface TableContainerProps {
  headers: string[]
  rows: any[]
}

const TableContainer: React.FC<TableContainerProps> = ({
  headers,
  rows
}): JSX.Element => {
  return(
    <section className="w-full overflow-x-auto border-2 rounded-lg">
      <OrderRow headers={headers} />

      {rows.map(row => (
        <OrderRow {...row} key={row.id} />
      ))}
    </section>
  )
}

export { TableContainer }