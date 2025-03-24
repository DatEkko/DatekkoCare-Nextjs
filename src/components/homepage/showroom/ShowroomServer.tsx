import ShowroomSection from "./ShowroomSection";
import { getAllDiseaseArticle } from "@/app/action";

export default async function ShowroomSever() {
    const res = await getAllDiseaseArticle(1, 10);
    const listDataShowroom = res?.EC === 0 ? res.DT.article : [];

    return <ShowroomSection listDataShowroom={listDataShowroom} />;
}