import React, { useState, useEffect, useContext } from "react";
import styles from "./SearchBar.module.css";
import WeatherContext from "../Context/weatherContext";

import { Container } from "react-bootstrap";
const cities = require("../../data/city.list.json");
const SearchBar = () => {
	const { setCoords, setCity: contextSetCity } = useContext(WeatherContext);

	const [cityName, setCityName] = useState("Istanb");
	const [city, setCityState] = useState({});

	useEffect(() => {
		let filter = cities.filter((val) =>
			val.name.toLowerCase().startsWith(cityName.toLowerCase())
		);
		if (filter.length > 0) setCityState(filter[0]);
	}, [cityName]);

	return (
		<Container className={styles.container}>
			<form
				onSubmit={(e) => {
					e.preventDefault();
				}}
			>
				<input
					onChange={(a) => {
						setCityName(a.target.value);
					}}
					onKeyDown={(e) => {
						if (e.keyCode === 13 && cityName !== "") {
							setCoords({
								lat: city.coord.lat,
								lon: city.coord.lon,
							});
							contextSetCity(city.name);
						}
					}}
				/>
			</form>
			Result:{city.name ? city.name : "Couldn't find City"}
		</Container>
	);
};

export default SearchBar;
