import { BrowserRouter, Routes, Route } from "react-router-dom"

// components
import { Home } from "../pages/Home"
import { WeatherForecast } from "../pages/WeatherForecast"
import { Consumers } from "../pages/Consumers"
import { TaskManagement } from "../pages/TaskManagement"
import { Calendar } from "../pages/Calendar"
import { Layout } from "../containers/Layout"

function App() {
  return (
    <BrowserRouter>
      <Layout>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/weather" element={<WeatherForecast />} />
          <Route path="/consumers" element={<Consumers />} />
          <Route path="/management" element={<TaskManagement />} />
          <Route path="/calendar" element={<Calendar />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export { App }
