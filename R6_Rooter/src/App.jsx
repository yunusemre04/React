import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home.jsx'
import About from './pages/about.jsx'
import Contact from './pages/contact.jsx'
import Others from './pages/others.jsx'
import Header from './components/Header.jsx'
import Product from './components/Product.jsx'
import NotFound from './pages/notFound.jsx'
import Projects from './pages/projects.jsx'
import More from './pages/more.jsx'
import ProductDetails from './pages/productDetails.jsx'



function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />

        <Route path='/others' element={<Others />}>
          <Route path='projects' element={<Projects />} />
          <Route path='more' element={<More />} />
        </Route>
        <Route path='/product-details/:id' element={<ProductDetails />} />
        <Route path='products' element={<Product />} />



        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}


export default App