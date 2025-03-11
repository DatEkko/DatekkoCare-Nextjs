import './HeroPage.scss';
import Image from "next/image";
import bodyImage from "./../../../assets/bodyBg.png";

const HeroPage = () => {
    return (
        <div className="hero-page">
            <div className="content-left">
                <div className="main-title">Hành Trình Sức Khỏe: Hiểu Rõ Cơ Thể Bạn</div>
                <div className="sub-title">Khám phá chức năng, bệnh lý và cách chăm sóc các cơ quan nội tạng để có một cơ thể khỏe mạnh hơn.</div>
                <div className='btn-action'>
                    <button>Khám phá ngay</button>
                </div>
            </div>
            <div className="content-right">
                <Image className='image-body' src={bodyImage} alt="" />
            </div>
        </div>
    )
}

export default HeroPage;