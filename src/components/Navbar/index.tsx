import { Link, useLocation } from "react-router-dom"
import HamburgerIcon from "../../assets/icons/hamburger.svg"

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

const Navbar: React.FC = (): JSX.Element => {
  const handleClick = () => console.log("Hi")
  const { pathname } = useLocation()

  console.log("Pathname: ", pathname)

  return(
    <nav className="w-full bg-primary px-4 py-3 flex relative">
      <button className="mr-3" onClick={handleClick}>
        <img src={HamburgerIcon} alt="" />
      </button>

      <h2 className="text-base">
        <span className="text-just-white font-normal">Admin</span>
        <span className="text-contrast-clear font-bold">DASH</span>
      </h2>

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
    </nav>
  )
}

export { Navbar }