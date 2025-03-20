'use client'
import DiseaseArticle from "@/components/adminsite/DiseaseArticle";
import OrganArticle from "@/components/adminsite/OrganArticle";
import TreatmentArticle from "@/components/adminsite/TreamentArticle";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const AdminSite = () => {
    return (
        <div className="container mt-3" style={{ fontFamily: "var(--font-lexend)" }}>
            <Tabs
                defaultActiveKey="Organ"
                className="mb-3"
            >
                <Tab eventKey="Organ" title="Services">
                    <OrganArticle />
                </Tab>
                <Tab eventKey="Disease" title="Completed Projects">
                    <DiseaseArticle />
                </Tab>
                <Tab eventKey="Treatment" title="Handbooks">
                    <TreatmentArticle />
                </Tab>
            </Tabs>

        </div>
    )
}

export default AdminSite;