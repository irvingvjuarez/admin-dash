import { SectionContainer } from "../containers/SectionContainer"
import { ConsumersView } from "../components/ConsumersView"

const Consumers: React.FC = (): JSX.Element => {
  return(
    <SectionContainer
      title="Consumers"
      titleStrong={true}
      titleClassName="mb-3" >
      
      <ConsumersView />

    </SectionContainer>
  )
}

export { Consumers }