import React, { useEffect } from "react";
import { useDispatch,useSelector } from 'react-redux'
import { filterAlpha,filterContinent,populationOrder,filterActiv,getActivities} from '../redux/action'

export default function Sorts({setCurrentPage,setOrder}){
    const dispatch = useDispatch(); 
    const Activ= useSelector((state)=> state.activities);
    // console.log(Activ)
    let aux=[]
    Activ.forEach(e=>{
      aux.push({name:e.name})
      
    })
    //  console.log (aux)

     let genres2= [...new Set(Object.values(aux))]
     console.log (genres2)


    useEffect(()=>{
      dispatch(getActivities())
    },[dispatch]
   )
    const handleSort = (e) => {
        dispatch(filterAlpha(e.target.value));
        console.log(e.target.value)
        setCurrentPage(1);
        setOrder(e.target.value);
      };
       
      const handleSortPopulation= (e)=> {
        e.preventDefault();
        dispatch(populationOrder(e.target.value));
        setCurrentPage(1);
        setOrder(e.target.value);
      }
    
      const handleFilter = (e) => {
        e.preventDefault();
        dispatch(filterContinent(e.target.value))
        setCurrentPage(1);
        setOrder(e.target.value);
        ;}
       

      const handleCountryActivity=(e)=>{
          e.preventDefault();
          dispatch(filterActiv(e.target.value))
          setCurrentPage(1);
          setOrder(e.target.value);

      }

    return <div ClassName="contenedor">
      <div ClassName= "filtro"> 
<h5>Ordenar por </h5>
  <select defaultValue="" onChange={(e) => handleSort(e)}>
    <option disabled value="">--Chose one--</option>
    <option value="asc">A-Z</option>
    <option value="des">Z-A</option>
   </select>
</div>
<div ClassName="filtro"> 
<h5>Ordenar por </h5>
  <select defaultValue="" onChange={(e) => handleSortPopulation(e)}>
    <option disabled value="">--Chose one--</option>
    <option value="population_asc">+Población</option>
    <option value="population_des">-Población</option>
   </select>
  </div>
  <div ClassName="filtro"> 
 <h5>Filtrar por continent</h5>
  <select defaultValue="" onChange={(e) => handleFilter(e)}>
    <option disabled value="">--Chose one--</option>
    <option value = 'All'>All Continents</option>
    <option value="South America">Sudamerica</option>
    <option value="North America">Norteamerica</option>
    <option value="Asia"> Asia</option>
    <option value="Europe"> Europa</option>
    <option value="Africa"> Africa</option>
    <option value="Oceania"> Oceania</option>
    <option value="Antarctica"> Antarctic</option>
  </select>
  </div>
  <div ClassName="filtro"> 
  <h5>Filtrar por Activities</h5>
  <select defaultValue="" onChange={e=> handleCountryActivity(e)} >
  <option disabled value="">--Chose one--</option>
  {aux&&aux.map(e => <option key={e} value={e.name}>{e.name}</option>)}

  {/* ver usar id en el value ... y filtrar ne back  */}
  </select>
</div>
</div>
}