import "./App.css";
import SearchHeader from "./SearchHeader/SearchHeader";
import ImageList from "./Components/ImageList";
import searchImages from "./api";
import { useState } from "react";

function App() {
  const [images, setImages] = useState([]);

  const handleSubmit = async (term) => {
    const result = await searchImages(term); //Bir methoddan cevap alana kadar await kullanıyorum
    setImages(result);
  };

  return (
    <div className="App">
      <SearchHeader search={handleSubmit} />
      <ImageList imagesPlaceHolder={images} />
    </div>
  );
}

export default App;
