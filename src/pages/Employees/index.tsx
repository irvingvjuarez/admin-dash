import { TableContainer } from "@app/containers/TableContainer"
import { SectionContainer } from "@app/containers/SectionContainer"
import employees from "@app/data/employees.json"

const Employees = () => {
  const headers = ["", "Employee", "Designation", "Location", "Hire Date", "Manager", "Employee ID"]

  return(
    <SectionContainer
      title="Employees"
      titleStrong={true} >
      <TableContainer
        headers={headers}
        rows={employees}
        type="employees" />
    </SectionContainer>
  )
}

export { Employees }