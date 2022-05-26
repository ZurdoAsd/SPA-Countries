import React from "react";
import "../assets/Country.css";

function Country({ name, flag, continent }) {
  return (
    <ul className="box">
      <span className="name"> {name}</span>
      <img src={flag} alt="img country flag" className="image" width="100px" height="100px" />
      <span>{continent}</span>
    </ul>
  );
}

export default Country;
