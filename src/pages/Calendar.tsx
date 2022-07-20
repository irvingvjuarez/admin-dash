import { SectionContainer } from "@app/containers/SectionContainer"

const Calendar: React.FC = (): JSX.Element => {
  return(
    <SectionContainer title="Calendar" titleStrong={true} >
      <h2>I am the Calendar</h2>
    </SectionContainer>
  )
}

export { Calendar }