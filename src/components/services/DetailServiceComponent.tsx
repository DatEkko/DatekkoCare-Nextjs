'use client'
import { useRouter } from "next/navigation";
import "./DetailServiceComponent.scss";
import Image from "next/image";

export const DetailServiceComponent = ({ service, allService, id, allProject }: any) => {
    const router = useRouter();
    const goToService = (id: number) => {
        router.push(`/Services/${id}`);
    };

    return (
        <>
            <div className="detail-service-component">
                <div className="title">
                    {service.name}
                </div>

                <div className="infor">
                    <div className="description">
                        {service.description}

                        <div className="contact">
                            <button>Liên hệ ngay</button>
                        </div>
                    </div>

                    <div className="image">
                        <Image
                            src={service.image}
                            alt=""
                            fill
                            quality={100}
                            className="image-service"
                        />
                    </div>
                </div>
            </div>

            <div className="other-title">Các dịch vụ khác</div>
            <hr></hr>

            <div className="other-service">
                {allService && allService.length > 0 &&
                    allService
                        .filter((item: { id: number }) => item.id !== +id)
                        .map((item: any, index: number) => {
                            return (
                                <div
                                    onClick={() => goToService(+item.id)}
                                    className="each-service"
                                    key={item.id}>
                                    <div className="image">
                                        <Image
                                            src={item.image}
                                            alt=""
                                            fill
                                            quality={100}
                                            className="image-service"
                                        />
                                    </div>

                                    <div className="name">
                                        {item.name}
                                    </div>
                                </div>
                            )
                        })
                }
            </div>

            <div className="other-title">Công trình đã hoàn thiện</div>
            <hr></hr>

            <div className="projects">
                {allProject && allProject.length > 0 &&
                    allProject.map((item: any, index: number) => {
                        return (
                            <div
                                className="each-project"
                                key={item.id}>
                                <div className="image">
                                    <Image
                                        src={item.image}
                                        alt=""
                                        fill
                                        quality={100}
                                        className="image-service"
                                    />
                                </div>

                                <div className="infor">
                                    <div className="name">
                                        {item.name}
                                    </div>

                                    <div className="content">
                                        {item.description}
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}