import "./SearchHeader.css";
import { useState } from "react";

function SearchHeader({ search }) {
  const [valueInput, setvalue] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    debugger;
    search(valueInput);
  };
  const handleChange = (event) => {
    setvalue(event.target.value);
  };
  return (
    <div className="searchDiv">
      <form onSubmit={handleFormSubmit}>
        <label>Ne Arıyorsunuz ?</label>
        <input value={valueInput} onChange={handleChange} />
      </form>
    </div>
  );
}

export default SearchHeader;
