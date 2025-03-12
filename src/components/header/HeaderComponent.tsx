'use client'
import Link from 'next/link';
import './HeaderComponent.scss';
import { useRouter } from 'next/navigation';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { usePathname } from "next/navigation";

const HeaderComponent = () => {
    const pathName = usePathname();
    const router = useRouter();

    return (
        <div className="header-component">
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand className='brand' href="#home">DATEkko Care</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link className={pathName === '/' ? 'nav-link active' : 'nav-link'} href={'/'}>Trang chủ</Link>
                            <Link className={pathName === '/Organs' ? 'nav-link active' : 'nav-link'} href={'/Organs'}>Cơ Quan Nội Tạng</Link>
                            <Link className={pathName === '/Diseases' ? 'nav-link active' : 'nav-link'} href={'/Diseases'}>Sản Phẩm Y Tế</Link>
                            <Link className={pathName === '/Care' ? 'nav-link active' : 'nav-link'} href={'/Care'}>Chăm Sóc Sức Khỏe</Link>
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