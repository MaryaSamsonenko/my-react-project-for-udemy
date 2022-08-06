import EmployeesListItem from "../employees-list-item/employees-list-item";
import "./employees-list.css";

const EmployeesList = ({ data }) => {
  const items = data.map((item) => {
    const { id, ...itemProps } = item;
    return <EmployeesListItem key={id} {...itemProps} />;
    // {...itemProps} = name={item.name} salary={item.salary}
  });
  return <ul className="app-list list-group">{items}</ul>;
};

export default EmployeesList;
