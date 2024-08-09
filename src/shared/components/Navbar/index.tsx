import { Col, Container, Navbar as ReactBootstrapNavbar, Row } from "react-bootstrap";

import NavbarBrand from "./components/NavbarBrand";
import NavbarSearchInput from "./components/NavbarSearchInput";

export default function Navbar() {
	return (
		<ReactBootstrapNavbar className="main-bg">
			<Container>
				<Row className="d-flex align-items-center">
					<Col xs={4}>
						<NavbarBrand />
					</Col>
					<Col>
						<NavbarSearchInput />
					</Col>
				</Row>
			</Container>
		</ReactBootstrapNavbar>
	);
}
