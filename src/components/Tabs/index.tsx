import { LinkWrapper } from "../LinkWrapper"

interface TabInterface {
  title: string
  isLink?: boolean
  url?: string
  callback?: () => void
}

interface TabsProps {
  items: TabInterface[],
  focusOn: string
}

const Tabs: React.FC<TabsProps> = ({
  items,
  focusOn
}): JSX.Element => {
  return(
    <article className="w-full flex justify-between items-center mb-7">
      <ul className="flex space-x-1 my-2 text-lg">
        {items.map(tab => (
          <LinkWrapper key={tab.title} url={tab.url}>
            <li
              className={`cursor-pointer px-2 py-1 ${tab.title === focusOn && "tab-focus"}`}
              onClick={() => tab.callback && tab.callback()} >
              {tab.title}
            </li>
          </LinkWrapper>
        ))}
      </ul>
    </article>
  )
}

export { Tabs }