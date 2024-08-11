import { useState } from 'react'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { store } from './redux/store'
import { decrement, increment } from './redux/counter';
import UserDisplay from './userDisplay';

function App() {

  const { value } = useSelector(store => store.counter);
  console.log(value);
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <div>{value}</div>
        <button style={{ padding: '5px', backgroundColor: 'orange', borderRadius: '5px' }} onClick={() => { dispatch(increment()) }}>Increase</button>
        <button style={{ padding: '5px', backgroundColor: 'orange', borderRadius: '5px' }} onClick={() => { dispatch(decrement()) }}>Decrease</button>
      </div>
      <UserDisplay />
    </>
  )
}

export default App
