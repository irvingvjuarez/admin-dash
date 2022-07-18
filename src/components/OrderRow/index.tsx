import { getContainerClassName, getCellClassName, getStatusClassName, isImageUrl } from "./utils"
import { MdLocationOn } from "react-icons/md"

interface OrderRowProps {
  isFirstRow: boolean
  headers: string[]
  type?: "orders" | "employees" | "customers"
  id?: number
  item?: string
  customer?: string
  price?: number
  status?: "Pending" | "Active" | "Rejected" | "Canceled" | "Complete"
  description?: string
  image?: string
  location?: string
  productID?: number
  name?: string
  designation?: string
  entryDate?: string
  manager?: string
  employeeID?: number
  avatar?: string
}

const OrderRow: React.FC<OrderRowProps> = ({
  isFirstRow = false,
  headers,
  type,
  item,
  customer,
  price,
  status,
  image,
  location,
  productID,
  name,
  designation,
  entryDate,
  manager,
  employeeID,
  avatar
}): JSX.Element => {
  let columns: any[]
  if(isFirstRow){
    columns = headers
  }else{
    switch(type){
      case "orders":
        columns = [image, item, customer, "$" + price, status, productID, location]
      break;
      case "employees":
        columns = [avatar, name, designation, location, entryDate, manager, employeeID]
      break;
      default:
        // customers scenario
        columns = []
    }
  }

  return(
    <div className={getContainerClassName(columns, type)}>
      {columns.map((column, index) => (
        <div key={column}>
          {(headers[index] === "Status" && column !== "Status") ? (
            <span className={getStatusClassName(status)} >
              {column}
            </span>
          ) : (
            <div className={getCellClassName()} >
              {(headers[index] === "Location" && column !== "Location") && (
                <MdLocationOn />
              )}

              {isImageUrl(column) ? (
                <img
                  src={column}
                  key={column}
                  width="90px"
                  height="67.5px"
                  className="skeleton rounded-xl" />
              ) : column}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export { OrderRow }