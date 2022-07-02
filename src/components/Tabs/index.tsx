import { LinkWrapper } from "../LinkWrapper"

interface TabInterface {
  title: string
  isLink?: boolean
  url?: string
  callback?: <T>() => T
}

interface TabsProps {
  items: TabInterface[]
}

const Tabs: React.FC<TabsProps> = ({
  items
}): JSX.Element => {
  return(
    <article className="w-full flex justify-between items-center mb-7">
      <ul className="flex space-x-3 my-2 text-lg">
        {items.map(tab => (
          <LinkWrapper key={tab.title} url={tab.url}>
            <li>{tab.title}</li>
          </LinkWrapper>
        ))}
      </ul>
    </article>
  )
}

export { Tabs }