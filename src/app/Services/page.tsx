'use client'
import ServiceComponent from '@/components/services/ServiceComponent';
import PerfectScrollBar from 'react-perfect-scrollbar';

const OrgansComponent = () => {
    return (
        <div className="organ-container" style={{ height: "100vh", fontFamily: "var(--font-lexend)" }}>
            <PerfectScrollBar>
                <div className="container">
                    <ServiceComponent />
                </div>
            </PerfectScrollBar>
        </div>
    )
}

export default OrgansComponent;