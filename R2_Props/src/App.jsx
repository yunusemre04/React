import { useState } from 'react'

import './App.css'
import Products from './Products'
import Box from './Box'

function App() {
  return (
    <>
      <Box>
        <Products Pname="Shoes" price={50} />
      </Box>
    </>
  )
}

export default App
