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

  const employeeData = [
    { id: 1, name: "Alice Johnson", role: "Frontend Dev", department: "Engineering" },
    { id: 2, name: "Bob Smith", role: "Backend Dev", department: "Engineering" },
    { id: 3, name: "Charlie Davis", role: "HR Manager", department: "HR" },
    { id: 4, name: "Diana Prince", role: "UX Designer", department: "Design" },
    { id: 5, name: "Evan Wright", role: "QA Tester", department: "Engineering" },
    { id: 6, name: "Fiona Gallagher", role: "Recruiter", department: "HR" },
  ];

  const [employees, setEmployees] = useState(employeeData);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  }

  const handleFilter = (e) => {
    setFilter(e.target.value);
  }

  const filteredEmployees = employees.filter((emp) => {

    const matchSearch =
      emp.name.toLowerCase().includes(search.toLowerCase());

    const matchFilter =
      filter === "All" || emp.department === filter;

    return matchSearch && matchFilter;
  });

  return (
    <>
      <div>
        <input
          type="text"
          placeholder='Search by name'
          value={search}
          onChange={handleSearch}
        />
      </div>

      <select value={filter} onChange={handleFilter}>
        <option value={"All"}>All</option>
        <option value={"Engineering"}>Engineering</option>
        <option value={"HR"}>HR</option>
        <option value={"Design"}>Design</option>
      </select>

      {
        filteredEmployees.length > 0 ? (
          <ul>
            {
              filteredEmployees.map((emp) => (
                <li key={emp.id}>
                  {emp.name} - {emp.role} ({emp.department})
                </li>
              ))
            }
          </ul>
        ) : (
          <p>No employees found</p>
        )
      }
    </>
  )
}

export default App