import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Products from './components/Products'
import RouterSettings from './config/RouterSettings'

import Notification from './components/Notification'
import Loading from './components/Loading'




function App() {


  return (
    <div className='container-fluid'>
      <Header />
      <Loading />
      <RouterSettings />

      <Notification />
    </div >
  )
}

export default App
