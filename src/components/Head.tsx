import {Navbar, Container, Nav} from "react-bootstrap";

function Head () {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#best">Best</Nav.Link>
                        <Nav.Link href="#new">New Arrival</Nav.Link>
                        <Nav.Link href="#cate">Cate</Nav.Link>
                        <Nav.Link href="#event">Event</Nav.Link>
                        <Nav.Link href="#cs">CS</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Head;