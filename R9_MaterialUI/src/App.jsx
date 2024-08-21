import { useState } from 'react'
import * as React from 'react';
import './App.css'
import ButtonComponent from './components/ButtonComponent'
import TextFieldCom from './components/TextFieldCom';
import SelectCom from './components/SelectCom';
import CheckboxCom from './components/CheckboxCom'
import AutoCompletedCom from './components/AutoCompletedCom';
import StackCom from './components/StackCom';
import GridCom from './components/GridCom';
import CardCom from './components/CardCom';
import AccordionCom from './components/AccordionCom';
import AppBarCom from './components/AppBarCom';


function App() {


  return (
    <>
      <ButtonComponent />
      <hr style={{ padding: '2px 0px', backgroundColor: '#222' }}></hr>
      <TextFieldCom />
      <hr style={{ padding: '2px 0px', backgroundColor: '#222' }}></hr>
      <SelectCom />
      <hr style={{ padding: '2px 0px', backgroundColor: '#222' }}></hr>
      <CheckboxCom />
      <hr style={{ padding: '2px 0px', backgroundColor: '#222' }}></hr>
      <AutoCompletedCom />
      <hr style={{ padding: '2px 0px', backgroundColor: '#222' }}></hr>
      <StackCom />
      <hr style={{ padding: '2px 0px', backgroundColor: '#222' }}></hr>
      <GridCom />
      <hr style={{ padding: '2px 0px', backgroundColor: '#222' }}></hr>
      <CardCom />
      <hr style={{ padding: '2px 0px', backgroundColor: '#222' }}></hr>
      <AccordionCom />
      <hr style={{ padding: '2px 0px', backgroundColor: '#222' }}></hr>
      <AppBarCom />
    </>
  )
}

export default App
