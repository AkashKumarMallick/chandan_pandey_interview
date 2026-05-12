import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
// const employees = [
//   { id: 1, name: "Alice Johnson", role: "Frontend Dev", department: "Engineering" },
//   { id: 2, name: "Bob Smith", role: "Backend Dev", department: "Engineering" },
//   { id: 3, name: "Charlie Davis", role: "HR Manager", department: "HR" },
//   { id: 4, name: "Diana Prince", role: "UX Designer", department: "Design" },
//   { id: 5, name: "Evan Wright", role: "QA Tester", department: "Engineering" },
//   { id: 6, name: "Fiona Gallagher", role: "Recruiter", department: "HR" }
// ];
function App() {
  const [employees, setEmployees] = useState([
    { id: 1, name: "Alice Johnson", role: "Frontend Dev", department: "Engineering" },
    { id: 2, name: "Bob Smith", role: "Backend Dev", department: "Engineering" },
    { id: 3, name: "Charlie Davis", role: "HR Manager", department: "HR" },
    { id: 4, name: "Diana Prince", role: "UX Designer", department: "Design" },
    { id: 5, name: "Evan Wright", role: "QA Tester", department: "Engineering" },
    { id: 6, name: "Fiona Gallagher", role: "Recruiter", department: "HR" },
  ]);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  
  const handleSearch =(e)=>{
    const searchFilter = employees.filter((ele)=>ele.name.includes(e.target.value));
    setSearch(searchFilter);
  }
  const handleFilter = (e) => {
    const filterData = employees.filter((ele) => ele.department === e.target.value || ele.role === e.target.value);
    setEmployees(filterData);
  }

  return (
    <>
    <div>
        <input type="text" placeholder='Search by name or role' value={search} onChange={handleSearch} />
      </div>
      <select onChange={handleFilter}>
          <option disabled value={""}>select filter</option>
                <option value={"Engineering"}>Engineering</option>
                <option value={"HR"}>HR</option>
                <option value={"Design"}>Design</option>
      </select>
           
                 <ul>
                    {employees.filter(emp => emp.name.toLowerCase().includes(search.toLowerCase()) || emp.role.toLowerCase().includes(search.toLowerCase())).map(emp => (
                      <li key={emp.id}>{emp.name} - {emp.role} ({emp.department})</li>
                    ))}
                  </ul> 

                  {employees.length === 0 && <p>No employees found.</p> }
    </>
  )
}

export default App
