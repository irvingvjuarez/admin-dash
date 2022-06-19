// components
import { Navbar } from "../../components/Navbar"
import { Sidebar } from "../../components/Sidebar"

interface LayoutProps {
  children: JSX.Element
}

const Layout: React.FC<LayoutProps> = ({ children }): JSX.Element => {
  return(
    <>
      <header className="w-full">
        <Navbar />
      </header>

      <section className="lg:flex">
        <section className="hidden lg:block">
          <Sidebar />
        </section>
        {children}
      </section>
    </>
  )
}

export { Layout }