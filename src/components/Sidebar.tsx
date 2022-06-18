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

const Sidebar: React.FC = (): JSX.Element => {
  const { pathname } = useLocation()

  return(
    <section className="absolute left-0 top-full bg-contrast-strong h-screen w-52">
      <div className="py-4 flex flex-col items-center">
        <span className="w-20 h-20 rounded-full text-3xl bg-contrast4 text-just-white text-bold tracking-wider grid place-content-center mb-1">IJ</span>
        <h3 className="text-lg text-just-white tracking-wider">Irving Juárez</h3>
      </div>

      <ul className="bg-contrast-strong">
        {paths.map(path => (
          <li key={path.id} className={`text-just-white text-thin tracking-wider py-3 px-4 ${pathname === "/" + path.url && "border-l-2 border-l-contrast-clear bg-primary"}`}>
            <Link to={path.url}>
              {path.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

export { Sidebar }