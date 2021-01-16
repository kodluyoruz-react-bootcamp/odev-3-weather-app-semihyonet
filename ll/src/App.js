import React from "react";
import WeatherScreen from "./Screens/WeatherScreen";
import { WeatherProvider } from "./components/Context/weatherContext";
import "./App.css";
//var NodeGeocoder = require("node-geocoder");
import Header from "./components/Header/Header";
function App() {
	return (
		<>
			<WeatherProvider>
				<Header />
				<div className="App">
					<WeatherScreen />
				</div>
			</WeatherProvider>
		</>
	);
}

export default App;
