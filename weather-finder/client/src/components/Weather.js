import React from "react";

// Stateless functional component
const Weather = props => (
  /* Only display the below states when the user presses the Get Weather button */
    <div class="weather__info"> 
      { 
        props.city && props.country && <p className="weather__key">Location: 
        <span className="weather__value"> {props.city}, {props.country} </span>
      </p> 
      }
      { 
        props.temperature && <p className="weather__key">Temperature: 
        <span className="weather__value"> {props.temperature} </span>
      </p> 
      }
      { 
        props.humidity && <p className="weather__key">Humidity: 
        <span className="weather__value"> {props.humidity} </span>
      </p> 
      }
      { 
        props.description && <p className="weather__key">Conditions: 
        <span className="weather__value"> {props.description} </span>
      </p> 
      }
      { 
        props.error && <p className="weather__error">{props.error} 
      </p> 
      }
    </div>   
);

export default Weather;