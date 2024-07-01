import { NavBar } from "./components/navBar"
import { SideBar } from "./components/sideBar"
import { Routes, Route } from "react-router-dom"
import { Add } from "./pages/add"
import { List } from "./pages/list"
import { Orders } from "./pages/orders"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const url = "https://food-delivery-project-server.onrender.com"

  return (
    <div>
      <ToastContainer />
      <NavBar />

      <hr />

      <div className="app-content">
        <SideBar />

        <Routes>
          <Route path="/add" element={<Add url={url} />} />
          <Route path="/list" element={<List url={url} />} />
          <Route path="/orders" element={<Orders url={url} />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
