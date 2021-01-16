import React from "react";
import { Card } from "react-bootstrap";
import FeatherIcon from "../Context/FeatherIcon";
const WeatherCard = ({ data }) => {
	const black = "#343A40";
	//console.log(new Date(data.dt * 1000).toUTCString().toString().slice(0, 3));
	if (data)
		return (
			<Card style={{ marginBottom: 10 }}>
				{/* <Card.Img src={"../../Assets/sunny.png"} variant="top" /> */}
				<Card.Header>
					{FeatherIcon(data.weather[0].id, false)}
				</Card.Header>
				<Card.Body>
					<Card.Title as="div">
						<strong>{(data.temp.day - 273).toFixed(0)}°</strong>
					</Card.Title>

					<Card.Text as="div">{data.weather[0].main}</Card.Text>

					<Card.Text as="h3" style={{ color: black }}>
						{new Date(data.dt * 1000)
							.toUTCString()
							.toString()
							.slice(0, 3)}
					</Card.Text>
				</Card.Body>
			</Card>
		);
	else {
		return <>Loading</>;
	}
};

export default WeatherCard;
