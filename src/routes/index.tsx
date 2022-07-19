import { BrowserRouter, Routes, Route } from "react-router-dom"

// components
import { Home } from "../pages/Home"
import { WeatherForecast } from "../pages/WeatherForecast"
import { Employees } from "../pages/Employees"
import { InboxPage } from "../pages/Inbox"
import { TaskManagement } from "../pages/TaskManagement"
import { Calendar } from "../pages/Calendar"
import { Profile } from "../pages/Profile"
import { Users } from "../pages/Users"
import { Orders } from "../pages/Orders"
import { Sells } from "../pages/Sells"
import { Deliveries } from "../pages/Deliveries"
import { NextSevenDays } from "../pages/NextSevenDays"
import { Chat } from "../pages/Chat"
import { Layout } from "../containers/Layout"
import { Customers } from "@app/pages/Customers"

function App() {
  return (
    <BrowserRouter>
      <Layout>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/weather" element={<WeatherForecast />} />
          <Route path="/inbox" element={<InboxPage />} />
          <Route path="/management" element={<TaskManagement />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/users" element={<Users />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/weather-next-seven-days" element={<NextSevenDays />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/sells/:time" element={<Sells />} />
          <Route path="/deliveries/:time" element={<Deliveries />} />
          <Route path="/chat/:name" element={<Chat />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export { App }
