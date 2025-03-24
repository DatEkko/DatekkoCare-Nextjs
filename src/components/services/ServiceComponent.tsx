"use client";
import "./ServiceComponent.scss";
import s1 from "./../../assets/thi công sân vườn.jpg";
import s2 from "./../../assets/chăm sóc.jpg";
import s3 from "./../../assets/cá koi.jpg";
import s4 from "./../../assets/bán cây.jpg";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";

const ServiceComponent = () => {
    const router = useRouter();
    const [pendingStates, setPendingStates] = useState<{ [key: number]: boolean }>({});
    const [isPending, startTransition] = useTransition();

    const goToService = (id: number) => {
        setPendingStates((prev) => ({ ...prev, [id]: true })); // Chỉ đặt pending cho ID hiện tại

        startTransition(() => {
            router.push(`/Services/${id}`);
            setPendingStates((prev) => ({ ...prev, [id]: false })); // Reset trạng thái
        });
    };

    const services = [
        {
            id: 4,
            title: "Thiết kế và thi công sân vườn",
            content:
                `Chúng tôi chuyên cung cấp dịch vụ thiết kế và thi công sân vườn chuyên nghiệp,
                    mang đến không gian xanh độc đáo và hài hòa cho mọi công trình.
                    Với đội ngũ nhân sự giàu kinh nghiệm, chúng tôi cam
                    kết tạo ra những khu vườn không chỉ đẹp mắt mà còn phù hợp với nhu cầu
                    và phong cách sống của từng khách hàng.`,
            img: s1.src,
        },
        {
            id: 2,
            title: "Bảo trì và bảo dưỡng sân vườn",
            content:
                ` Chúng tôi giúp duy trì vẻ đẹp và sức sống của khu vườn theo thời gian.
                    Với đội ngũ chuyên gia giàu kinh nghiệm, chúng tôi cung cấp các giải pháp
                    chăm sóc toàn diện, từ cắt tỉa cây xanh, bón phân, kiểm soát sâu bệnh đến bảo
                    dưỡng hệ thống tưới tự động. Dịch vụ linh hoạt theo nhu cầu khách hàng,
                    bao gồm bảo dưỡng định kỳ hoặc theo yêu cầu, đảm bảo khu vườn của bạn luôn
                    ở trạng thái tốt nhất.`,
            img: s2.src,
        },
        {
            id: 8,
            title: "Chăm sóc và thi công hồ cá Koi",
            content:
                `Chúng tôi mang đến không gian sống đẳng cấp và hài hòa với thiên nhiên.
                    Với đội ngũ chuyên gia có kinh nghiệm trong thiết kế hồ cá Koi đạt chuẩn,
                    chúng tôi cam kết tạo nên hệ sinh thái bền vững, giúp cá Koi phát triển khỏe mạnh và
                    tăng tính thẩm mỹ cho khu vườn của bạn. Với các dịch vụ như: Vệ sinh hồ,
                    kiểm tra chất lượng nước, xử lý rong tảo, thay nước định kỳ và phòng ngừa bệnh cho cá.`,
            img: s3.src,
        },
        {
            id: 1,
            title: "Cung cấp các loại cây cảnh",
            content:
                `Chúng tôi cung cấp đa dạng các loại cây cảnh từ cây nội thất,
                    cây ngoại thất đến cây bonsai nghệ thuật, đáp ứng mọi nhu cầu
                    trang trí và phong thủy. Chúng tôi cam kết mang đến những cây xanh
                    chất lượng cao, giúp không gian sống và làm việc trở nên xanh mát,
                    gần gũi với thiên nhiên.`,
            img: s4.src,
        },
    ];

    return (
        <div className="services-container">
            <div className="title">Dịch Vụ Của Chúng Tôi</div>
            <hr />

            {services.map((service) => (
                <div className="each-service" key={service.id}>
                    <div className="content-left">
                        <div className="title-service">{service.title}</div>
                        <div className="content">{service.content}</div>

                        <div className="button">
                            <button onClick={() => goToService(service.id)} disabled={pendingStates[service.id]}>
                                {pendingStates[service.id] ? "Đang tải..." : "Xem chi tiết"}
                            </button>
                        </div>
                    </div>

                    <div className="content-right">
                        <div className="img-container" style={{ backgroundImage: `url("${service.img}")` }}></div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ServiceComponent;
