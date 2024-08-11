import { useState } from 'react'

import './App.css'
import { useEffect } from 'react';

function App() {

  const [students, setStudents] = useState(["john", "melis", "ezgi"]);
  const [number, setNumber] = useState(0);

  useEffect(() => { console.log("main use effect has been worked") });
  useEffect(() => { console.log("count button use effect has been worked") }, [number]);
  useEffect(() => { console.log("student button use effect has been worked") }, [students]);
  useEffect(() => { console.log("Only in the beganning works") }, []);

  const [n1, setN1] = useState(0);
  const [n2, setN2] = useState(0);

  const calculateAvg = (n1, n2) => { debugger; return (n1 + n2) / 2 };

  return (
    <>
      {students.map((student, index) => (
        <div key={index} style={{ color: 'white' }}>{student}</div>
      ))}
      <div>{number}</div>
      <div><button type='button' onClick={() => { setNumber(number + 1) }}>Increase Number</button></div>
      <div><button type='button' onClick={() => { setStudents(["Ethan"]) }}>Change Person</button></div>
      <div>
        <input type="number" onChange={(e) => setN1(Number(e.target.value))} placeholder='number1' />
        <input type="number" onChange={(e) => setN2(Number(e.target.value))} placeholder='number2' />
        <div>Average : {calculateAvg(n1, n2)}</div>
      </div>
    </>
  )
}

export default App
