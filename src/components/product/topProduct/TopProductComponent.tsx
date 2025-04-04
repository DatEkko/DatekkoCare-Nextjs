"use client"
import "./TopProductComponent.scss";
import { useEffect, useState } from "react";
import { getRandomProductAction } from "@/app/action";
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';
import { useRouter } from "next/navigation";

const TopProductComponent = () => {
    const router = useRouter();
    const [data, setData] = useState<any>();

    const fetchData = async () => {
        const res = await getRandomProductAction("5");
        if (res && res.EC === 0) {
            setData(res.DT);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const formatNumber = (num: number): string => {
        return num.toLocaleString("vi-VN");
    };

    const handleRedirectProduct = (id: string) => {
        router.push(`/Products/product/${id}`)
    }

    return (
        <div className="top-product-component-container">
            <div className="container">
                <div className="title">
                    Sản Phẩm Giá Tốt
                </div>

                <div className="top-product">
                    {data && data.length > 0 ?
                        data.map((item: any, index: number) => {
                            return (
                                <div className="each-product" key={item.id}>
                                    <img
                                        src={item.image}
                                        alt="Cây sân vườn"
                                        className="img-product"
                                    />
                                    <div className="text-product">
                                        <div className="name-product">
                                            {item.name}
                                        </div>

                                        <div className="price">
                                            Giá: {formatNumber(+item.price)} <button onClick={() => handleRedirectProduct(item.id)}>Mua</button>
                                        </div>
                                    </div>

                                    <div className="badge">
                                        Top {index + 1}
                                    </div>
                                </div>
                            )
                        })

                        :

                        [...Array(5)].map((_, index) => {
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
        </div>
    )
}

export default TopProductComponent;