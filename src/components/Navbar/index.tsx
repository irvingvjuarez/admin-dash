import { useState } from "react"
import HamburgerIcon from "../../assets/icons/hamburger.svg"
import { Link } from "react-router-dom"

// components
import { Sidebar } from "../Sidebar"

const Navbar: React.FC = (): JSX.Element => {
  const [sidebarVisible, setSidebarVisible] = useState<boolean>(false)
  const handleClick = () => setSidebarVisible(prev => !prev)

  return(
    <nav className="w-full bg-primary-strong px-4 py-3 flex relative">
      <button className="mr-3 lg:hidden" onClick={handleClick}>
        <img src={HamburgerIcon} alt="" />
      </button>

      <Link to="/" className="text-base">
        <span className="text-just-white font-normal">Admin</span>
        <span className="text-contrast-clear font-bold">DASH</span>
      </Link>

      <div className={`lg:hidden absolute top-full transition-transform duration-700 right-full ${sidebarVisible && "translate-x-full"}`}>
        <Sidebar toggle={handleClick} />
      </div>
    </nav>
  )
}

export { Navbar }