import { useEffect, useState } from 'react'

import './App.css'
import axios from 'axios'


function App() {
  const mainURL = "https://jsonplaceholder.typicode.com/users";
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await axios.get(mainURL);
    setData(response.data);
  };

  const addUser = async (user) => {
    const r = await axios.post(mainURL, user);
    console.log(r);
  }

  const updateUser = async (userId, data) => {
    await axios.put(`${mainURL}/${userId}`, data);
  }

  const deleteUser = async (userId) => {
    await axios.delete(`${mainURL}/${userId}`);
  }


  useEffect(() => {
    addUser({ id: "11", name: "Mehmet", username: "meh123", email: "m513@gm.com", company: { name: "Microsoft" } });
    updateUser("5", { "name": "melih", "username": "mel549" });
    deleteUser("5");
    getData();
  }, []);


  console.log(data);
  return (
    <>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {data.map((users) => (
          <div key={users.id} style={{ margin: '20px' }}>
            <div className="">{users.name}</div>
            <div className="">{users.username}</div>
            <div className="">{users.email}</div>
            <div className="">{users.company.name}</div>
          </div>
        ))}
      </div>
    </>
  )
}

export default App
