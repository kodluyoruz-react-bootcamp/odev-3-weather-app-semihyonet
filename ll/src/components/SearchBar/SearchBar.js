import React, { useState, useEffect } from "react";
import styles from "./SearchBar.module.css";

import { Container } from "react-bootstrap";
const cities = require("../../data/city.list.json");
const SearchBar = () => {
	const [cityName, setCityName] = useState("Istanb");
	const [city, setCity] = useState({});
	//console.log(cities[0]);
	useEffect(() => {
		let filter = cities.filter((val) =>
			val.name.toLowerCase().startsWith(cityName.toLowerCase())
		);
		if (filter.length > 0) setCity(filter[0]);
	}, [cityName]);
	return (
		<Container className={styles.container}>
			<form>
				<input
					onChange={(a) => {
						setCityName(a.target.value);
					}}
				/>
			</form>
			{city.name ? city.name : "Couldn't find City"}
		</Container>
	);
};

export default SearchBar;
