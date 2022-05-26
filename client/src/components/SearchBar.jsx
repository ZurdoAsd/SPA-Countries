import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getCountriesName } from "../redux/action";
import "../assets/SearchBar.css";


export default function SearchBar() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");


  function handleInputChange(e) {
    e.preventDefault();
    setName(e.target.value);
  }

  function handleClick(e) {
    e.preventDefault();
    dispatch(getCountriesName(name));
    setName('')
  }

 

  return (
    <div className="conteiner">
      <input
        className="input"
        type="text"
        placeholder="Country..."
        value={name}
        onChange={(e) => handleInputChange(e)}
      />
      <button
        className="button"
        type="submit"
        onClick={(e) => handleClick(e)}
      >
        Search
      </button>
    </div>
  );
}
