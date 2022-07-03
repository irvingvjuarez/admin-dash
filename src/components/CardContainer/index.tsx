interface CardContainerProps {
  children: JSX.Element
  type?: "flex"
  containerClassName?: string
}

const CardContainer: React.FC<CardContainerProps> = ({
  children,
  type,
  containerClassName
}): JSX.Element => {
  const getContainerClassName = () => {
    let classname = "bg-primary-strong rounded-lg p-4 mb-3 lg:mb-0"
    if(type === "flex") classname += " flex justify-between items-center"
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