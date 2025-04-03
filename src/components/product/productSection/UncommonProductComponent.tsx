import "./UncommonProductComponent.scss";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { IoCart } from "react-icons/io5";
import caymai from "@/assets/product/uncommon/cay-mai.webp";
import locvung from "@/assets/product/uncommon/loc-vung.jpg";
import { RefObject } from "react";

const UncommonProductComponent = () => {


    return (
        <div className="uncommon-product-component-container">
            <div className="container">
                {/* Cây trong nhà */}
                <div
                    className="item-category-product"
                >
                    <div className="title">
                        <div className="name">
                            Cây Trong Nhà
                        </div>
                        <div className="more">
                            Xem thêm <MdOutlineKeyboardArrowRight className="icon" />
                        </div>
                    </div>
                    <hr />
                    <div className="list-product">
                        <div className="each-product">
                            <div className="image">
                                <img src={locvung.src} alt="" />
                            </div>
                            <div className="info">
                                <div className="name">Trầu bà lá đỏ</div>
                                <div className="sale">
                                    <div className="price">25.000đ</div>
                                    <div className="buy">
                                        <button><IoCart /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Các sản phẩm khác giữ nguyên */}
                    </div>
                </div>

                {/* Cây ngoài sân */}
                <div
                    className="item-category-product"
                >
                    <div className="title">
                        <div className="name">
                            Cây Ngoài Vườn
                        </div>
                        <div className="more">
                            Xem thêm <MdOutlineKeyboardArrowRight className="icon" />
                        </div>
                    </div>
                    <hr />
                    <div className="list-product">
                        <div className="each-product">
                            <div className="image">
                                <img src={locvung.src} alt="" />
                            </div>
                            <div className="info">
                                <div className="name">Mít thái</div>
                                <div className="sale">
                                    <div className="price">250.000đ</div>
                                    <div className="buy">
                                        <button><IoCart /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Các sản phẩm khác giữ nguyên */}
                    </div>
                </div>

                {/* Cây công trình */}
                <div
                    className="item-category-product"
                >
                    <div className="title">
                        <div className="name">
                            Cây Công Trình
                        </div>
                        <div className="more">
                            Xem thêm <MdOutlineKeyboardArrowRight className="icon" />
                        </div>
                    </div>
                    <hr />
                    <div className="list-product">
                        <div className="each-product">
                            <div className="image">
                                <img src={locvung.src} alt="" />
                            </div>
                            <div className="info">
                                <div className="name">Tha la siêu cấp</div>
                                <div className="sale">
                                    <div className="price">250.000đ</div>
                                    <div className="buy">
                                        <button><IoCart /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Các sản phẩm khác giữ nguyên */}
                    </div>
                </div>

                {/* Cây mai vàng */}
                <div
                    className="item-category-product"
                >
                    <div className="title">
                        <div className="name">
                            Cây Mai Vàng
                        </div>
                        <div className="more">
                            Xem thêm <MdOutlineKeyboardArrowRight className="icon" />
                        </div>
                    </div>
                    <hr />
                    <div className="list-product">
                        <div className="each-product">
                            <div className="image">
                                <img src={caymai.src} alt="" />
                            </div>
                            <div className="info">
                                <div className="name">Mai Vàng Mini</div>
                                <div className="sale">
                                    <div className="price">2.500.000đ</div>
                                    <div className="buy">
                                        <button><IoCart /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Các sản phẩm khác giữ nguyên */}
                    </div>
                </div>

                {/* Cây lộc vừng */}
                <div
                    className="item-category-product"
                >
                    <div className="title">
                        <div className="name">
                            Cây Lộc Vừng
                        </div>
                        <div className="more">
                            Xem thêm <MdOutlineKeyboardArrowRight className="icon" />
                        </div>
                    </div>
                    <hr />
                    <div className="list-product">
                        <div className="each-product">
                            <div className="image">
                                <img src={locvung.src} alt="" />
                            </div>
                            <div className="info">
                                <div className="name">Lộc Vừng 2 thân</div>
                                <div className="sale">
                                    <div className="price">2.500.000đ</div>
                                    <div className="buy">
                                        <button><IoCart /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Các sản phẩm khác giữ nguyên */}
                    </div>
                </div>

                {/* Cây bonsai */}
                <div
                    className="item-category-product"
                >
                    <div className="title">
                        <div className="name">
                            Cây Bon Sai
                        </div>
                        <div className="more">
                            Xem thêm <MdOutlineKeyboardArrowRight className="icon" />
                        </div>
                    </div>
                    <hr />
                    <div className="list-product">
                        <div className="each-product">
                            <div className="image">
                                <img src={locvung.src} alt="" />
                            </div>
                            <div className="info">
                                <div className="name">Cây Sanh dáng rồng</div>
                                <div className="sale">
                                    <div className="price">52.500.000đ</div>
                                    <div className="buy">
                                        <button><IoCart /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Các sản phẩm khác giữ nguyên */}
                    </div>
                </div>

                {/* Cây Thân Thảo */}
                <div
                    className="item-category-product"
                >
                    <div className="title">
                        <div className="name">
                            Cây Thân Thảo
                        </div>
                        <div className="more">
                            Xem thêm <MdOutlineKeyboardArrowRight className="icon" />
                        </div>
                    </div>
                    <hr />
                    <div className="list-product">
                        <div className="each-product">
                            <div className="image">
                                <img src={locvung.src} alt="" />
                            </div>
                            <div className="info">
                                <div className="name">Cây Mít Thân Thảo</div>
                                <div className="sale">
                                    <div className="price">5.500.000đ</div>
                                    <div className="buy">
                                        <button><IoCart /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Các sản phẩm khác giữ nguyên */}
                    </div>
                </div>

                {/* Cây Thân Leo */}
                <div
                    className="item-category-product"
                >
                    <div className="title">
                        <div className="name">
                            Cây Thân Leo
                        </div>
                        <div className="more">
                            Xem thêm <MdOutlineKeyboardArrowRight className="icon" />
                        </div>
                    </div>
                    <hr />
                    <div className="list-product">
                        <div className="each-product">
                            <div className="image">
                                <img src={locvung.src} alt="" />
                            </div>
                            <div className="info">
                                <div className="name">Cây dây thừng 50m</div>
                                <div className="sale">
                                    <div className="price">25.500.000đ</div>
                                    <div className="buy">
                                        <button><IoCart /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Các sản phẩm khác giữ nguyên */}
                    </div>
                </div>

                {/* Cây Bụi Kiểng */}
                <div
                    className="item-category-product"
                >
                    <div className="title">
                        <div className="name">
                            Cây Bụi Kiểng
                        </div>
                        <div className="more">
                            Xem thêm <MdOutlineKeyboardArrowRight className="icon" />
                        </div>
                    </div>
                    <hr />
                    <div className="list-product">
                        <div className="each-product">
                            <div className="image">
                                <img src={locvung.src} alt="" />
                            </div>
                            <div className="info">
                                <div className="name">Hoa giấy siêu cấp</div>
                                <div className="sale">
                                    <div className="price">255.500.000đ</div>
                                    <div className="buy">
                                        <button><IoCart /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Các sản phẩm khác giữ nguyên */}
                    </div>
                </div>

                {/* Phân Bón Cây */}
                <div
                    className="item-category-product"
                >
                    <div className="title">
                        <div className="name">
                            Phân Bón Cây - Sản phẩm làm vườn
                        </div>
                        <div className="more">
                            Xem thêm <MdOutlineKeyboardArrowRight className="icon" />
                        </div>
                    </div>
                    <hr />
                    <div className="list-product">
                        <div className="each-product">
                            <div className="image">
                                <img src={locvung.src} alt="" />
                            </div>
                            <div className="info">
                                <div className="name">Sơ dừa</div>
                                <div className="sale">
                                    <div className="price">50.000đ</div>
                                    <div className="buy">
                                        <button><IoCart /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Các sản phẩm khác giữ nguyên */}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default UncommonProductComponent;