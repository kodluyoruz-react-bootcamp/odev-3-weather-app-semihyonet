import React, { useContext } from "react";
import WeatherContext from "../components/Context/weatherContext";
import { Row, Col, Container } from "react-bootstrap";
import CardMap from "../components/Card/CardMap";

const WeatherScreen = () => {
	//const { values } = useContext(WeatherContext);

	return (
		<>
			<Row>
				<Col style={{ backgroundColor: "#F00", height: "50vh" }}>
					1 of 3
				</Col>
				<Col style={{ backgroundColor: "#0F0", height: "50vh" }}>
					2 of 3
				</Col>
			</Row>
			<Row>
				<Container>
					<Col style={{ backgroundColor: "#00F", height: "30vh" }}>
						<CardMap />
					</Col>
				</Container>
			</Row>
		</>
	);
};

export default WeatherScreen;
