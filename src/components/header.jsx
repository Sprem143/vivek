import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Header() {

    return (
        <>
            <Navbar expand="lg" className='navbar'>
                <Container fluid>
                    <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="/">Home</Nav.Link>
                            <NavDropdown title="Our Services" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="/seo">SEO</NavDropdown.Item>
                                <NavDropdown.Item href="/website-designing" >
                                    Website Desigining
                                </NavDropdown.Item>
                                
                                <NavDropdown.Item href="/google-ads">
                                    Google Ads
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/instagram-ads">
                                    Instagram Ads
                                </NavDropdown.Item>

                                <NavDropdown.Item href="/facebook-ads">
                                    Facebook Ads
                                </NavDropdown.Item>
                            </NavDropdown>
                           
                            <Nav.Link href="/contact" >
                                Contact
                            </Nav.Link>
                            <Nav.Link href="/terms-conditions" >
                                Terms & Conditions
                            </Nav.Link>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}