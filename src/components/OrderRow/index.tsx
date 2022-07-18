import { getContainerClassName, getCellClassName, getStatusClassName, isImageUrl } from "./utils"
import { MdLocationOn } from "react-icons/md"

interface OrderRowProps {
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
  headers?: string[]
  name?: string
  designation?: string
  entryDate?: string
  manager?: string
  employeeID?: number
}

const OrderRow: React.FC<OrderRowProps> = ({
  type,
  item,
  customer,
  price,
  status,
  image,
  location,
  productID,
  headers,
  name,
  designation,
  entryDate,
  manager,
  employeeID
}): JSX.Element => {
  let columns: any[]
  if(headers){
    columns = headers
  }else{
    switch(type){
      case "orders":
        columns = [image, item, customer, "$" + price, status, productID, location]
      break;
      case "employees":
        columns = [name, designation, location, entryDate, manager, employeeID]
      break;
      default:
        // customers scenario
        columns = []
    }
  }

  console.log("columns:", columns)

  return(
    <div className={getContainerClassName(columns, headers?.length)}>
      {columns.map((column, index) => (
        <div key={column}>
          {(index === 4 && column !== "Status") ? (
            <span className={getStatusClassName(status)} >
              {column}
            </span>
          ) : (
            <div className={getCellClassName()} >
              {(index === 6 && column !== "Location") && (
                <MdLocationOn />
              )}

              {isImageUrl(column) ? (
                <img
                  src={image}
                  key={column}
                  width="90"
                  height="67.5px"
                  className="skeleton" />
              ) : column}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export { OrderRow }