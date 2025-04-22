'use client'
import "./CommonProductComponent.scss";
import { RiDiscountPercentFill } from "react-icons/ri";
import { PiPottedPlantFill } from "react-icons/pi";
import { GiBonsaiTree } from "react-icons/gi";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

import discount_1 from "@/assets/product/discount-1.png"
import discount_2 from "@/assets/product/discount-2.png"
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getProductShowCaseByIdAction } from "@/app/action";
import Image from "next/image";

const CommonProductComponent = () => {
    const router = useRouter();
    const initialSeconds = 1200;
    const [totalSeconds, setTotalSeconds] = useState(initialSeconds);
    const [isRunning, setIsRunning] = useState(true);
    const [cayDeBan, setCayDeban] = useState<any>();
    const [bonSai, setBonSai] = useState<any>();

    useEffect(() => {
        let timerInterval: any = null;
        if (isRunning && totalSeconds > 0) {
            timerInterval = setInterval(() => {
                setTotalSeconds((prev) => prev - 1);
            }, 1000);
        } else if (totalSeconds === 0) {
            setIsRunning(false);
        }
        return () => clearInterval(timerInterval);
    }, [isRunning, totalSeconds]);


    useEffect(() => {
        setTotalSeconds(initialSeconds);
        setIsRunning(true);
    }, []);

    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    const minuteTens = Math.floor(minutes / 10);
    const minuteOnes = minutes % 10;
    const secondTens = Math.floor(seconds / 10);
    const secondOnes = seconds % 10;

    const handleRedirectPage = (id: string) => {
        router.push(`/Products/category/${id}`)
    }

    const fetchDataProduct = async (id: string, limit: string, setState: any) => {
        const res = await getProductShowCaseByIdAction(id, limit);
        if (res && res.EC === 0) {
            setState(res.DT)
        }
    }

    const handleRedirectProduct = (id: string) => {
        router.push(`/Products/product/${id}`)
    }

    useEffect(() => {
        fetchDataProduct("10", "6", setCayDeban);
        fetchDataProduct("9", "2", setBonSai);
    }, []);

    const formatNumber = (num: number): string => {
        return num.toLocaleString("vi-VN");
    };

    return (
        <div className="product-component-container">
            <div className="container">
                <div className="common-product">
                    <div className="content-left">
                        <div className="main-title">
                            <RiDiscountPercentFill className="icon-title" /> Ưu Đãi Đặc Biệt
                        </div>

                        <div className="content-discount">
                            <div className="each-discount">
                                <div className="name">
                                    Chậu cây size 40x40
                                </div>
                                <div className="image-product">
                                    <Image
                                        src={discount_1.src}
                                        alt="Khuyến mãi"
                                        fill
                                        quality={100}
                                        className="img-product-sale"
                                    />
                                </div>
                                <div className="btn-buy">
                                    <button>Mua ngay</button>
                                </div>
                                <div className="sale-off">20% <br></br> OFF</div>
                            </div>

                            <div className="each-discount product-2">
                                <div className="name">
                                    Dụng cụ làm vườn
                                </div>
                                <div className="image-product">
                                    <Image
                                        src={discount_2.src}
                                        alt=""
                                        fill
                                        quality={100}
                                        className="img-product-sale"
                                    />
                                </div>
                                <div className="btn-buy">
                                    <button>Mua ngay</button>
                                </div>
                                <div className="sale-off">15% <br></br> OFF</div>
                            </div>
                        </div>

                        <div className="count-down">
                            <div className="main-text">
                                LIMITED OFFER
                            </div>

                            <div className="sub-text">
                                Kết thúc trong
                            </div>

                            <div className="timer">
                                <div className="number">{minuteTens}</div>
                                <div className="number">{minuteOnes}</div>
                                <div className="colon">:</div>
                                <div className="number">{secondTens}</div>
                                <div className="number">{secondOnes}</div>
                            </div>
                        </div>
                    </div>

                    <div className="content-right">
                        <div className="each-type-product">
                            <div className="main-title">
                                <div className="left">
                                    <PiPottedPlantFill className="icon-title" /> Cây Để Bàn
                                </div>
                                <div className="right" onClick={() => handleRedirectPage("10")}>
                                    Xem thêm  <MdOutlineKeyboardArrowRight className="icon-title" />
                                </div>
                            </div>

                            <div className="list-product">
                                {cayDeBan && cayDeBan.length > 0 ?
                                    cayDeBan.map((item: any, index: number) => {
                                        return (
                                            <div className="each-product" key={item.id}>
                                                <div className="img-product">
                                                    <Image
                                                        className="each-img"
                                                        src={item.image}
                                                        alt=""
                                                        fill
                                                        quality={100}
                                                    />
                                                </div>

                                                <div className="info">
                                                    <div className="name">
                                                        {item.name}
                                                    </div>

                                                    <div className="price">
                                                        {formatNumber(+item.price)}đ <button onClick={() => handleRedirectProduct(item.id)}>Mua ngay</button>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })

                                    :

                                    [...Array(6)].map((_, index) => {
                                        return (
                                            <div className='each-product' key={index}>
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
                                                        <Placeholder.Button variant="secondary" xs={6} animation="glow" />
                                                    </Card.Body>
                                                </Card>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>

                        <div className="each-type-product bon-sai">
                            <div className="main-title">
                                <div className="left">
                                    <GiBonsaiTree className="icon-title" /> Cây BonSai
                                </div>
                                <div className="right" onClick={() => handleRedirectPage("9")}>
                                    Xem thêm  <MdOutlineKeyboardArrowRight className="icon-title" />
                                </div>
                            </div>

                            <div className="list-product">
                                {bonSai && bonSai.length > 0 ?
                                    bonSai.map((item: any) => {
                                        return (
                                            <div className="each-product bon-sai-product" key={item.id}>
                                                <div className="img-product">
                                                    <Image
                                                        className="each-img"
                                                        src={item.image}
                                                        alt=""
                                                        fill
                                                        quality={100}
                                                    />
                                                </div>

                                                <div className="info">
                                                    <div className="name">
                                                        {item.name}
                                                    </div>

                                                    <div className="price">
                                                        {formatNumber(+item.price)}đ <button>Mua ngay</button>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })

                                    :

                                    [...Array(2)].map((_, index) => {
                                        return (
                                            <div className='each-product bon-sai-product' key={index}>
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
                                                        <Placeholder.Button variant="secondary" xs={6} animation="glow" />
                                                    </Card.Body>
                                                </Card>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CommonProductComponent;