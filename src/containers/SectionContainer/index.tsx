import { Subpage } from "../Subpage"
interface SectionContainerProps {
  title: string
  children: JSX.Element
  titleStrong?: boolean
  subpage?: boolean
}

const SectionContainer: React.FC<SectionContainerProps> = ({ 
  title,
  children,
  titleStrong,
  subpage
}): JSX.Element => {
  const titleClassName = titleStrong ? "font-normal" : "mb-3 font-light"
  return(
    <section>
      <Subpage isSubpage={subpage ?? false}>
        <h2 className={`text-xl tracking-wider ${titleClassName}`}>
          {title}
        </h2>
      </Subpage>

      {children}
    </section>
  )
}

export { SectionContainer }