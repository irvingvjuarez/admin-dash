import { Link, useLocation } from "react-router-dom"
import { PATHS } from "@app/data"
import { SidebarSection } from "@app/containers/SidebarSection"
import { setFocus } from "@app/services/setFocus"

interface SidebarProps {
  toggle?: () => void
}

const Sidebar: React.FC<SidebarProps> = ({ toggle }): JSX.Element => {
  const { pathname } = useLocation()

  return(
    <section className="bg-contrast-strong h-screen w-52 md:w-[250px]">
      <Link
        to="profile" onClick={toggle}
        className={`py-4 flex flex-col items-center cursor-pointer ${setFocus("/profile", pathname)}`}>
        <span className="w-20 h-20 rounded-full text-3xl bg-contrast4 text-just-white text-bold tracking-wider grid place-content-center mb-1">IJ</span>
        <h3 className="text-lg text-just-white tracking-wider">Irving Juárez</h3>
      </Link>

      <ul className="bg-contrast-strong">
        {PATHS.map(pathGroup => (
          <SidebarSection items={pathGroup} toggle={toggle} />
        ))}
      </ul>
    </section>
  )
}

export { Sidebar }