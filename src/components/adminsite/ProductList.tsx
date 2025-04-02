import ReactPaginate from "react-paginate";
import Table from 'react-bootstrap/Table';
import { useEffect, useState } from "react";
import Placeholder from 'react-bootstrap/Placeholder';
import { FaPen, FaTrash } from "react-icons/fa";
import { getProductService } from "@/app/action";
import CreateProductModal from "@/modals/CreateProductModal";
import ConfirmDeleteProductModal from "@/modals/ConfirmDeleteProductModal";
import UpdateProductModal from "@/modals/UpdateProductModal";

const ProductList = () => {
    const LIMIT = 5
    const [listData, setListData] = useState<[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(0);
    const [isShowCreateModal, setIsShowCreateModal] = useState<boolean>(false);
    const [isShowDeleteModal, setIsShowDeleteModal] = useState<boolean>(false);
    const [isShowUpdateModal, setIsShowUpdateModal] = useState<boolean>(false);
    const [dataDelete, setDataDelete] = useState<any>();
    const [dataUpdate, setDataUpdate] = useState<any>();

    const truncateText = (text: string, maxLength = 50) => {
        if (text.length <= maxLength) return text;

        let trimmedText = text.slice(0, maxLength);
        // Nếu ký tự cuối không phải khoảng trắng, tìm vị trí khoảng trắng gần nhất trước đó
        if (text[maxLength] !== ' ' && trimmedText.includes(' ')) {
            trimmedText = trimmedText.slice(0, trimmedText.lastIndexOf(' '));
        }

        return trimmedText + " ...";
    }

    const handlePageClick = (event: any) => {
        setCurrentPage(event.selected + 1)
    };

    const getDataProduct = async () => {
        let res = await getProductService(+currentPage, LIMIT);
        if (res && res.EC === 0) {
            setListData(res.DT.products)
            setTotalPages(res.DT.totalPages)
        }
    }

    useEffect(() => {
        getDataProduct();
    }, [currentPage])

    const handleCreateNewArticle = () => {
        setIsShowCreateModal(true)
    }

    const formatNumber = (num: number): string => {
        return num.toLocaleString("vi-VN");
    };

    const handleDelete = (product: any) => {
        setIsShowDeleteModal(true);
        setDataDelete(product);
    }

    const handleUpdate = (product: any) => {
        setIsShowUpdateModal(true);
        setDataUpdate(product);
    }

    return (
        <>
            <div className="table-data" >
                <div className='head'>
                    <div className="title">Danh sách <b>Sản Phẩm</b></div>
                    <div className='btn-add'>
                        <button onClick={() => handleCreateNewArticle()}>Thêm mới</button>
                    </div>
                </div>
                <Table striped bordered hover style={{ textAlign: "center", verticalAlign: "middle" }} >
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Type</th>
                            <th>Condition</th>
                            <th>Price</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listData && listData.length > 0 ?
                            listData.map((item: any, index) => {
                                return (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{truncateText(item.description)}</td>
                                        <td>{item.TypeCondition.value}</td>
                                        <td>{item.TypeProduct.value}</td>
                                        <td>{formatNumber(+item.price)} đ</td>
                                        <td>
                                            <div className='actions'>
                                                <div
                                                    onClick={() => handleUpdate(item)}
                                                    className='edit'><FaPen />
                                                </div>

                                                <div
                                                    onClick={() => handleDelete(item)}
                                                    className='delete'><FaTrash />
                                                </div>
                                            </div>


                                        </td>
                                    </tr>
                                )
                            })

                            :

                            <tr>
                                <th colSpan={7}>
                                    <div style={{ textAlign: "left" }}>
                                        <Placeholder animation="glow">
                                            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                                            <Placeholder xs={6} /> <Placeholder xs={8} />
                                        </Placeholder>
                                    </div>
                                </th>
                            </tr>
                        }
                    </tbody>
                </Table>

                <ReactPaginate
                    nextLabel="next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={3}
                    marginPagesDisplayed={2}
                    pageCount={totalPages}
                    previousLabel="< previous"
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    previousClassName="page-item"
                    previousLinkClassName="page-link"
                    nextClassName="page-item"
                    nextLinkClassName="page-link"
                    breakLabel="..."
                    breakClassName="page-item"
                    breakLinkClassName="page-link"
                    containerClassName="pagination"
                    activeClassName="active"
                    renderOnZeroPageCount={null}
                />
            </div>

            <CreateProductModal
                show={isShowCreateModal}
                setShow={setIsShowCreateModal}
                getDataProduct={getDataProduct}
                listData={listData}
            />

            <ConfirmDeleteProductModal
                show={isShowDeleteModal}
                setShow={setIsShowDeleteModal}
                dataDelete={dataDelete}
                getDataProduct={getDataProduct}
            />

            <UpdateProductModal
                show={isShowUpdateModal}
                setShow={setIsShowUpdateModal}
                dataUpdate={dataUpdate}
                setDataUpdate={setDataUpdate}
                getDataProduct={getDataProduct}
            />
        </>
    )
}

export default ProductList;