import HamburgerIcon from "../../assets/icons/hamburger.svg"

const Navbar: React.FC = (): JSX.Element => {
  return(
    <nav className="w-full bg-primary px-4 py-3 flex">
      <button className="mr-3">
        <img src={HamburgerIcon} alt="" />
      </button>

      <h2 className="text-base">
        <span className="text-just-white font-normal">Admin</span>
        <span className="text-contrast-clear font-bold">DASH</span>
      </h2>
    </nav>
  )
}

export { Navbar }