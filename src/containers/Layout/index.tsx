// components
import { Navbar } from "../../components/Navbar"
import { Sidebar } from "../../components/Sidebar"

interface LayoutProps {
  children: JSX.Element
}

const Layout: React.FC<LayoutProps> = ({ children }): JSX.Element => {
  return(
    <>
      <header className="w-full relative z-[1]">
        <Navbar />
      </header>

      <section className="bg-primary text-just-white lg:flex">
        <section className="hidden lg:block">
          <Sidebar />
        </section>

        <section className="w-full h-[93vh] p-4 pb-5 overflow-y-auto">
          {children}
        </section>
      </section>
    </>
  )
}

export { Layout }