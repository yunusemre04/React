
import './App.css'
import Login from './Login';

function App() {
  const students = [{ name: "elif", point: 80 }, { name: "mehmet", point: 70 }, { name: "selin", point: 65 }];
  let avg = 0;
  students.forEach(student => { avg += student.point });
  avg = (avg / students.length).toFixed(2);

  return (

    <div>
      {
        students.map((student, index) => (
          <div key={index} style={{ fontSize: '30px' }}> {student.name} : {student.point}</div>
        )
        )
      }
      <div style={{ fontSize: '30px' }}>Average : {avg}</div>
      <hr />
      <div>
        <div><Login /></div>
        <div><Login /></div>
      </div>
    </div>

  )
}

export default App
