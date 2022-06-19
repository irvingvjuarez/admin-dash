import { Link, useLocation } from "react-router-dom"

const paths = [
  {
    id: 0,
    title: "Dashboard",
    url: ""
  },
  {
    id: 1,
    title: "Weather Forecast",
    url: "weather"
  },
  {
    id: 2,
    title: "Consumers",
    url: "consumers"
  },
  {
    id: 3,
    title: "Task Management",
    url: "management"
  },
  {
    id: 4,
    title: "Calendar",
    url: "calendar"
  }
]

interface SidebarProps {
  toggle?: () => void
}

const Sidebar: React.FC<SidebarProps> = ({ toggle }): JSX.Element => {
  const { pathname } = useLocation()
  const setFocus = (path: string) => path === pathname ? "onfocus" : "hover:bg-primary-clear-super"

  return(
    <section className="bg-contrast-strong h-screen w-52">
      <Link
        to="profile" onClick={toggle}
        className={`py-4 flex flex-col items-center cursor-pointer ${setFocus("/profile")}`}>
        <span className="w-20 h-20 rounded-full text-3xl bg-contrast4 text-just-white text-bold tracking-wider grid place-content-center mb-1">IJ</span>
        <h3 className="text-lg text-just-white tracking-wider">Irving Juárez</h3>
      </Link>

      <ul className="bg-contrast-strong">
        {paths.map(path => (
          <li
            key={path.id}
            className={`text-just-white text-thin tracking-wider py-3 px-4 ${setFocus("/" + path.url)}`}>
            <Link to={path.url} onClick={toggle}>
              {path.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

export { Sidebar }