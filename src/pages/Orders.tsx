import { SectionContainer } from "../containers/SectionContainer"
import { OrdersView } from "@app/containers/OrdersView"

const Orders: React.FC = (): JSX.Element => {
  return(
    <SectionContainer
      title="Orders"
      titleStrong={true}
      subpage={true}>
      <OrdersView />
    </SectionContainer>
  )
}

export { Orders }