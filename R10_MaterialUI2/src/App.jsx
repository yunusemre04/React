import { useState } from 'react'
import * as React from 'react';
import './App.css'
import ImageListCom from './components/ImageListCom';
import DrawerCom from './components/DrawerCom';
import BadgeCom from './components/BadgeCom';
import AvatarCom from './components/AvatarCom';
import TooltipCom from './components/TooltipCom';
import AlertCom from './components/AlertCom';
import DialogCom from './components/DialogCom';
import SnackBarCom from './components/SnackBarCom';
import ProgressCom from './components/ProgressCom';
import SkeletonCom from './components/SkeletonCom';
import TableCom from './components/TableCom';
import TabComponent from './components/TabComponent';



function App() {


  return (
    <>
      <ImageListCom />
      <hr style={{ padding: '2px 0px', backgroundColor: '#222' }}></hr>
      <DrawerCom />
      <hr style={{ padding: '2px 0px', backgroundColor: '#222' }}></hr>
      <BadgeCom />
      <hr style={{ padding: '2px 0px', backgroundColor: '#222' }}></hr>
      <AvatarCom />
      <hr style={{ padding: '2px 0px', backgroundColor: '#222' }}></hr>
      <TooltipCom />
      <hr style={{ padding: '2px 0px', backgroundColor: '#222' }}></hr>
      <AlertCom />
      <hr style={{ padding: '2px 0px', backgroundColor: '#222' }}></hr>
      <DialogCom />
      <hr style={{ padding: '2px 0px', backgroundColor: '#222' }}></hr>
      <SnackBarCom />
      <hr style={{ padding: '2px 0px', backgroundColor: '#222' }}></hr>
      <ProgressCom />
      <hr style={{ padding: '2px 0px', backgroundColor: '#222' }}></hr>
      <SkeletonCom />
      <hr style={{ padding: '2px 0px', backgroundColor: '#222' }}></hr>
      <TableCom />
      <hr style={{ padding: '2px 0px', backgroundColor: '#222' }}></hr>
      <TabComponent />
    </>
  )
}

export default App
