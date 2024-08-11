import { useState } from 'react'

import './App.css'
import Header from './components/Header'
import Operation from './components/Operation'
import Task from './components/Task'
import InfoBox from './components/InfoBox'


function App() {

  return (
    <>
      <div>
        <Header />
        <Operation />

        <Task />
      </div>
    </>
  )
}

export default App
