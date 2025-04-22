'use client'
import "./CategoryComponent.scss";
import { FaHouseCircleCheck } from "react-icons/fa6";
import { MdYard } from "react-icons/md";
import { FaTree } from "react-icons/fa";
import { GiBonsaiTree } from "react-icons/gi";
import { RiTreeFill } from "react-icons/ri";
import { PiFlowerFill } from "react-icons/pi";
import { GiFlowerPot, GiVineLeaf, GiPalmTree, GiFertilizerBag } from "react-icons/gi";
import { useRouter } from "next/navigation";

const CategoryComponent = () => {
    const router = useRouter();
    const categories = [
        { icon: <GiFlowerPot />, name: "Cây Để Bàn", id: "10" },
        { icon: <FaHouseCircleCheck />, name: "Cây Trong Nhà", id: "4" },
        { icon: <MdYard />, name: "Cây Ngoài Vườn", id: "5" },
        { icon: <FaTree />, name: "Cây Công Trình", id: "8" },
        { icon: <PiFlowerFill />, name: "Cây Mai Vàng", id: "6" },
        { icon: <RiTreeFill />, name: "Cây Tùng Kiểng", id: "7" },
        { icon: <GiBonsaiTree />, name: "Cây Bon Sai", id: "9" },
        { icon: <GiVineLeaf />, name: "Cây Thân Leo", id: "11" },
        { icon: <GiPalmTree />, name: "Cây Bụi Kiểng", id: "12" },
        { icon: <GiFertilizerBag />, name: "Phân Bón Cây", id: "13" }
    ];

    const handleRedirectPage = (id: string) => {
        router.push(`/Products/category/${id}`)
    }

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
                            onClick={() => handleRedirectPage(category.id)}
                        >
                            {category.icon && <span className="category-icon">{category.icon}</span>} {category.name}
                        </div>
                    ))}
                </div>

                <hr></hr>

                <div style={{ textAlign: "center" }}>Nếu bạn không tìm thấy loại cây bạn đang cần ở đây thì hãy liên hệ trực tiếp với chúng tôi</div>
                <div style={{ textAlign: "center", fontWeight: "600", fontSize: "1.5em" }}>0398.960.639 - 0908.925.359</div>
            </div>
        </div>
    )
}

export default CategoryComponent;