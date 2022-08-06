import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

import "./app.css";

function App() {
  const data = [
    { name: "Степан Бандера", salary: "2000$", increase: true },
    { name: "Михайло Крашко", salary: "900$", increase: false },
    { name: "Олексій Коваль", salary: "1800$", increase: true },
    { name: "Павло Ткач", salary: "800$", increase: false },
    { name: "Ігор Петренко", salary: "1100$", increase: false },
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
