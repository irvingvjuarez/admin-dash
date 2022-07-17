import { getContainerClassName, getCellClassName } from "./utils"

interface OrderRowProps {
  id?: number
  item?: string
  customer?: string
  price?: number
  status?: "Pending" | "Active" | "Rejected" | "Canceled"
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
    [image, item, customer, price, status, productID, location] : 
    ["Image", "Item", "Customer", "Total Amount", "Status", "Order ID", "Location"]

  return(
    <div className={getContainerClassName(columns)}>
      {columns.map((column, index) => (
        <div className={getCellClassName()} key={column}>
          {(index === 0 && column !== "Image") ? (
            <img src={image} key={column} width="90" />
          ) : column}
        </div>
      ))}
    </div>
  )
}

export { OrderRow }