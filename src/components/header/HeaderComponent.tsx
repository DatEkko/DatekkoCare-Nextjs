'use client'
import Link from 'next/link';
import './HeaderComponent.scss';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { usePathname } from "next/navigation";

const HeaderComponent = () => {
    const pathName = usePathname();

    return (
        <div className="header-component">
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Link className='brand' prefetch href={'/'}>DATEkko Plant</Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link prefetch className={pathName === '/' ? 'nav-link active' : 'nav-link'} href={'/'}>Trang chủ</Link>
                            <Link prefetch className={pathName === '/Products' ? 'nav-link active' : 'nav-link'} href={'/Products'}>Sản Phẩm</Link>
                            <Link prefetch className={pathName === '/Care' ? 'nav-link active' : 'nav-link'} href={'/Care'}>Cẩm Nang</Link>
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