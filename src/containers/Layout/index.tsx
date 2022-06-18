// components
import { Navbar } from "../../components/Navbar"

interface LayoutProps {
  children: JSX.Element
}

const Layout: React.FC<LayoutProps> = ({ children }): JSX.Element => {
  return(
    <>
      <header className="w-full">
        <Navbar />
      </header>
      {children}
    </>
  )
}

export { Layout }