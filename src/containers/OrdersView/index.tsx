import { OrderRow } from "@app/components/OrderRow"

const OrdersView: React.FC = (): JSX.Element => {
  return(
    <section className="w-full overflow-x-auto">
      <OrderRow />
    </section>
  )
}

export { OrdersView }