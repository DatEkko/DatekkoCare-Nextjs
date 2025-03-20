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

                <div className='content-center'>
                    <div className='introduce'>
                        <div className='title-content'>Dịch vụ của chúng tôi</div>
                        <ul className='content'>
                            <li className='each-content'>Cung cấp cây cảnh đa dạng, phù hợp với mọi không gian</li>
                            <li className='each-content'>Thiết kế và thi công sân vườn theo yêu cầu</li>
                            <li className='each-content'>Chăm sóc, cắt tỉa, bảo dưỡng cây xanh định kỳ</li>
                            <li className='each-content'>Tư vấn phong thủy cây cảnh giúp thu hút tài lộc</li>
                        </ul>
                    </div>

                </div>

                <div className='content-right'>
                    <div className='introduce'>
                        <div className='title-content'>
                            Giới thiệu về website
                        </div>
                        <div className='content'>
                            Chúng tôi chuyên cung cấp các loại cây cảnh phong phú, từ cây để bàn, cây nội thất đến cây sân vườn, bonsai nghệ thuật. Bên cạnh đó, chúng tôi còn cung cấp dịch vụ thiết kế, thi công và bảo dưỡng sân vườn chuyên nghiệp, giúp không gian sống của bạn luôn xanh mát và tràn đầy sức sống.                        </div>
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