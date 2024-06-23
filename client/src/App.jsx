import { NavBar } from "./components/navBar"
import { Route, Routes } from 'react-router-dom'
import { Home } from "./pages/home"
import { Cart } from "./pages/cart"
import { PlaceOrder } from "./pages/placeOrder"
import { Footer } from "./components/footer"
import { useState } from "react"
import { LoginPopUp } from "./components/loginPopUP"


const App = () => {

  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {showLogin ? <LoginPopUp setShowLogin={setShowLogin} /> : <></>}
      <div className="app">
        <NavBar setShowLogin={setShowLogin} />

        <Routes>
          <Route path='/' element={<Home />} />

          <Route path="/cart" element={<Cart />} />

          <Route path="/order" element={<PlaceOrder />} />
        </Routes>
      </div>

      <Footer />
    </>
  )
}

export default App