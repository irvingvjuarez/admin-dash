import { OrderRow } from "@app/components/OrderRow"

interface TableContainerProps {
  headers: string[]
  rows: any[]
  type: "orders" | "employees" | "customers"
}

const TableContainer: React.FC<TableContainerProps> = ({
  headers,
  rows,
  type
}): JSX.Element => {
  return(
    <section className="w-full overflow-x-auto border-2 rounded-lg">
      <OrderRow headers={headers} />

      {rows.map(row => (
        <OrderRow 
          key={row.id}
          type={type}
          {...row} />
      ))}
    </section>
  )
}

export { TableContainer }