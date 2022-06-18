// components
import { Navbar } from "../../components/Navbar"

interface LayoutProps {
  children: JSX.Element
}

const Layout: React.FC<LayoutProps> = ({ children }): JSX.Element => {
  return(
    <header>
      <Navbar />
      {children}
    </header>
  )
}

export { Layout }