'use client'
import './CareSection.scss';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';
import { useState, useEffect } from 'react';
import { getAllTreatmentArticle } from '@/app/action';
import loadingImg from "./../../../assets/loading_image.jpg";

type DiseasesArticle = {
    disease_id: string | number,
    name: string,
    description: string,
    image?: string,
    cre: string
}

const CareSection = () => {
    const [listData, setListData] = useState<DiseasesArticle[]>([]);

    const fetchDiseaseArticle = async () => {
        let res = await getAllTreatmentArticle(1, 4);
        if (res && res.EC === 0) {
            setListData(res.DT.article)
        }
    }

    useEffect(() => {
        fetchDiseaseArticle()
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

    return (
        <div className="care-section">
            <div className="main-title">
                Phương Pháp Chăm Cây
                <div className='underline'></div>
            </div>

            <div className='care-content'>
                {listData && listData.length > 0 ?
                    listData.map((item, index) => {
                        return (
                            <div className='each-care' key={index}>
                                <div className='care-image'>
                                    <img src={item.image ? item.image : loadingImg.src} alt="" />
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
                    :
                    [...Array(4)].map((_, index) => {
                        return (
                            <div className='each-care' key={index}>
                                <Card style={{ width: '100%' }}>
                                    <Card.Body style={{ height: "180px", backgroundColor: "#ccc", padding: "20px" }} />
                                    <Card.Body>
                                        <Placeholder as={Card.Title} animation="glow">
                                            <Placeholder xs={6} />
                                        </Placeholder>
                                        <Placeholder as={Card.Text} animation="glow">
                                            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                                            <Placeholder xs={6} /> <Placeholder xs={8} />
                                        </Placeholder>
                                        <Placeholder.Button variant="primary" xs={6} />
                                    </Card.Body>
                                </Card>
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

export default CareSection;