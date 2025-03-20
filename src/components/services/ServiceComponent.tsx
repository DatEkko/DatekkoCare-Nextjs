import "./ServiceComponent.scss";

const ServiceComponent = () => {
    return (
        <div className="services-container">
            <div className="title">Dịch Vụ Của Chúng Tôi</div>
            <hr></hr>
            <div className="each-service">
                <div className="content-left">
                    <div className="title-service">
                        Thiết kế và thi công sân vườn
                    </div>

                    <div className="content">
                        Chúng tôi chuyên cung cấp dịch vụ thiết kế và thi công sân vườn chuyên nghiệp,
                        mang đến không gian xanh độc đáo và hài hòa cho mọi công trình.
                        Với đội ngũ nhân sự giàu kinh nghiệm, chúng tôi cam
                        kết tạo ra những khu vườn không chỉ đẹp mắt mà còn phù hợp với nhu cầu
                        và phong cách sống của từng khách hàng.
                    </div>

                    <div className="button">
                        <button>Xem chi tiết</button>
                    </div>
                </div>

                <div className="content-right">
                    <div className="img-container">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceComponent;