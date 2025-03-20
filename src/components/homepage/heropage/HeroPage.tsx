import './HeroPage.scss';
import Image from "next/image";
import bodyImage from "./../../../assets/Tree.png";

const HeroPage = () => {
    return (
        <div className="hero-page">
            <div className="content-left">
                <div className="main-title">Hành Trình Sống Xanh<br></br> <span>Mang thiên nhiên vào không gian sống</span></div>
                <div className="sub-title">
                    <div className='each-service'>✔ Cung cấp cây cảnh đa dạng</div>
                    <div className='each-service'>✔ Dịch vụ chăm sóc cây xanh</div>
                    <div className='each-service'>✔ Chăm sóc và thi công hồ cá Koi</div>
                    <div className='each-service'>✔ Thiết kế sân vườn chuyên nghiệp</div>
                </div>
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