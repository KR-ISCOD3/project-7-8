import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import App from './App.jsx'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Product from './pages/Product.jsx'
import Contact from './pages/Contact.jsx'
import { ProductProdiver } from './store/ProductProvider.jsx'
import Cart from './pages/Cart.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProductProdiver>
      <BrowserRouter>
        <Routes>
            <Route element={<App/>}>
                <Route path='/' element={<Home/>}/>
                <Route path='/product' element={<Product/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/cart' element={<Cart/>}/>
            </Route>
        </Routes>
      </BrowserRouter>
    </ProductProdiver>
  </StrictMode>,
)
