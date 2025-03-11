import './DiseasesSection.scss';

const DiseasesSection = () => {
    return (
        <div className="disease-section">
            <div className="main-title">
                Bệnh Lý Thường Gặp
                <div className='underline'></div>
            </div>

            <div className='disease-content'>
                <div className='each-disease'>
                    Bệnh tim mạch
                </div>

                <div className='each-disease'>
                    Ung thư
                </div>

                <div className='each-disease'>
                    Đái tháo đường
                </div>

                <div className='each-disease'>
                    Béo phì
                </div>
            </div>

            <div className='explore'>
                <button>Tìm hiểu thêm</button>
            </div>
        </div>
    )
}

export default DiseasesSection;