'use client'
import { useState } from "react";
import "./CategoryComponent.scss";
import { FaHouseCircleCheck } from "react-icons/fa6";
import { MdYard } from "react-icons/md";
import { FaTree } from "react-icons/fa";
import { GiBonsaiTree } from "react-icons/gi";
import { RiTreeFill } from "react-icons/ri";
import { PiFlowerFill } from "react-icons/pi";
import { GiFlowerPot, GiVineLeaf, GiPalmTree, GiFertilizerBag } from "react-icons/gi";

const CategoryComponent = () => {
    const categories = [
        { icon: <FaHouseCircleCheck />, name: "Cây Trong Nhà" },
        { icon: <MdYard />, name: "Cây Ngoài Vườn" },
        { icon: <FaTree />, name: "Cây Công Trình" },
        { icon: <PiFlowerFill />, name: "Cây Mai Vàng" },
        { icon: <RiTreeFill />, name: "Cây Lộc Vừng" },
        { icon: <GiBonsaiTree />, name: "Cây Bon Sai" },
        { icon: <GiFlowerPot />, name: "Cây Thân Thảo" },
        { icon: <GiVineLeaf />, name: "Cây Thân Leo" },
        { icon: <GiPalmTree />, name: "Cây Bụi Kiểng" },
        { icon: <GiFertilizerBag />, name: "Phân Bón Cây" }
    ];

    return (
        <div className="category-component-container">
            <div className="container">
                <div className="title">
                    Categories
                </div>

                <div className="list-category">
                    {categories.map((category, index) => (
                        <div
                            key={index}
                            className="item-category"

                        >
                            {category.icon && <span className="category-icon">{category.icon}</span>} {category.name}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CategoryComponent;