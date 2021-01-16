import React from "react";

import { Row, Col, Container } from "react-bootstrap";
import CardMap from "../components/Card/CardMap";
import WeatherToday from "../components/Weather/WeatherToday";

import styles from "./WeatherScreen.module.css";
const WeatherScreen = () => {
	//const { values } = useContext(WeatherContext);

	return (
		<>
			<Row>
				<Col className={styles.todayWeather} style={{ height: "50vh" }}>
					<WeatherToday />
				</Col>
			</Row>
			<Row>
				<Container>
					<Col style={{ height: "30vh" }}>
						<CardMap />
					</Col>
				</Container>
			</Row>
		</>
	);
};

export default WeatherScreen;
