import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

import "./app.css";

function App() {
  const data = [
    { name: "Степан Бандера", salary: "2000$", increase: true, id: 1 },
    { name: "Михайло Крашко", salary: "900$", increase: false, id: 2 },
    { name: "Олексій Коваль", salary: "1800$", increase: true, id: 3 },
    { name: "Павло Ткач", salary: "800$", increase: false, id: 4 },
    { name: "Ігор Петренко", salary: "1100$", increase: false, id: 5 },
  ];

  return (
    <div className="app">
      <AppInfo />
      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
        <EmployeesList data={data} />
        <EmployeesAddForm />
      </div>
    </div>
  );
}
export default App;
