import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getDetails,clean} from "../redux/action";
import "../assets/Details.css";
export default function Details(props) {
  const { id } = useParams();
  console.log(id)
  const dispatch = useDispatch();
  const details = useSelector((state) => state.details);
  console.log(details)

  useEffect(() => {
    dispatch(getDetails(id));
  return ()=> dispatch(clean())
  }, [dispatch, id]);

if(details.name) { 
  return (
    <div className="head">
      <div>
        
         <div>    
        <h1>{details.name}</h1>
        <img src={details.flag} alt="image_flag"className="image" height="400px"width="550px"/>
        <h2><b>Continent:</b> {details.continent}</h2>
        <h2><b>Capital:</b> {details.capital}</h2>
        <h2><b>Subregion:</b> {details.subregion}</h2>
        <h2><b>Area:</b> {details.area}km2</h2>
         <h2><b>Population:</b>{details.population}habitantes</h2>
         {details.Activities.length? (details.Activities.map((e) => {return (
              <div>
                <h3>Actvidad Turistica:</h3>
                {/* key= {e.id} */}
                <h4>Nombre : {e.name}</h4>
                {/* <h4>Season : {e.season}</h4>
                <h4>Duracion : {e.duration}</h4>
                <h4>Dificultad : {e.difficulty}</h4> */}
              </div>
            );
          })
        ) : (
          <h3>There are no activities</h3>
        )} 
        <hr />
        <Link to="/home">
          <button className="botForm">go to home</button>
        </Link> 
        </div> 
      </div>
     
    </div>
  );
        }return <p>loading</p>
}
