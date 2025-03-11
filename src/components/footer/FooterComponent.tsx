import './FooterComponent.scss';
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlinePhoneInTalk, MdOutlineEmail } from "react-icons/md";
import { FaFacebookF, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const FooterComponent = () => {
    return (
        <div className='footer-container'>
            <div className='container'>
                <div className='content-left'>
                    <div className='footer-content'>
                        <div className='icon'>
                            <MdOutlinePhoneInTalk />
                        </div>
                        +84 999 789456
                    </div>

                    <div className='footer-content'>
                        <div className='icon'><IoLocationOutline /></div>
                        <div className='text'>
                            21 Revolution Street <br></br> <b>Paris, France</b>
                        </div>
                    </div>

                    <div className='footer-content'>
                        <div className='icon'>
                            <MdOutlineEmail />
                        </div>
                        superdevsupport@datekko.com
                    </div>
                </div>

                <div className='content-right'>
                    <div className='introduce'>
                        <div className='title-content'>
                            Giới thiệu về website
                        </div>
                        <div className='content'>
                            Trang web cung cấp thông tin về các cơ quan nội tạng, bệnh lý thường gặp, cách điều trị và chăm sóc sức khỏe. Chúng tôi cam kết mang đến kiến thức y khoa chính xác, giúp bạn bảo vệ sức khỏe tốt hơn mỗi ngày.
                        </div>
                    </div>

                    <hr></hr>

                    <div className='social'>
                        <div className='symbol'>
                            <FaFacebookF className='icon' />
                            Facebook
                        </div>

                        <div className='symbol'>
                            <FaGithub className='icon' />
                            Github
                        </div>

                        <div className='symbol'>
                            <FaXTwitter className='icon' />
                            Twitter
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterComponent;