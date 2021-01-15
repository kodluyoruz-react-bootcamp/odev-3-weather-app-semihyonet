import React from "react";
import { Card } from "react-bootstrap";

const WeatherCard = () => {
	const black = "#343A40";
	return (
		<Card style={{ marginBottom: 10 }}>
			<Card.Img src={"../../Assets/sunny.png"} variant="top" />

			<Card.Body>
				<Card.Title as="div">
					<strong>Name</strong>
				</Card.Title>

				<Card.Text as="div">hey</Card.Text>

				<Card.Text as="h3" style={{ color: black }}>
					$product.price
				</Card.Text>
			</Card.Body>
		</Card>
	);
};

export default WeatherCard;
