import "./ContactComponent.scss";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { IoIosHome } from "react-icons/io";
import { MdLocalPhone, MdEmail } from "react-icons/md";


const ContactComponent = () => {
    return (
        <>
            <div className="contact-container">
                <div className="content-left">
                    <div className="title">Liên Hệ Với Chúng Tôi</div>
                    <div className="sub-title">Để được tư vấn trực tiếp</div>
                    <div className="form-contact">

                        <FloatingLabel label="Your name">
                            <Form.Control type="text" placeholder="Your name" />
                        </FloatingLabel>

                        <FloatingLabel
                            label="Email address"
                            className="mt-3"
                        >
                            <Form.Control type="email" placeholder="name@example.com" />
                        </FloatingLabel>

                        <FloatingLabel controlId="floatingTextarea2" label="Your questions">
                            <Form.Control
                                as="textarea"
                                placeholder="Leave a comment here"
                                style={{ height: '130px' }}
                                className="mt-3"
                            />
                        </FloatingLabel>

                        <div className="mt-4 button">
                            <button>Liên Hệ</button>
                        </div>

                    </div>
                </div>

                <div className="content-right">
                    <div className="contact-border">
                        <div className="title">Thông tin liên hệ của chúng tôi</div>
                        <div className="address">
                            <div className="label">Địa chỉ 1:</div>
                            <div className="content"> <IoIosHome /> Đường số 13, KDC ấp 5, Phong Phú, Bình Hưng, Bình Chánh</div>
                        </div>

                        <div className="address">
                            <div className="label">Địa chỉ 2:</div>
                            <div className="content"> <IoIosHome /> 88, QL80, xã Tân Bình, huyện Châu Thành, tỉnh Đồng Tháp</div>
                        </div>

                        <div className="phone">
                            <div className="label">Số điện thoại:</div>
                            <div className="each-phone"><MdLocalPhone /> 0398.960.639</div>
                            <div className="each-phone"><MdLocalPhone /> 0121.4945.007</div>
                        </div>

                        <div className="email">
                            <div className="label">Email:</div>
                            <div className="each-mail"> <MdEmail /> ngtiendat242002@gmail.com</div>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ fontSize: "1.5em", padding: "20px 0", fontWeight: "600" }}>Vị trí của chúng tôi</div>
            <div className="map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d44340.155021417435!2d106.65693896926075!3d10.799588599087526!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752949eb3e795f%3A0xa435dd1685ea2fbc!2zQ8O0bmcgVmnDqm4gSG_DoG5nIFbEg24gVGjhu6U!5e0!3m2!1svi!2s!4v1742459672992!5m2!1svi!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </>

    )
}

export default ContactComponent;