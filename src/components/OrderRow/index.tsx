import { getContainerClassName, getCellClassName, getStatusClassName } from "./utils"
import { MdLocationOn } from "react-icons/md"

interface OrderRowProps {
  id?: number
  item?: string
  customer?: string
  price?: number
  status?: "Pending" | "Active" | "Rejected" | "Canceled" | "Complete"
  description?: string
  image?: string
  location?: string
  productID?: number
}

const OrderRow: React.FC<OrderRowProps> = ({
  id,
  item,
  customer,
  price,
  status,
  image,
  location,
  productID
}): JSX.Element => {
  const columns = id ?  
    [image, item, customer, "$" + price, status, productID, location] : 
    ["Image", "Item", "Customer", "Total Amount", "Status", "Order ID", "Location"]

  return(
    <div className={getContainerClassName(columns)}>
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

              {(index === 0 && column !== "Image") ? (
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