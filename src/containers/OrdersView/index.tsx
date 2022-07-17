import { OrderRow } from "@app/components/OrderRow"
import orders from "@app/data/orders.json"

const OrdersView: React.FC = (): JSX.Element => {
  return(
    <section className="w-full overflow-x-auto border-2 rounded-lg">
      <OrderRow />

      {orders.map(order => (
        <OrderRow {...order} key={order.id} />
      ))}
    </section>
  )
}

export { OrdersView }