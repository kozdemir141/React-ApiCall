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
//Formda enter a bastığımda handleform submit e gidicek search de props olarak "Kutlu" yu geçtik
//App js de <SearchHeader search={handleSubmit}/> search handle submit in içinde verdiğim parametre tetikleniyor handle submit de parametreyi term ü consola basıyor
