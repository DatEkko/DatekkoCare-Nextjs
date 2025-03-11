import Image from 'next/image';
import './OrganSection.scss';
import tim from "./../../../assets/organs/tim.svg";
import gan from "./../../../assets/organs/gan.svg";
import nao from "./../../../assets/organs/não.svg";
import phoi from "./../../../assets/organs/phổi.svg";

const OrganSection = () => {
    return (
        <div className="organ-section">
            <div className="main-title">
                Các Cơ Quan Chính
                <div className='underline'></div>
            </div>

            <div className='organ-content'>
                <div className='each-organ'>
                    <Image src={tim} alt="" className='organ-image' />
                    <div className='name'>
                        Tim
                    </div>
                    <div className='info'>
                        Tim là là là
                    </div>
                    <div className='btn-action'>
                        <button>Xem chi tiết</button>
                    </div>
                </div>

                <div className='each-organ'>
                    <Image src={phoi} alt="" className='organ-image' />
                    <div className='name'>
                        Phổi
                    </div>
                    <div className='info'>
                        Phổi là là là
                    </div>
                    <div className='btn-action'>
                        <button>Xem chi tiết</button>
                    </div>
                </div>

                <div className='each-organ'>
                    <Image src={gan} alt="" className='organ-image' />
                    <div className='name'>
                        Gan
                    </div>
                    <div className='info'>
                        Gan là là là
                    </div>
                    <div className='btn-action'>
                        <button>Xem chi tiết</button>
                    </div>
                </div>

                <div className='each-organ'>
                    <Image src={nao} alt="" className='organ-image' />
                    <div className='name'>
                        Não
                    </div>
                    <div className='info'>
                        Não là là là
                    </div>
                    <div className='btn-action'>
                        <button>Xem chi tiết</button>
                    </div>
                </div>
            </div>

            <div className='explore'>
                <button>Tìm hiểu thêm</button>
            </div>
        </div>
    )
}

export default OrganSection;