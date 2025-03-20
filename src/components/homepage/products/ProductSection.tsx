import './ProductSection.scss';

const ProductionSection = () => {
    return (
        <div className="product-section">
            <div className="main-title">
                Sản Phẩm Nổi Bật
                <div className='underline'></div>
            </div>

            <div className='product-content'>
                <div className='each-product'>
                    Máy đo huyết áp
                </div>
                <div className='each-product'>
                    Nhiệt kế điện tử
                </div>

                <div className='each-product'>
                    Máy đo đường huyết
                </div>

                <div className='each-product'>
                    Máy xông khí dung
                </div>

                <div className='each-product'>
                    Bông băng, gạc y tế
                </div>

                <div className='each-product'>
                    Máy trợ tim
                </div>

                <div className='each-product'>
                    Máy tạo oxy
                </div>

                <div className='each-product'>
                    Xe lăn y tế
                </div>
            </div>

            <div className='explore'>
                <button>Tìm hiểu thêm</button>
            </div>
        </div>
    )
}

export default ProductionSection;