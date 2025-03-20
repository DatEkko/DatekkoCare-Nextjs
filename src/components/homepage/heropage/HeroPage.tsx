import './HeroPage.scss';
import Image from "next/image";
import bodyImage from "./../../../assets/Tree.png";

const HeroPage = () => {
    return (
        <div className="hero-page">
            <div className="content-left">
                <div className="main-title">Hành Trình Sống Xanh: Mang thiên nhiên vào không gian sống</div>
                <div className="sub-title">
                    Hành Trình Sống Xanh -
                    Chúng tôi cung cấp cây cảnh đa dạng, thiết kế sân vườn chuyên nghiệp và
                    dịch vụ chăm sóc cây xanh, góp phần mang đến một cuộc sống xanh - sạch - đẹp cho bạn và cộng đồng.
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