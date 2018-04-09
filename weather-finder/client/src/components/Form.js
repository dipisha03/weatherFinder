import React from "react";

// Stateless functional component
const Form = props => (
  /* Set up a react attribute called onSubmit 
    and call onto the get.Weather prop in App.js */
    <form onSubmit = {props.getWeather}>
        <input type= "text" name="city" placeholder="City..."/>
        <input type= "text" name="country" placeholder="Country..."/>
        <button>Get Weather</button>
    </form>   
);

export default Form;