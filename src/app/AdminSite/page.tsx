'use client'
import OrganArticle from "@/components/adminsite/OrganArticle";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const AdminSite = () => {
    return (
        <div className="container mt-3" style={{ fontFamily: "var(--font-lexend)" }}>
            <Tabs
                defaultActiveKey="Organ"
                className="mb-3"
            >
                <Tab eventKey="Organ" title="Organ Article">
                    <OrganArticle />
                </Tab>
                <Tab eventKey="Disease" title="Disease Article">
                    Tab content for Disease
                </Tab>
                <Tab eventKey="Treatment" title="Treatment Article">
                    Tab content for Treatment
                </Tab>
            </Tabs>

        </div>
    )
}

export default AdminSite;