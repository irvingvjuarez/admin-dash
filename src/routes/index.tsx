import { BrowserRouter, Routes, Route } from "react-router-dom"

// components
import { Home } from "../pages/Home"
import { Layout } from "../containers/Layout"

function App() {
  return (
    <BrowserRouter>
      <Layout>
        
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export { App }
