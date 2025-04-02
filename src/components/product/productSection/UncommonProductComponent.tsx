import "./UncommonProductComponent.scss";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { IoCart } from "react-icons/io5";

import caymai from "@/assets/product/uncommon/cay-mai.webp";
import locvung from "@/assets/product/uncommon/loc-vung.jpg";

const UncommonProductComponent = () => {
    return (
        <div className="uncommon-product-component-container">
            <div className="container">
                <div className="item-category-product">
                    <div className="title">
                        <div className="name">
                            Cây Mai Vàng
                        </div>
                        <div className="more">
                            Xem thêm <MdOutlineKeyboardArrowRight className="icon"></MdOutlineKeyboardArrowRight>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="list-product">
                        <div className="each-product">
                            <div className="image">
                                <img src={caymai.src} alt="" />
                            </div>

                            <div className="info">
                                <div className="name">
                                    Mai Vàng Mini
                                </div>

                                <div className="sale">
                                    <div className="price">
                                        2.500.000đ
                                    </div>
                                    <div className="buy">
                                        <button><IoCart /></button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="each-product">
                            <div className="image">
                                <img src={caymai.src} alt="" />
                            </div>

                            <div className="info">
                                <div className="name">
                                    Mai Vàng Mini
                                </div>

                                <div className="sale">
                                    <div className="price">
                                        2.500.000đ
                                    </div>
                                    <div className="buy">
                                        <button><IoCart /></button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="each-product">
                            <div className="image">
                                <img src={caymai.src} alt="" />
                            </div>

                            <div className="info">
                                <div className="name">
                                    Mai Vàng Mini
                                </div>

                                <div className="sale">
                                    <div className="price">
                                        2.500.000đ
                                    </div>
                                    <div className="buy">
                                        <button><IoCart /></button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="each-product">
                            <div className="image">
                                <img src={caymai.src} alt="" />
                            </div>

                            <div className="info">
                                <div className="name">
                                    Mai Vàng Mini
                                </div>

                                <div className="sale">
                                    <div className="price">
                                        2.500.000đ
                                    </div>
                                    <div className="buy">
                                        <button><IoCart /></button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="item-category-product">
                    <div className="title">
                        <div className="name">
                            Cây Lộc Vừng
                        </div>
                        <div className="more">
                            Xem thêm <MdOutlineKeyboardArrowRight className="icon"></MdOutlineKeyboardArrowRight>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="list-product">
                        <div className="each-product">
                            <div className="image">
                                <img src={locvung.src} alt="" />
                            </div>

                            <div className="info">
                                <div className="name">
                                    Lộc Vừng 2 thân
                                </div>

                                <div className="sale">
                                    <div className="price">
                                        2.500.000đ
                                    </div>
                                    <div className="buy">
                                        <button><IoCart /></button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="each-product">
                            <div className="image">
                                <img src={locvung.src} alt="" />
                            </div>

                            <div className="info">
                                <div className="name">
                                    Lộc Vừng 2 thân
                                </div>

                                <div className="sale">
                                    <div className="price">
                                        2.500.000đ
                                    </div>
                                    <div className="buy">
                                        <button><IoCart /></button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="each-product">
                            <div className="image">
                                <img src={locvung.src} alt="" />
                            </div>

                            <div className="info">
                                <div className="name">
                                    Lộc Vừng 2 thân
                                </div>

                                <div className="sale">
                                    <div className="price">
                                        2.500.000đ
                                    </div>
                                    <div className="buy">
                                        <button><IoCart /></button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="each-product">
                            <div className="image">
                                <img src={locvung.src} alt="" />
                            </div>

                            <div className="info">
                                <div className="name">
                                    Lộc Vừng 2 thân
                                </div>

                                <div className="sale">
                                    <div className="price">
                                        2.500.000đ
                                    </div>
                                    <div className="buy">
                                        <button><IoCart /></button>
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

export default UncommonProductComponent;