"use client";
import { getProductListByIdAction } from "@/app/action";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import ProductItemPageComponent from "@/components/product/productPage/ProductItemPageComponent";
import PerfectScrollContainer from "@/components/scrollbar/PerfectScrollBarContainer";
import FooterComponent from "@/components/footer/FooterComponent";

interface Params {
    [key: string]: string;
}

interface Product {
    TypeCondition?: {
        key_code?: string;
        value?: string;
    };

    TypeProduct?: {
        key_code?: string;
        value?: string;
    };
}

const CategoryItemPage = () => {
    const params = useParams<Params>();
    const [dataProduct, setDataProduct] = useState<Product[]>();

    const fetchListDataProduct = async () => {
        if (!params?.category) return;

        const res = await getProductListByIdAction(params.category);
        if (res && res.EC === 0) {
            setDataProduct(res.DT)
        }
    };

    useEffect(() => {
        fetchListDataProduct();
    }, [params?.category]);

    return (
        <div className="category-item-container" style={{ height: "100vh", fontFamily: "var(--font-lexend)" }}>
            <PerfectScrollContainer>
                <div className="container">
                    <div className="title">
                        <h1 className="mt-4">{Number(params?.category) === Number(dataProduct?.[0]?.TypeCondition?.key_code) ? dataProduct?.[0]?.TypeCondition?.value : dataProduct?.[0]?.TypeProduct?.value}</h1>
                    </div>
                    <hr></hr>
                    <ProductItemPageComponent dataProduct={dataProduct} />
                </div>

                <FooterComponent />
            </PerfectScrollContainer>

        </div>
    );
};

export default CategoryItemPage;
