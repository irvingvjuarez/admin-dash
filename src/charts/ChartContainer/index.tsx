interface ChartContainerProps {
  title: string
  children: JSX.Element
  type?: "full" | "flex"
  titleClassName?: string
  wrapperClassName?: string
  containerClassName?: string
  scrollbar?: boolean
}

const ChartContainer: React.FC<ChartContainerProps> = ({ 
  title,
  children,
  type,
  titleClassName,
  wrapperClassName,
  containerClassName,
  scrollbar
}): JSX.Element => {
  const getArticleClass = () => {
    let classname = "chart__container"
    if(scrollbar) classname += " scrollbar"
    if(containerClassName) classname += ` ${containerClassName}`
    return classname
  }

  const getWrapperClass = () => {
    let classname = "chart"
    if(type === "full") classname += " w-full"
    if(type === "flex") classname += " flex flex-col items-center"
    if(wrapperClassName) classname += ` ${wrapperClassName}`
    return classname
  }

  const getTitleClass = () => {
    let classname = "chart__title w-full text-start"
    if(titleClassName) classname += ` ${titleClassName}`
    return classname
  }

  return(
    <section className={getWrapperClass()}>
      <h2 className={getTitleClass()}>
        {title}
      </h2>

      <article className={getArticleClass()}>
        {children}
      </article>
    </section>
  )
}

export { ChartContainer }