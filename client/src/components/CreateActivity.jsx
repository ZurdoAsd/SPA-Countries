import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { postActivity, getAllCountries, getActivities } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";
import "../assets/CreateActivity.css";
import validationForm from "../filtros y validaciones/validate";

function ActivityCreate() {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);
  const [errors, setErrors] = useState({});
  const [input, setInput] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    countries: [],
  });

  function handleSubmit(e) {
    e.preventDefault();
    setErrors(validationForm(input));
    if (
      input.name &&
      input.difficulty &&
      input.duration &&
      input.season &&
      input.countries.length &&
      !Object.keys(errors).length
    ) {
      dispatch(postActivity(input));
      alert("Activity Created Successfully!!");
      setInput({
        name: "",
        difficulty: "",
        duration: "",
        season: "",
        countries: [],
      });
    } else {
      alert("All fields are required!!");
    }
  }

  useEffect(() => {
    dispatch(getAllCountries());
    dispatch(getActivities());
  }, [dispatch]);

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validationForm({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  }

  function handleSelect(e) {
    if (input.countries.includes(e.target.value)) {
      alert("The country has already been selected!!");
    } else {
      setInput({
        ...input,
        countries: [...input.countries, e.target.value],
      });
      setErrors(
        validationForm({
          ...input,
          countries: [...input.countries, e.target.value],
        })
      );
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    setErrors(validationForm(input));
    if (
      input.name &&
      input.difficulty &&
      input.duration &&
      input.season &&
      input.countries.length &&
      !Object.keys(errors).length
    ) {
      console.log(input)
      dispatch(postActivity(input));
      alert("Activity Created Successfully!!");
      setInput({
        name: "",
        difficulty: "",
        duration: "",
        season: "",
        countries: [],
      });
    } else {
      alert("All fields are required!!");
    }
  }

  return (
    <div>
      <div>
        <h3 className="formTitle">
          <span>CREATE</span> YOUR Activity
        </h3>
      </div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label htmlFor="name">Name: </label>
          <input
            className={errors.name ? "errors" : "input"}
            type="text"
            name="name"
            value={input.name}
            onChange={handleChange}
          />
          {errors.name && <p className="errors">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="difficulty">Difficulty: </label>
          <select
            className={errors.difficulty ? "errors" : "input"}
            name="difficulty"
            value={input.difficulty}
            onChange={handleChange}
          >
            <option>Please select</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          {errors.difficulty && <p className="errors">{errors.difficulty}</p>}
        </div>

        <div>
          <label htmlFor="Duration">Duration: </label>
          <input
            className={errors.duration ? "errors" : "input"}
            type="number"
            placeholder="Enter the duration in hours"
            value={input.duration}
            name="duration"
            onChange={handleChange}
          />
          {errors.duration && <p className="errors">{errors.duration}</p>}
        </div>
        <div>
          <label htmlFor="Season">Season: </label>
          <select
            className={errors.season ? "errors" : "input"}
            name="season"
            value={input.season}
            onChange={handleChange}
          >
            <option value="">Please Select</option>
            <option value="summer">Summer</option>
            <option value="fall">Fall</option>
            <option value="winter">Winter</option>
            <option value="spring">Spring</option>
          </select>
          {errors.season && <p className="errors">{errors.season}</p>}
        </div>
        
        <div>
          <label htmlFor="Country">Country: </label>
          <select
            className={errors.country ? "errors" : "input"}
            name="countries"
            placeholder="Select Countries"
            value={input.country}
            onChange={(e) => handleSelect(e)}
          >
            <option value="">Select Countries</option>
            {countries.map((e) => (
              <option value={e.name}>{e.name}</option>
            ))}
          </select>
          {errors.country && <p className="errors">{errors.country}</p>}
        </div>
        <div>
          <button className="btn" type="submit">
            To Create
          </button>
        </div>
      </form>
      <Link to="/home">
        <button className="btn">Back to Home</button>
      </Link>
    </div>
  );
}

export default ActivityCreate;
