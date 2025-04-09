import React from 'react'
import Home from './components/Home/Home'
import Shope from './components/shop/Shope'
import { CartProvider } from './components/context/CartContext'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'



const App = () => {
  return (
    <>
    <CartProvider>


      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Shope' element={<Shope/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
     


      </CartProvider>

      </>
      
    
  )
}

export default App