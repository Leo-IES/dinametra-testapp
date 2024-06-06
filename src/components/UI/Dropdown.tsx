import { useState } from "react";
import "./Dropdown.css";

interface Option {
  id: number;
  name: string;
}
export const Dropdown = ({
  title = "",
  options = [],
  action,
}: {
  title: string;
  options: Array<Option>;
  action: any;
}) => {
  const [selectedOption, setSelectedOption] = useState("");

  const setOption = (option:Option) => {
    setSelectedOption(option.name);
    action(option.id);
  };

  return (
    <div className="dropdown">
      <button className="dropbtn">
        {title} {selectedOption != "" && selectedOption != "Hidde Filter" ? selectedOption : null}
      </button>
      <div className="dropdown-content">
        {options.map((option: Option) => (
          <div key={option.id} onClick={($event) => setOption(option)}>
            {option.name}
          </div>
        ))}
      </div>
    </div>
  );
};
