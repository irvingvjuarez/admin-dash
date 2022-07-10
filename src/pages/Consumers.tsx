import { SectionContainer } from "../containers/SectionContainer"
import { ConsumersView } from "../components/ConsumersView"
import { Inbox } from "../containers/Inbox"

const Consumers: React.FC = (): JSX.Element => {
  return(
    <SectionContainer
      title="Consumers"
      titleStrong={true}
      titleClassName="mb-3" >
      
      <section className="md:grid md:grid-cols-2">
        <ConsumersView />
        <Inbox containerClassName="hidden md:block" />
      </section>

    </SectionContainer>
  )
}

export { Consumers }