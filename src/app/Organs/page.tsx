'use client'
import SliderOrgans from "@/components/services/slider";
import Carousel from 'react-bootstrap/Carousel';
import PerfectScrollBar from 'react-perfect-scrollbar';

const OrgansComponent = () => {
    return (
        <div className="organ-container" style={{ height: "100vh" }}>
            <PerfectScrollBar>
                <div className="container">
                    <SliderOrgans />
                </div>
            </PerfectScrollBar>
        </div>
    )
}

export default OrgansComponent;