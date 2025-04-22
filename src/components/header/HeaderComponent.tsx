'use client'
import Link from 'next/link';
import './HeaderComponent.scss';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { usePathname } from "next/navigation";

const HeaderComponent = () => {
    const pathName = usePathname();

    return (
        <div className="header-component">
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Link className='brand' href={'/'}>PlantShop</Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link className={pathName === '/' ? 'nav-link active' : 'nav-link'} href={'/'}>Trang chủ</Link>
                            <Link className={pathName === '/Products' ? 'nav-link active' : 'nav-link'} href={'/Products'}>Sản Phẩm</Link>
                            <Link className={pathName === '/Care' ? 'nav-link active' : 'nav-link'} href={'/Care'}>Cẩm Nang</Link>
                        </Nav>

                        <div className='contact'>
                            <Nav.Link className='login-item' href={'/contact'}>Liên hệ chúng tôi</Nav.Link>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default HeaderComponent;