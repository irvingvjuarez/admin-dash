import { SectionContainer } from "@app/containers/SectionContainer"

const TaskManagement: React.FC = (): JSX.Element => {
  return(
    <SectionContainer title="Task Management" titleStrong={true}>
      <h2>Hey, I am the Task Management page</h2>
    </SectionContainer>
  )
}

export { TaskManagement }