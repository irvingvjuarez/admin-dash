import { SectionContainer } from "@app/containers/SectionContainer"
import { ConsumersView } from "@app/components/ConsumersView"
import { Inbox } from "@app/containers/Inbox"

const InboxPage: React.FC = (): JSX.Element => {
  return(
    <SectionContainer
      title="Consumers"
      titleStrong={true}
      titleClassName="mb-3"
      sectionClassName="mx-auto" >
      
      <section className="md:grid md:grid-cols-2">
        <ConsumersView />
        <Inbox containerClassName="hidden md:block" />
      </section>

    </SectionContainer>
  )
}

export { InboxPage }