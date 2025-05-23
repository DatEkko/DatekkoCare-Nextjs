import { notFound } from "next/navigation";
import {
    getAllOrganArticle,
    getServiceByIdService,
    getAllDiseaseArticle,
    getKoiProjectService,
    getMaintainProjectService,
    getDesignProjectService,
} from "@/app/action";
import { DetailServiceComponent } from "@/components/services/DetailServiceComponent";
import PerfectScrollContainer from "@/components/scrollbar/PerfectScrollBarContainer";
import FooterComponent from "@/components/footer/FooterComponent";

interface Article {
    id: number;
    [key: string]: any;
}

interface Service {
    [key: string]: any;
}

interface ApiResponse<T> {
    EC: number;
    DT: T;
}

interface Params {
    id: string;
}

interface Props {
    params: Promise<Params>;
}

export async function generateStaticParams(): Promise<{ id: string }[]> {
    try {
        const res = await getAllOrganArticle();
        if (res && res.EC === 0) {
            const articles: Article[] = res.DT;
            return articles.map((article) => ({ id: article.id.toString() }));
        }
        throw new Error("API không trả về dữ liệu hợp lệ");
    } catch (error) {
        console.error("Lỗi trong generateStaticParams:", error instanceof Error ? error.message : error);
        return [{ id: "1" }]; // Fallback
    }
}

const ServicePage = async ({ params }: Props) => {
    const { id } = await params;

    let service: Service = {};
    let allService: Article[] = [];
    let allProject: any[] = [];

    if (!id) return notFound();

    try {
        const res: ApiResponse<Service> = await getServiceByIdService(+id);
        if (res && res.EC === 0) {
            service = res.DT;
        }
    } catch (error) {
        console.error("Lỗi khi lấy service:", error instanceof Error ? error.message : error);
    }

    try {
        const res2: ApiResponse<Article[]> = await getAllOrganArticle();
        if (res2 && res2.EC === 0) {
            allService = res2.DT;
        }
    } catch (error) {
        console.error("Lỗi khi lấy allService:", error instanceof Error ? error.message : error);
        allService = []; // Fallback
    }

    // Lấy dự án theo ID
    try {
        if (+id === 8) {
            const res: ApiResponse<any[]> = await getKoiProjectService();
            if (res && res.EC === 0) {
                allProject = res.DT;
            }
        } else if (+id === 2) {
            const res: ApiResponse<any[]> = await getMaintainProjectService();
            if (res && res.EC === 0) {
                allProject = res.DT;
            }
        } else if (+id === 4) {
            const res: ApiResponse<any[]> = await getDesignProjectService();
            if (res && res.EC === 0) {
                allProject = res.DT;
            }
        } else {
            const res: ApiResponse<{ article: any[] }> = await getAllDiseaseArticle(1, 5);
            if (res && res.EC === 0) {
                allProject = res.DT.article;
            }
        }
    } catch (error) {
        console.error("Lỗi khi lấy allProject:", error instanceof Error ? error.message : error);
        allProject = [];
    }


    if (!Object.keys(service).length) return notFound();

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
};

export default ServicePage;