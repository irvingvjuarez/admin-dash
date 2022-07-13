import { Subpage } from "../Subpage"
interface SectionContainerProps {
  title: string
  children: JSX.Element
  titleStrong?: boolean
  subpage?: boolean
  sectionClassName?: string
  titleClassName?: string
}

const SectionContainer: React.FC<SectionContainerProps> = ({ 
  title,
  children,
  titleStrong,
  subpage,
  sectionClassName,
  titleClassName
}): JSX.Element => {
  const title_classname = titleStrong ? "font-normal" : "font-light"
  return(
    <section className={`nothing max-w-[1500px] mx-auto ${sectionClassName}`}>
      <Subpage isSubpage={subpage ?? false}>
        <h2 className={`text-xl tracking-wider w-full ${title_classname} ${titleClassName}`}>
          {title}
        </h2>
      </Subpage>

      {children}
    </section>
  )
}

export { SectionContainer }