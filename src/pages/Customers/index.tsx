import { SectionContainer } from "@app/containers/SectionContainer"
import { TableContainer } from "@app/containers/TableContainer"
import customers from "@app/data/customers.json"

const Customers: React.FC = (): JSX.Element => {
  const headers = ["", "Name", "Project Name", "Status", "Weeks", "Budget", "Location"]

  return(
    <SectionContainer title="Customers" titleStrong={true}>
      <TableContainer
        headers={headers}
        rows={customers}
        type="customers" />
    </SectionContainer>
  )
}

export { Customers }