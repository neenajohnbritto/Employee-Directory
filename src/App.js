import React,{useState, useEffect} from 'react';

import logo from './logo.svg';
import './App.css';

const userData = [{profileImage: "https://avada.theme-fusion.com/wp-content/uploads/2019/07/person_sample_2.jpg",
                  name: "Neena John",
                  phone: "3033033001",
                  email: "neena@gmail.com",
                  dOB: "01/01/1980"},
                  {profileImage: "https://aahid.org/wp-content/uploads/2015/01/sample-person.jpg",
                  name: "John Doe",
                  phone: "3033033002",
                  email: "john@gmail.com",
                  dOB: "01/01/1990"},
                  {profileImage: "https://pbs.twimg.com/profile_images/378800000835953863/15374ad8f0ae4ff964253ba03471f6fd_400x400.jpeg",
                  name: "Jerry Dev",
                  phone: "3033033003",
                  email: "jerry@gmail.com",
                  dOB: "01/01/1985"},
                  {profileImage: "https://hiring.monster.com/employer-resources/wp-content/uploads/sites/2/2014/11/CFO.jpg",
                  name: "Jayden Dev",
                  phone: "3033033004",
                  email: "jayden@gmail.com",
                  dOB: "01/01/1995"},
                  {profileImage: "https://www.eyeployment.com/wp-content/uploads/2018/01/ts_report1.jpg",
                  name: "Nirmal Britto",
                  phone: "3033033005",
                  email: "nirmal@gmail.com",
                  dOB: "01/01/1984"}
                ];

function filterEmployee(employees, searchFilter){
  console.log("searchFilter: " , searchFilter);
  if(!searchFilter){
    return employees;
  }
  return employees.filter(employee => employee.name.includes(searchFilter));
  
}

function App() {
  const [input, setInput] = useState("");
  useEffect(() => {
    console.log(input);
    // const results = userData.name.filter(person =>
    //   person.toLowerCase().includes(searchTerm)
  })
  return (
    <div>
  <div className="jumbotron jumbotron-fluid">
  <div className="container">
    <h1 className="display-4">Employee Directory</h1>
    <input onChange={event => (setInput(event.target.value))} className="form-control" type="text" placeholder="Search Employee Name" aria-label="Search"></input>
  </div>
</div>
  <table className="table">
    <thead>
      <tr>
        <th scope="col">Picture</th>
        <th scope="col">Name</th>
        <th scope="col">Phone</th>
        <th scope="col">Email</th>
        <th scope="col">DOB</th>
      </tr>
    </thead>
    <tbody>
      {filterEmployee(userData, input).map((user) => {
        return  <tr>
        <th scope="row"> <img src={user.profileImage}/></th>
        <td>{user.name}</td>
        <td>{user.phone}</td>
        <td>{user.email}</td>
        <td>{user.dOB}</td>
      </tr>
      })}
     
    </tbody>
</table>
</div>

  );
}

export default App;
