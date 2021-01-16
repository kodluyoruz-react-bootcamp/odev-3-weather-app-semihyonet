import WeatherPlaceHolder from "../../Assets/placeholder.json";
import axios from "axios";
import { createContext, useState, useEffect } from "react";
var NodeGeocoder = require("node-geocoder");
const WeatherContext = createContext(null);

let options = {
	provider: "google",
	httpAdapter: "https", // Default
	apiKey: "AIzaSyC7Z_oIrzCNj3_JaS7wNmdHlQVi1NXKiLc", // for Mapquest, OpenCage, Google Premier
	formatter: "json", // 'gpx', 'string', ...
};
export const WeatherProvider = ({ children }) => {
	const [geocodeReverse, setGeocodeReverse] = useState({});
	const [selectedCity, setCity] = useState({});
	const [selectedCoords, setCoords] = useState({});
	const [weather, setWeather] = useState(WeatherPlaceHolder);

	const getWeather = async (lat, lon) => {
		let weatherData = await axios.get(
			`https://api.openweathermap.org/data/2.5/onecall?exclude=hourly,minutely,alerts&appid=${process.env.REACT_APP_WEATHER_KEY}&lat=${lat}&lon=${lon}`
		);
		setWeather(weatherData);
	};

	useEffect(() => {
		let geocoder = NodeGeocoder(options);
		navigator.geolocation.getCurrentPosition(
			(position) => {
				setCoords({
					lat: position.coords.latitude,
					lon: position.coords.longitude,
				});
				geocoder.reverse(
					{
						lat: position.coords.latitude,
						lon: position.coords.longitude,
					},
					(err, res) => {
						if (!res) console.log(err);
						else {
							setGeocodeReverse(res[0]);
							setCity(res[0].administrativeLevels.level1long);
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

	useEffect(() => {
		getWeather(selectedCoords.lat, selectedCoords.lon);
	}, [selectedCoords]);

	const values = {
		selectedCity,
		setCity,
		setCoords,
		weather: weather.data,
		geocodeReverse,
	};

	return (
		<WeatherContext.Provider value={values}>
			{children}
		</WeatherContext.Provider>
	);
};

export default WeatherContext;
