import axios from "axios";
import {
  ALL_COUNTRIES,
  GET_NAME_COUNTRIES,
  FILTER_ACTIVITY,
  FILTER_BY_ALPHA,
  FILTER_CONTINENT,
  POPULATION_ORDER,
  GET_ACTIVITIES,
  GET_DETAILS,
  GET_NAME_COUNTRIES_FORM,
  FILTER_CLIENT,
} from "./actionTypes";

export function getAllCountries() {
  return async function (dispatch) {
    let res = await axios(`http://localhost:3001/countries`);
    return dispatch({
      type: ALL_COUNTRIES,
      payload: res.data,
    });
  };
}

export function getCountriesName(name) {
  return async function (dispatch) {
    let res = await axios("http://localhost:3001/countries?name=" + name);
    return dispatch({ type: GET_NAME_COUNTRIES, payload: res.data });
  };
}

export function getDetails(id) {
  return async function (dispatch) {
    let res = await axios(`http://localhost:3001/countries/`+ id);
    return dispatch({
      type: GET_DETAILS,
      payload: res.data,
    });
  };
}

export function getNameCountriesForm(name) {
  return async function (dispatch) {
    let res = await axios("http://localhost:3001/countries?name=" + name);
    return dispatch({ type: GET_NAME_COUNTRIES_FORM, payload: res.data });
  };
}



export function getActivities() {
  return async function (dispatch) {
    let res = await axios.get("http://localhost:3001/activity");
    dispatch({ type: GET_ACTIVITIES, payload: res.data });
  };
}

export function postActivity(input) {
  return async function () {
    const res = await axios.post("http://localhost:3001/activity",
      input
    );
    return res.data;
  };
}
export function filterActiv(payload){
  return {
          type: FILTER_ACTIVITY,
          payload,
      }
}
export function filterAlpha(payload){
  return {
      type:FILTER_BY_ALPHA,
      payload,
  }
}
export function filterContinent(payload){
  return{
          type: FILTER_CONTINENT,
          payload,
      }
}
export function populationOrder(payload){
  return{
          type: POPULATION_ORDER,
          payload,
      }   
}
export function clean (){
  return{
    type: FILTER_CLIENT,
   
      }   
}