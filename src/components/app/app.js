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
        {
          name: "Степан Бандера",
          salary: "2000$",
          increase: false,
          rise: false,
          id: 1,
        },
        {
          name: "Михайло Крашко",
          salary: "900$",
          increase: false,
          rise: false,
          id: 2,
        },
        {
          name: "Олексій Коваль",
          salary: "1800$",
          increase: false,
          rise: false,
          id: 3,
        },
        {
          name: "Павло Ткач",
          salary: "800$",
          increase: false,
          rise: false,
          id: 4,
        },
        {
          name: "Ігор Петренко",
          salary: "1100$",
          increase: false,
          rise: false,
          id: 5,
        },
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
      rise: false,
      id: this.maxId++,
    };
    this.setState(({ data }) => {
      const newArray = [...data, newItem];
      console.log(newArray);
      return { data: newArray };
    });
  };

  onToggleIncrease = (id) => {
    // this.setState(({ data }) => {
    //   const index = data.findIndex((elem) => elem.id === id);
    //   const old = data[index];
    //   const newItem = { ...old, increase: !old.increase };
    //   const newArr = [
    //     ...data.slice(0, index),
    //     newItem,
    //     ...data.slice(index + 1),
    //   ];
    //   return {
    //     data: newArr,
    //   };
    // });
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, increase: !item.increase };
        }
        return item;
      }),
    }));
  };

  onToggleRise = (id) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, rise: !item.rise };
        }
        return item;
      }),
    }));
  };

  render() {
    const employees = this.state.data.length;
    const increased = this.state.data.filter((item) => item.increase).length;
    const { data } = this.state;
    return (
      <div className="app">
        <AppInfo employees={employees} increased={increased} />
        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
          <EmployeesList
            data={data}
            onDelete={this.deleteItem}
            onToggleIncrease={this.onToggleIncrease}
            onToggleRise={this.onToggleRise}
          />
          <EmployeesAddForm onAdd={this.addItem} />
        </div>
      </div>
    );
  }
}
export default App;
