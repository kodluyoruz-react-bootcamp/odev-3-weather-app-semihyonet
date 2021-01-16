import React, { useContext } from "react";
import Card from "./Card";
import { Container, Row, Col } from "react-bootstrap";
import WeatherContext from "../Context/weatherContext";

const CardMap = () => {
	const { weather } = useContext(WeatherContext);
	console.log(weather);

	return (
		<Container style={{ paddingTop: 30 }}>
			<Row>
				{weather !== undefined
					? weather.daily.map((a, i) => {
							if (i < 6)
								return (
									<Col key={`${i}`} sm={4} lg={2}>
										<Card data={a} />
									</Col>
								);
							else return <></>;
					  })
					: null}
			</Row>
		</Container>
	);
};

export default CardMap;
