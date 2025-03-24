'use client'
import { useEffect, useRef, useState } from 'react';
import './ShowroomSection.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';

type DiseasesArticle = {
    organ_id: string | number,
    name: string,
    description: string,
    image?: string,
    cre: string
}

const ShowroomSection = ({ listDataShowroom }: { listDataShowroom: DiseasesArticle[] }) => {
    const [showDataMap, setShowDataMap] = useState<{ [key: number]: boolean }>({});

    const toggleShowData = (index: number) => {
        setShowDataMap((prev) => ({
            ...prev,
            [index]: !prev[index] // Đảo trạng thái của item đang bấm
        }));
    };

    useEffect(() => {
        setShowDataMap({}); // Reset khi vào lại trang chủ
    }, []);

    return (
        <div className="showroom-section">
            <div className="main-title">
                <div className='title'>
                    Công Trình Đã Hoàn Thiện
                </div>
            </div>

            <div className='slider-container'>
                {listDataShowroom && listDataShowroom.length > 0 ?
                    <Swiper
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: true,
                        }}
                        scrollbar={{ hide: true }}
                        loop={true}
                        navigation={true}
                        modules={[Scrollbar, Navigation, Autoplay]}
                    >
                        {listDataShowroom.map((item, index) => {
                            return (
                                <SwiperSlide key={index} style={{
                                    backgroundImage: `url("${item?.image}")`,
                                }}>
                                    <div className='information-showroom'>
                                        <div className='name-project'>{item.name}</div>

                                        {showDataMap[index] &&
                                            <div className='description-project' style={{ whiteSpace: "pre-line" }}>{item.description}</div>
                                        }

                                        <div className='btn-show' onClick={() => toggleShowData(index)}>
                                            {showDataMap[index] ? "Ẩn thông tin" : "Xem thông tin công trình"}
                                        </div>

                                    </div>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>

                    :

                    <div className='loading-div'>
                        <div className='loading-img'>Vui lòng chờ trong giây lát...</div>
                        <div className='loading-info'></div>
                    </div>
                }

            </div>
        </div>
    )
}

export default ShowroomSection;

