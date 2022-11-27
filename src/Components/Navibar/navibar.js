import "./navibar.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navibar = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/" className="logo">Collateral Management System</Navbar.Brand>

                    <Nav className="me-auto">
                        <Nav.Link href="/">Graphics</Nav.Link>
                        <Nav.Link href="/ads">Ad Copies</Nav.Link>
                    </Nav>

                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            <div className="navItems">
                                <button className="navButton">Register</button>
                                <button className="navButton">Login</button>
                            </div>
                        </Navbar.Text>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </div>
    // <div className="navbar">
    // <div className="navContainer">
    //     <span className="logo" >Collateral Management System</span>

    //
    //       <button className="navButton">Register</button>
    //       <button className="navButton">Login</button>
    //     </div>
    // </div>
    // </div>
    )
}

export default Navibar;
