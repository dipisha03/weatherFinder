// First import the react object from packge.json
import React from "react";
// Import presentational components 
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

// Weather API KEY
const API_KEY = "e5c3008e506fa23de24affb1ca78a0c8";

// Initialize component 
class App extends React.Component {
   state = {
     temperature: undefined,
     city: undefined,
     country: undefined,
     humidity: undefined,
     description: undefined, 
     error: undefined
   }
  // Make weather API call using async await & fetch method 
    getWeather = async (e) => {
    // Use e.preventDefault to create single page app
    e.preventDefault ();
    // Create const for city & country based on user input
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch (`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}&units=metric`);
  /* Convert the response to JSON format. 
  Pass in the variable (api_call) and call on the json method with fetch method in place */
    const data = await api_call.json();
  // Set if/else statement based on user input 
  // If city & country values are entered then return states 
    if (city && country) {
  // Console.log data we get back from the API
    console.log(data);
  // Use set.state method to describe state values 
    this.setState ({
      temperature: data.main.temp,
      city: data.name,
      country: data.sys.country,
      humidity: data.main.humidity,
      description: data.weather[0].description, 
      error: ""
    });
  } else {
    this.setState ({
      temperature: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      description: undefined, 
      error: "Please enter the values 😁"
    });
  }
}
  render () {
    return (
      <div> 
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
               <div className="col-xs-4 title-container">
                < Titles />
               </div>
               <div className="col-xs-6 form-container">
                < Form getWeather={this.getWeather}/>
                < Weather 
                    temperature={this.state.temperature}
                    city={this.state.city}
                    country={this.state.country}
                    humidity={this.state.humidity}
                    description={this.state.description}
                    error={this.state.error}
                />
               </div>
              </div>
            </div>
          </div>
        </div>        
      </div>
    );
  }
}

// Export App
export default App;