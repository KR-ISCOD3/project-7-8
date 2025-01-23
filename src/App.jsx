import { Outlet } from "react-router-dom"
import Bottombar from "./components/Bottombar"
import Footer from "./components/Footer"
import Header from "./components/Header"

function App() {
  return (
    <div>
        <header>
          <Header />
        </header>
        <main>
            <Outlet/>
        </main>
        <footer>
          <Footer/>
        </footer>
        <Bottombar/>
        {/* Home, Cart, View Detail, Contact, All-Product */}
    </div>
  )
}

export default App