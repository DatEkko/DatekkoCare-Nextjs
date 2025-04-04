import { notFound } from "next/navigation";
import {
    getAllOrganArticle, getServiceByIdService,
    getAllDiseaseArticle, getKoiProjectService,
    getMaintainProjectService, getDesignProjectService
} from "@/app/action";
import { DetailServiceComponent } from "@/components/services/DetailServiceComponent";
import PerfectScrollContainer from "@/components/scrollbar/PerfectScrollBarContainer";
import FooterComponent from "@/components/footer/FooterComponent";

// Định nghĩa type cho params
interface Params {
    id: string;
}

// Sử dụng type chính xác cho Page component trong Next.js
interface Props {
    params: Promise<Params>; // params là một Promise chứa object với id
}

export async function generateStaticParams() {
    const res = await getAllOrganArticle();
    const articles = res.DT;
    return articles.map((article: any) => ({ id: article.id.toString() }));
}

const ServicePage = async ({ params }: Props) => {
    const { id } = await params; // await Promise để lấy params

    let service = {};
    let allService = [];
    let allProject = [];

    if (!id) return notFound();

    const res = await getServiceByIdService(+id);
    if (res && res.EC === 0) {
        service = res.DT;
    }

    const res2 = await getAllOrganArticle();
    if (res2 && res2.EC === 0) {
        allService = res2.DT;
    }

    if (+id === 8) {
        const res = await getKoiProjectService();
        if (res && res.EC === 0) {
            allProject = res.DT;
        }
    } else if (+id === 2) {
        const res = await getMaintainProjectService();
        if (res && res.EC === 0) {
            allProject = res.DT;
        }
    } else if (+id === 4) {
        const res = await getDesignProjectService();
        if (res && res.EC === 0) {
            allProject = res.DT;
        }
    } else {
        const res = await getAllDiseaseArticle(1, 5);
        if (res && res.EC === 0) {
            allProject = res.DT.article;
        }
    }

    if (!service) return notFound();

    return (
        <PerfectScrollContainer>
            <div className="container">
                <DetailServiceComponent
                    service={service}
                    allService={allService}
                    id={id}
                    allProject={allProject}
                />
            </div>
            <FooterComponent />
        </PerfectScrollContainer>
    );
}

export default ServicePage;