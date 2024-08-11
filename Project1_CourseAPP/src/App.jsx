import { useState } from 'react'

import './App.css'
import Header from './Header'
import CourseItem from './courseItem'
import Img from './images/img1.jpg'



function App() {
  var idNo = 0;

  return (
    <>
      <Header />
      <div className='courseBox'>
        <CourseItem
          cName="C++" img={Img} id={idNo++}
          cInfo="Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, laboriosam?"
          price="25$" />
        <CourseItem
          cName="Javascript" img={Img} id={idNo++}
          cInfo="Lorem ipsum dolor sit amet consectetur adipisicing ?"
          price="35$" />
        <CourseItem
          cName="Cyber Security" img={Img} id={idNo++}
          cInfo=" dolor sit amet consectetur adipisicing elit. Debitis, laboriosam?"
          price="40$" />
        <CourseItem
          cName="React" img={Img} id={idNo++}
          cInfo="Lorem ipsum dolor sit amet . Debitis, laboriosam?"
          price="50$" />
      </div>

    </>
  )
}

export default App
