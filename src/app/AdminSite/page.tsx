'use client'
import AuthenticationComponent from "@/components/adminsite/AuthenticationComponent";
import DiseaseArticle from "@/components/adminsite/DiseaseArticle";
import OrganArticle from "@/components/adminsite/OrganArticle";
import ProductList from "@/components/adminsite/ProductList";
import TreatmentArticle from "@/components/adminsite/TreamentArticle";
import { useState } from "react";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const AdminSite = () => {
    const [isAdmin, setIsAdmin] = useState<boolean>(false);

    return (
        <>
            {isAdmin ?
                <div className="container mt-3" style={{ fontFamily: "var(--font-lexend)" }}>
                    <Tabs
                        defaultActiveKey="Product"
                        className="mb-3"
                    >
                        <Tab eventKey="Product" title="Products">
                            <ProductList />
                        </Tab>
                        <Tab eventKey="Service" title="Services">
                            <OrganArticle />
                        </Tab>
                        <Tab eventKey="Project" title="Completed Projects">
                            <DiseaseArticle />
                        </Tab>
                        <Tab eventKey="Handbooks" title="Handbooks">
                            <TreatmentArticle />
                        </Tab>
                    </Tabs>

                </div>
                :
                <div className="container">
                    <AuthenticationComponent
                        isAdmin={isAdmin}
                        setIsAdmin={setIsAdmin}
                    />
                </div>
            }


        </>
    )
}

export default AdminSite;