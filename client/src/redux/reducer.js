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
  FILTER_CLIENT
} from "./actionTypes";

const initialState = {
  countries: [],
  activities: [],
  countriesForm: [],
  allCountries: [],
  details: {},
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL_COUNTRIES:
      return { ...state, countries: action.payload, allCountries: action.payload};
    case GET_NAME_COUNTRIES:
      return { ...state, countries: action.payload };
    case FILTER_CLIENT:
      return { ...state, details:{}};
    case GET_ACTIVITIES:
      return { ...state, activities: action.payload };
    case GET_DETAILS:
      return { ...state, details: action.payload };
    case GET_NAME_COUNTRIES_FORM:
      return { ...state, countriesForm: action.payload };
    case FILTER_BY_ALPHA:
      let val = action.payload;
      let orderCountry = [...state.countries];

       orderCountry = orderCountry.sort((a,b) =>
        { if(val === "asc"){ return a.name.localeCompare(b.name); }
        else{ return b.name.localeCompare(a.name); } });
        
         return { ...state, countries: orderCountry};
    case FILTER_CONTINENT:
      const aCountries = [...state.allCountries];
      const continentFiltered = action.payload === "All"?
      aCountries:
      aCountries.filter(e => e.continent.map(x=>x).includes(action.payload));
      return {
        ...state,
        countries: continentFiltered,
      };
    case POPULATION_ORDER:
      let orderPopulation = [...state.countries];
      orderPopulation.sort((a, b) => {
        if (a.population < b.population) {
          return action.payload === "population_des" ? -1 : 1;
        }
        if (a.population > b.population) {
          return action.payload === "population_des" ? 1 : -1;
        }
        return 0;
      });
      return {
        ...state,
        countries: orderPopulation,
      };

    case FILTER_ACTIVITY:
      const allActCountries = state.allCountries;
      const actFilter =
        // action.payload === "All"
        //   ? allActCountries
        //   : 
          
          // allActCountries.filter( e => e.Activities && e.Activities.map(e => e.name).includes(action.payload)); 
        allActCountries.filter( e =>  e.Activities.map(e => e.name).includes(action.payload)); 

        // ambas son correctas.. la primera mas q la segunda... 
        // no puse opcion all  jejeje
      // console.log(actFilter)
          return {
        ...state,
        countries: actFilter,
      };
    default:
      return state;
  }
};

export default rootReducer;
