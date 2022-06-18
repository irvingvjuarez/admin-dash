import HamburgerIcon from "../../assets/icons/hamburger.svg"

// components
import { Sidebar } from "../Sidebar"

const Navbar: React.FC = (): JSX.Element => {
  const handleClick = () => console.log("Hi")

  return(
    <nav className="w-full bg-primary px-4 py-3 flex relative">
      <button className="mr-3" onClick={handleClick}>
        <img src={HamburgerIcon} alt="" />
      </button>

      <h2 className="text-base">
        <span className="text-just-white font-normal">Admin</span>
        <span className="text-contrast-clear font-bold">DASH</span>
      </h2>

      <Sidebar />
    </nav>
  )
}

export { Navbar }