'use client'
import "./CommonProductComponent.scss";
import { RiDiscountPercentFill } from "react-icons/ri";
import { PiPottedPlantFill } from "react-icons/pi";
import { GiBonsaiTree } from "react-icons/gi";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

import discount_1 from "@/assets/product/discount-1.png"
import discount_2 from "@/assets/product/discount-2.png"
import cay_trang_tri from "@/assets/product/cay-trang-tri.jpg";
import bonsai from "@/assets/product/bonsai.jpg";
import { useEffect, useState } from "react";

const CommonProductComponent = () => {
    const initialSeconds = 1200;
    const [totalSeconds, setTotalSeconds] = useState(initialSeconds);
    const [isRunning, setIsRunning] = useState(true);

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
                                    <img src={discount_1.src} alt="" />
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
                                    <img src={discount_2.src} alt="" />
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
                                <div className="right">
                                    Xem thêm  <MdOutlineKeyboardArrowRight className="icon-title" />
                                </div>
                            </div>

                            <div className="list-product">
                                <div className="each-product">
                                    <div className="img-product">
                                        <img className="each-img" src={cay_trang_tri.src} alt="" />
                                    </div>

                                    <div className="info">
                                        <div className="name">
                                            Cây Trầu Bà
                                        </div>

                                        <div className="price">
                                            20.000đ <button>Mua ngay</button>
                                        </div>
                                    </div>
                                </div>

                                <div className="each-product">
                                    <div className="img-product">
                                        <img className="each-img" src={cay_trang_tri.src} alt="" />
                                    </div>

                                    <div className="info">
                                        <div className="name">
                                            Cây Trầu Bà
                                        </div>

                                        <div className="price">
                                            20.000đ <button>Mua ngay</button>
                                        </div>
                                    </div>
                                </div>

                                <div className="each-product">
                                    <div className="img-product">
                                        <img className="each-img" src={cay_trang_tri.src} alt="" />
                                    </div>

                                    <div className="info">
                                        <div className="name">
                                            Cây Trầu Bà
                                        </div>

                                        <div className="price">
                                            20.000đ <button>Mua ngay</button>
                                        </div>
                                    </div>
                                </div>

                                <div className="each-product">
                                    <div className="img-product">
                                        <img className="each-img" src={cay_trang_tri.src} alt="" />
                                    </div>

                                    <div className="info">
                                        <div className="name">
                                            Cây Trầu Bà
                                        </div>

                                        <div className="price">
                                            20.000đ <button>Mua ngay</button>
                                        </div>
                                    </div>
                                </div>

                                <div className="each-product">
                                    <div className="img-product">
                                        <img className="each-img" src={cay_trang_tri.src} alt="" />
                                    </div>

                                    <div className="info">
                                        <div className="name">
                                            Cây Trầu Bà
                                        </div>

                                        <div className="price">
                                            20.000đ <button>Mua ngay</button>
                                        </div>
                                    </div>
                                </div>

                                <div className="each-product">
                                    <div className="img-product">
                                        <img className="each-img" src={cay_trang_tri.src} alt="" />
                                    </div>

                                    <div className="info">
                                        <div className="name">
                                            Cây Trầu Bà
                                        </div>

                                        <div className="price">
                                            20.000đ <button>Mua ngay</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="each-type-product bon-sai">
                            <div className="main-title">
                                <div className="left">
                                    <GiBonsaiTree className="icon-title" /> Cây BonSai
                                </div>
                                <div className="right">
                                    Xem thêm  <MdOutlineKeyboardArrowRight className="icon-title" />
                                </div>
                            </div>

                            <div className="list-product">
                                <div className="each-product bon-sai-product">
                                    <div className="img-product">
                                        <img className="each-img" src={bonsai.src} alt="" />
                                    </div>

                                    <div className="info">
                                        <div className="name">
                                            Cây Bon Sai tứ thân
                                        </div>

                                        <div className="price">
                                            20.000.000đ <button>Mua ngay</button>
                                        </div>
                                    </div>
                                </div>

                                <div className="each-product bon-sai-product">
                                    <div className="img-product">
                                        <img className="each-img" src={bonsai.src} alt="" />
                                    </div>

                                    <div className="info">
                                        <div className="name">
                                            Cây Bon sai 40 năm tuôi
                                        </div>

                                        <div className="price">
                                            60.000.000đ <button>Mua ngay</button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CommonProductComponent;