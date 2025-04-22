"use client";
import "./UncommonProductComponent.scss";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { IoCart } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { getProductShowCaseByIdAction } from "@/app/action";
import { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';
import Image from "next/image";

interface Product {
    id: string;
    name: string;
    price: string;
    image: string;
}

interface Category {
    id: string;
    name: string;
    state: Product[] | undefined;
    setState: (products: Product[]) => void;
}

const UncommonProductComponent = () => {
    const router = useRouter();
    const [categories, setCategories] = useState<Record<string, Product[]>>({});
    const categoryList: Category[] = [
        { id: "4", name: "Cây Trong Nhà", state: undefined, setState: (data) => updateCategory("4", data) },
        { id: "5", name: "Cây Ngoài Vườn", state: undefined, setState: (data) => updateCategory("5", data) },
        { id: "10", name: "Cây Để Bàn", state: undefined, setState: (data) => updateCategory("10", data) },
        { id: "8", name: "Cây Công Trình", state: undefined, setState: (data) => updateCategory("8", data) },
        { id: "6", name: "Cây Mai Vàng", state: undefined, setState: (data) => updateCategory("6", data) },
        { id: "7", name: "Cây Tùng Kiểng", state: undefined, setState: (data) => updateCategory("7", data) },
        { id: "9", name: "Cây Bon Sai", state: undefined, setState: (data) => updateCategory("9", data) },
        { id: "11", name: "Cây Thân Leo", state: undefined, setState: (data) => updateCategory("11", data) },
        { id: "12", name: "Cây Bụi Kiểng", state: undefined, setState: (data) => updateCategory("12", data) },
        { id: "13", name: "Phân Bón Cây - Sản phẩm làm vườn", state: undefined, setState: (data) => updateCategory("13", data) },
    ];

    const updateCategory = (categoryId: string, data: Product[]) => {
        setCategories(prev => ({ ...prev, [categoryId]: data }));
    };

    const formatNumber = (num: number): string => {
        return num.toLocaleString("vi-VN");
    };

    const handleRedirectPage = (id: string) => {
        router.push(`/Products/category/${id}`);
    };

    const handleRedirectProduct = (id: string) => {
        router.push(`/Products/product/${id}`)
    }

    const fetchProductByCategory = async (categoryId: string) => {
        try {
            const res = await getProductShowCaseByIdAction(categoryId, "4");
            if (res?.EC === 0) {
                updateCategory(categoryId, res.DT);
            } else {
                console.error(`Lỗi khi lấy danh mục ${categoryId}:`, res?.EM);
            }
        } catch (error) {
            console.error(`Không thể lấy danh mục ${categoryId}:`, error);
        }
    };

    useEffect(() => {
        const fetchAllCategories = async () => {
            await Promise.all(categoryList.map(category => fetchProductByCategory(category.id)));
        };
        fetchAllCategories();
    }, []);

    const ProductItem = ({ item }: { item: Product }) => (
        <div className="each-product" key={item.id}>
            <div className="image">
                <Image
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    fill
                    quality={100}
                    className="image-prod"
                />
            </div>
            <div className="info">
                <div className="name">{item.name}</div>
                <div className="sale">
                    <div className="price">{formatNumber(+item.price)}đ</div>
                    <div className="buy" onClick={() => handleRedirectProduct(item.id)}>
                        <button aria-label="Thêm vào giỏ hàng"><IoCart /></button>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div className="uncommon-product-component-container">
            <div className="container">
                {categoryList.map(category => (
                    <div className="item-category-product" key={category.id}>
                        <div className="title">
                            <div className="name">{category.name}</div>
                            <div
                                className="more"
                                onClick={() => handleRedirectPage(category.id)}
                                role="button"
                                tabIndex={0}
                            >
                                Xem thêm <MdOutlineKeyboardArrowRight className="icon" />
                            </div>
                        </div>
                        <hr />
                        <div className="list-product">
                            {categories[category.id]?.length > 0 ? (
                                categories[category.id].map(item => (
                                    <ProductItem item={item} key={item.id} />
                                ))
                            ) : (
                                [...Array(4)].map((_, index) => {
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
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UncommonProductComponent;