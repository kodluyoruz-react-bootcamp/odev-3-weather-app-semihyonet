import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import SearchBar from "../SearchBar/SearchBar";
const Header = () => {
	return (
		<header>
			<Navbar bg="light" expand="lg" collapseOnSelect>
				<Container>
					<Navbar.Brand>Weather Changed</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ml-auto">
							<SearchBar />
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
};

export default Header;
