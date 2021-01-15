import axios from "axios";
import { createContext, useState, useEffect } from "react";
var NodeGeocoder = require("node-geocoder");
const WeatherContext = createContext(null);

const defaultTheme = localStorage.getItem("defaultTheme");
let options = {
	provider: "google",
	httpAdapter: "https", // Default
	apiKey: process.env.REACT_APP_GOOGLE_KEY, // for Mapquest, OpenCage, Google Premier
	formatter: "json", // 'gpx', 'string', ...
};
export const WeatherProvider = ({ children }) => {
	const [geocodeReverse, setGeocodeReverse] = useState({});
	const [selectedCity, setCity] = useState({});
	const [weather, setWeather] = useState({});

	const getWeather = async (lat, lon) => {
		// let weatherData = await axios.get(
		// 	`api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHER_KEY}`
		// );
		// setWeather(weatherData);
	};

	useEffect(() => {
		let geocoder = NodeGeocoder(options);
		navigator.geolocation.getCurrentPosition(
			(position) => {
				geocoder.reverse(
					{
						lat: position.coords.latitude,
						lon: position.coords.longitude,
					},
					(err, res) => {
						if (!res) console.log(err);
						else {
							console.log(position.coords);
							setGeocodeReverse(res);
							getWeather(
								position.coords.latitude,
								position.coords.longitude
							);
						}
					}
				);
			},
			(error) => {
				console.error(
					"Error Code = " + error.code + " - " + error.message
				);
			}
		);
	}, []);

	const values = {
		weather,
		geocodeReverse,
	};

	return (
		<WeatherContext.Provider value={values}>
			{children}
		</WeatherContext.Provider>
	);
};

export default WeatherContext;
