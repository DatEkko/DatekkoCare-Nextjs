import './CareSection.scss';

const CareSection = () => {
    return (
        <div className="care-section">
            <div className="main-title">
                Cẩm Nang Sức Khỏe
                <div className='underline'></div>
            </div>

            <div className='care-content'>
                <div className='each-care'>
                    Phòng chóng cảm cúm tại nhà
                </div>

                <div className='each-care'>
                    Mẹo hay chữa ho hiệu quả
                </div>

                <div className='each-care'>
                    Ngăn ngừa bệnh tim
                </div>

                <div className='each-care'>
                    Lộ trình giảm cân hiệu quả
                </div>
            </div>

            <div className='explore'>
                <button>Tìm hiểu thêm</button>
            </div>
        </div>
    )
}

export default CareSection;