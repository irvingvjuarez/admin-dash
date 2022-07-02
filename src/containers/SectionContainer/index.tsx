interface SectionContainerProps {
  title: string
  children: JSX.Element
  titleStrong?: boolean
}

const SectionContainer: React.FC<SectionContainerProps> = ({ title, children, titleStrong }): JSX.Element => {
  const titleClassName = titleStrong ? "font-normal" : "mb-3 font-light"
  return(
    <section>
      <h2 className={`text-xl tracking-wider ${titleClassName}`}>
        {title}
      </h2>

      {children}
    </section>
  )
}

export { SectionContainer }