import Image from 'next/image';
import './OrganSection.scss';
import tim from "./../../../assets/organs/tim.svg";
import gan from "./../../../assets/organs/gan.svg";
import nao from "./../../../assets/organs/não.svg";
import phoi from "./../../../assets/organs/phổi.svg";
import { getAllOrganArticle } from '@/app/action';
import { useEffect, useState } from 'react';

const OrganSection = () => {
    const [listData, setListData] = useState([]);

    const fetchListData = async () => {
        let res = await getAllOrganArticle(1, 4);
        if (res && res.EC === 0) {
            setListData(res.DT.article);
        }
    }

    useEffect(() => {
        fetchListData();
    }, [])

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
        <div className="organ-section">
            <div className="main-title">
                Các Cơ Quan Chính
                <div className='underline'></div>
            </div>

            <div className='organ-content'>
                {listData && listData.length > 0 &&
                    listData.map((item: any, index) => {
                        return (
                            <div className='each-organ' key={item.id}>
                                <div className='organ-image'>
                                    <img src={base64ToImage(item?.image)} alt="" />
                                </div>
                                <div className='name'>
                                    {item?.name}
                                </div>
                                <div className='info'>
                                    {truncateText(item.description)}
                                </div>
                                <div className='btn-action'>
                                    <button>Xem chi tiết</button>
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

export default OrganSection;