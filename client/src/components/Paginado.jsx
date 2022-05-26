import React from "react";
import "../assets/Paginado.css";

export default function Paginado ({countriesForPage, todosLosPaises, paginado}) {
  let pagNum = []

  for(let i = 0;  i <= Math.ceil(todosLosPaises / countriesForPage)-1; i++){
      pagNum.push(i +1)
  }
  return (
      <nav>
          <div >
          <ul>
              {pagNum && pagNum.map( (number) => (
                  <ul className="number" key= {number}>
                  <button className="bot"  href= "#/" onClick={()=> paginado(number)}>{number}</button>
                  </ul>
              ))}
          </ul>
          </div>
      </nav>
  )
}
