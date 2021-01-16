import React, { useContext } from "react";
import WeatherContext from "../Context/weatherContext";
import FeatherIcon from "../Context/FeatherIcon";
const WeatherToday = () => {
	const { weather, selectedCity } = useContext(WeatherContext);

	if (weather) {
		return (
			<div>
				<h1>{FeatherIcon(weather.current.weather[0].id, false, 50)}</h1>
				<h1>
					Todays weather in {selectedCity} is{" "}
					{weather.current.weather[0].main}
				</h1>
				<h3>
					<strong>{(weather.current.temp - 273).toFixed(0)}°</strong>
				</h3>
				<h2>
					{new Date(weather.current.dt * 1000)
						.toUTCString()
						.toString()
						.slice(5, 16)}
				</h2>
			</div>
		);
	} else return <>Loading...</>;
};

export default WeatherToday;
