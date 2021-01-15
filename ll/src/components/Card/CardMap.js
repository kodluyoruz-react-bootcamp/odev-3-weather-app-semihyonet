import React, { useState, useContext, useEffect } from "react";
import Card from "./Card";
import { Container, Row, Col } from "react-bootstrap";
import WeatherContext from "../Context/weatherContext";
const axios = require("axios");
const CardMap = () => {
	useEffect(() => {
		axios
			.get(
				`api.openweathermap.org/data/2.5/weather?lat=41.0651146&lon=28.684799899999998&appid=7731883ed096bce1ae0333fec828606b`
				// "https://jsonplaceholder.typicode.com/users"
			)
			.then((res) => {
				console.log(res.data);
			})
			.catch((e) => {
				console.log(e);
			});
	}, []);
	const { weather } = useContext(WeatherContext);

	const [arr, setArr] = useState([1, 2, 3, 4, 5, 6]);
	return (
		<Container style={{ paddingTop: 30 }}>
			<Row>
				{arr.map((a) => {
					return (
						<Col sm={4} lg={2}>
							<Card />
						</Col>
					);
				})}
			</Row>
		</Container>
	);
};

export default CardMap;
