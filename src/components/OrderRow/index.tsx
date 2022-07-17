interface OrderRowProps {
  columns?: Array<string>
}

const OrderRow: React.FC<OrderRowProps> = ({
  columns = ["Image", "Item", "Customer", "Total Amount", "Status", "Order ID", "Location"]
}): JSX.Element => {
  const getContainerClassName = () => {
    let classname = "w-full flex justify-evenly border-2 min-w-[900px]"
    if(columns[0] === "Image"){
      classname += " rounded-t-lg"
    }else{
      classname += " border-b-primary"
    }
    return classname
  }

  const getCellClassName = () => {
    let classname = "tracking-wide py-2 md:text-lg"
    return classname
  }

  return(
    <div className={getContainerClassName()}>
      {columns.map(column => (
        <div className={getCellClassName()} key={column}>
          {column}
        </div>
      ))}
    </div>
  )
}

export { OrderRow }