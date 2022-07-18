import { TableContainer } from "@app/containers/TableContainer"
import { OrderRow } from "@app/components/OrderRow"
import orders from "@app/data/orders.json"

const OrdersView: React.FC = (): JSX.Element => {
  const headers = ["Image", "Item", "Customer", "Total Amount", "Status", "Order ID", "Location"]

  return(
    <TableContainer headers={headers} rows={orders} />
  )
}

export { OrdersView }