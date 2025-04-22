"use client"
import { useEffect, useState } from 'react';
import './ProductSection.scss';
import { getRandomProductAction } from '@/app/action';
import Image from 'next/image';

const ProductionSection = () => {
    const [data, setData] = useState<any>();

    const fetchData = async () => {
        const res = await getRandomProductAction("8");
        if (res && res.EC === 0) {
            setData(res.DT);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const formatNumber = (num: number): string => {
        return num.toLocaleString("vi-VN");
    };

    return (
        <div className="product-section">
            <div className="main-title">
                Sản Phẩm Nổi Bật
                <div className='underline'></div>
            </div>

            <div className='product-content'>
                {data && data.length > 0 &&
                    data.map((item: any, index: number) => {
                        return (
                            <div className="each-product" key={item.id}>
                                <div className='img-product'>
                                    <Image
                                        src={item.image}
                                        alt="Cây sân vườn"
                                        className="image-product"
                                        fill
                                    />
                                </div>
                                <div className="text-product">
                                    <div className="name-product">
                                        {item.name}
                                    </div>

                                    <div className="price">
                                        Giá: {formatNumber(+item.price)} <button>Mua</button>
                                    </div>
                                </div>

                                <div className="badge">
                                    Top {index + 1}
                                </div>
                            </div>
                        )
                    })
                }
            </div>

            <div className='explore'>
                <button>Tìm hiểu thêm</button>
            </div>
        </div>
    )
}

export default ProductionSection;