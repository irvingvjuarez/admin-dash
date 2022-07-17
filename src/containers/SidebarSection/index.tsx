import { Link, useLocation } from "react-router-dom"
import { setFocus } from "@app/services/setFocus"

interface SidebarSectionProps {
  items: {
    groupTitle: string,
    group: any[]
  },
  toggle?: () => void
}

const SidebarSection: React.FC<SidebarSectionProps> = ({
  items,
  toggle
}): JSX.Element => {
  const { pathname } = useLocation()

  return(
    <section className="py-2 pl-2">
      <h2 className="text-lg tracking-wider text-just-white uppercase">
        {items.groupTitle}
      </h2>

      <ul>
        {items.group.map(item => (
          <Link to={item.url} key={item.id} onClick={toggle}>
            <li
              className={`text-just-white text-thin tracking-wider py-3 px-4 border-2 border-r-0 border-contrast-strong ${setFocus("/" + item.url, pathname)}`}>
              {item.title}
            </li>
          </Link>
        ))}
      </ul>
    </section>
  )
}

export { SidebarSection }