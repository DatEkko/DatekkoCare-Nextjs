'use client'
import Link from 'next/link';
import './HeaderComponent.scss';
import { useRouter } from 'next/navigation';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

const HeaderComponent = () => {
    const router = useRouter();
    return (
        <div className="header-component">
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand className='brand' href="#home">DATEkko Care</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link className='nav-link' href={'/'}>Home</Link>
                            <Link className='nav-link' href={'/Organs'}>Organs</Link>
                            <Link className='nav-link' href={'/Diseases'}>Common Diseases</Link>
                            <Link className='nav-link' href={'/Care'}>Nourishment & Care</Link>
                        </Nav>

                        <Nav>
                            <Nav.Link className='login-item' href="/login">Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default HeaderComponent;