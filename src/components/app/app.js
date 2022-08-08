import { Component } from "react";
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

import "./app.css";

class App extends Component {
  constructor(prors) {
    super();
    this.state = {
      data: [
        { name: "Степан Бандера", salary: "2000$", increase: false, id: 1 },
        { name: "Михайло Крашко", salary: "900$", increase: false, id: 2 },
        { name: "Олексій Коваль", salary: "1800$", increase: false, id: 3 },
        { name: "Павло Ткач", salary: "800$", increase: false, id: 4 },
        { name: "Ігор Петренко", salary: "1100$", increase: false, id: 5 },
      ],
    };
    this.maxId = 6;
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      return { data: data.filter((item) => item.id !== id) };
    });
  };

  addItem = (name, salary) => {
    const newItem = {
      name,
      salary,
      increase: false,
      id: this.maxId++,
    };
    this.setState(({ data }) => {
      const newArray = [...data, newItem];
      console.log(newArray);
      return { data: newArray };
    });
  };

  render() {
    const { data } = this.state;
    return (
      <div className="app">
        <AppInfo />
        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
          <EmployeesList data={data} onDelete={this.deleteItem} />
          <EmployeesAddForm onAdd={this.addItem} />
        </div>
      </div>
    );
  }
}
export default App;
