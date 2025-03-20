import { useEffect, useRef, useState } from 'react';
import './ShowroomSection.scss';
import { getAllDiseaseArticle } from '@/app/action';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import loadingImg from "./../../../assets/loading_image.jpg"

type DiseasesArticle = {
    organ_id: string | number,
    name: string,
    description: string,
    image?: string,
    cre: string
}

const ShowroomSection = () => {
    const [listData, setListData] = useState<DiseasesArticle[]>([]);
    const [showDataMap, setShowDataMap] = useState<{ [key: number]: boolean }>({});

    const toggleShowData = (index: number) => {
        setShowDataMap((prev) => ({
            ...prev,
            [index]: !prev[index] // Đảo trạng thái của item đang bấm
        }));
    };

    const fetchDiseaseArticle = async () => {
        let res = await getAllDiseaseArticle(1, 10);
        if (res && res.EC === 0) {
            setListData(res.DT.article)
        }
    }

    useEffect(() => {
        fetchDiseaseArticle()
    }, [])

    useEffect(() => {
        setShowDataMap({}); // Reset khi vào lại trang chủ
    }, []);

    const truncateText = (text: string, maxLength = 50) => {
        if (text.length <= maxLength) return text;

        let trimmedText = text.slice(0, maxLength);
        // Nếu ký tự cuối không phải khoảng trắng, tìm vị trí khoảng trắng gần nhất trước đó
        if (text[maxLength] !== ' ' && trimmedText.includes(' ')) {
            trimmedText = trimmedText.slice(0, trimmedText.lastIndexOf(' '));
        }

        return trimmedText + " ...";
    }

    function base64ToImage(base64: any, mimeType = "image/png") {
        const byteCharacters = atob(base64.split(",")[1]); // Loại bỏ prefix "data:image/png;base64,"
        const byteNumbers = new Uint8Array(byteCharacters.length);

        for (let i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
        }

        const blob = new Blob([byteNumbers], { type: mimeType });
        return URL.createObjectURL(blob); // Trả về URL có thể sử dụng trong <img>
    }

    return (
        <div className="showroom-section">
            <div className="main-title">
                <div className='title'>
                    Công Trình Đã Hoàn Thiện
                </div>
            </div>

            <div className='slider-container'>
                {listData && listData.length > 0 ?
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
                        {listData.map((item, index) => {
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

