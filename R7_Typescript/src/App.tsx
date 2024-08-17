import './App.css'
import useToggle from './useToggle';

function App() {
  interface Student {
    name: string;
    age: number;
    studentNo: number;
  }

  let student1: Student = { name: 'ali', age: 20, studentNo: 871 };
  let student2: Student = { name: 'john', age: 26, studentNo: 912 };
  let student3: Student = { name: 'cassie', age: 22, studentNo: 123 };
  let student4: Student = { name: 'zeynep', age: 18, studentNo: 647 };
  let student5: Student = { name: 'ezgi', age: 23, studentNo: 130 };

  let StudentList: Array<Student> = [student1, student2, student3, student4, student5];

  function randomNumber(): number {
    let number = Math.round(Math.random());
    return number;
  }


  function status(value: number): string {
    if (value === 1) {
      return 'passed';
    } else {
      return 'fail';
    }
  }
  function resultFunction(): number | string {
    let result: number | string = randomNumber() === 1 ? Math.ceil(Math.random() * 100) : 'result not found';
    return result;
  }

  function GenericExample<T>(value: T) {
    return value;
  }
  //SOME KEYWORDS

  interface Company {
    name: string,
    saleNumber: number
  }
  //Partial makes all elements in the object optional
  //Required makes all elements in the object must be enter
  //ReadOnly makes all elements  in the object can't be change
  //Pick makes returns an element what you want to choose 
  //Omit returns all elements except the one you selected


  const company: Partial<Company> = {//you can use Partial Required ReadOnly 
    name: 'microsoft'
  }

  const company2: Pick<Company, 'name'> = {//you can use Pick , Omit
    name: 'microsoft'
  }

  //Custom HOOKS

  const { open, changeDisplay } = useToggle();
  return (
    <>
      <div className='container-fluid mt-1'>

        {StudentList.map((student, index) => (
          <div key={index} className='row'>
            {open &&
              <div className='d-flex'>
                <div className="col-1 bg-dark text-light text-center">Student Name </div>
                <div className="col-2  text-center bg-secondary">{student.name}</div>
                <div className="col-1 bg-dark text-light text-center">Student No</div>
                <div className="col-2 text-center bg-secondary">{student.studentNo}</div>
                <div className="col-1 text-center bg-dark text-light">Result</div>
                <div className="col-2 text-center bg-secondary">{GenericExample(resultFunction())}</div>
                <div className="col-1 text-center bg-dark text-light">Status</div>
                <div className="col-2 text-center bg-secondary">{status(randomNumber())}</div>
              </div>
            }
          </div>
        ))}
        <div className='text-center'><button className='btn btn-primary mt-2 col-2' onClick={() => changeDisplay()}>{open ? 'Hide' : 'Show'}</button></div>
      </div>
    </>
  )
}

export default App
