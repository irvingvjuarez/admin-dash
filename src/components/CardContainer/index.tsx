interface CardContainerProps {
  children: JSX.Element
  type?: "flex"
  containerClassName?: string
  justify?: "center" | "start" | "end" | "between" | "evenly" | "around"
}

const CardContainer: React.FC<CardContainerProps> = ({
  children,
  type,
  containerClassName,
  justify = "between"
}): JSX.Element => {
  const getContainerClassName = () => {
    let classname = "bg-primary-strong rounded-lg p-4 mb-3 lg:mb-0"
    if(type === "flex") {
      classname += " flex items-center"
      classname += ` justify-${justify}`
    } 
    if(containerClassName) classname += ` ${containerClassName}`
    return classname
  }

  return(
    <div className={`${getContainerClassName()}`}>
      {children}
    </div>
  )
}

export { CardContainer }