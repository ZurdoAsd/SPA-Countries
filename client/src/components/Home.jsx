import React from "react";
import { Fragment, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCountries } from "../redux/action";
import { Link } from "react-router-dom";
import Country from "./Country";
import Paginado from "./Paginado";
import SearchBar from "./SearchBar";
import Sorts from "./Sorts";
import "../assets/home.css";

export default function Home() {
  const dispatch = useDispatch(); // para q vayan despachando mis acciones
  const [order, setOrder] = useState('');
  const todosLosPaises = useSelector((state) => state.countries); // le paso el estado // traeme en esa constante todo loq  este en el estado de countries
  //creo estados locales. 1º un estado con la pag actual y un stado que me setee esa pag- seteo en 1
  const [currentPage, setCurrentPage] = useState(1);
  //paises por pag, que setee los paises xpag
  // eslint-disable-next-line no-unused-vars
  const [countriesForPage, setCountriesForPage] = useState(9);
  //indice del ultimo pais /
  const indexOfLastCountries = currentPage * countriesForPage; //10
  //indice del 1º pais
  const indexOffirestCountries = indexOfLastCountries - countriesForPage; //
  //paises de la pag actual = corto el array de todos los paises con el slice
  const currentCountries = todosLosPaises.slice(
    indexOffirestCountries,
    indexOfLastCountries
  );

  const paginado = (NumPag) => {
    setCurrentPage(NumPag);
  };
  useEffect(() => {
    dispatch(getAllCountries()); 
  }, [dispatch,]);

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(getAllCountries());
  };

  return (
    <div className="Home">
      <SearchBar/>
          <button className="botForm" onClick={e => {handleClick(e)}}>RECARGAR</button>
        <Link to="/Create">
          <button className="botForm">Crear Actividad </button>
        </Link>   
      <Sorts setOrder={setOrder} setCurrentPage={setCurrentPage}/>

         <Paginado
          countriesForPage={countriesForPage}
          todosLosPaises={todosLosPaises.length}
          paginado={paginado}
        />
        {currentCountries?.map((e) => {
          return (
            <Fragment>
              <Link to={"/home/" + e.id}>
                <Country
                  name={e.name}
                  flag={e.flag}
                  continent={e.continent}
                  key={e.id}
                />
             </Link>
            </Fragment> 
          );
        })}
    </div>
  );
}
