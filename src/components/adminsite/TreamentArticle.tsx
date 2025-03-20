'use client'
import './TreatmentArticle.scss';
import { useEffect, useState } from "react";
import { getAllTreatmentArticle } from "@/app/action";
import Table from 'react-bootstrap/Table';
import { FaPen } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import ReactPaginate from "react-paginate";
import Placeholder from 'react-bootstrap/Placeholder';
import CreateTreatmentArticleModal from '@/modals/CreateTreatmentArticleModal';
import ConfirmDeleteTreatmentModal from '@/modals/ConfirmDeleteTreatmentModal';
import UpdateTreatmentModal from '@/modals/UpdateTreatmentModal';

type TreatmentArticleType = {
    id: number;
    name: string;
    description: string;
    cre: string;
    Disease: any
};

const TreatmentArticle = () => {
    const LIMIT = 5
    const [listData, setListData] = useState<TreatmentArticleType[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(0);

    const [isShowCreateModal, setIsShowCreateModal] = useState<boolean>(false);
    const [isShowDeleteModal, setIsShowDeleteModal] = useState<boolean>(false);
    const [isShowUpdateModal, setIsShowUpdateModal] = useState<boolean>(false);
    const [dataDelete, setDataDelete] = useState<TreatmentArticleType>();
    const [dataUpdate, setDataUpdate] = useState<TreatmentArticleType>();


    const getDataTreatmentArticle = async () => {
        let res = await getAllTreatmentArticle(+currentPage, LIMIT);
        if (res && res.EC === 0) {
            setListData(res.DT.article)
            setTotalPages(res.DT.totalPages)
        }
    }

    useEffect(() => {
        getDataTreatmentArticle();
    }, [currentPage])

    const handleCreateNewArticle = () => {
        setIsShowCreateModal(true)
    }

    const handleDelete = (article: TreatmentArticleType) => {
        setIsShowDeleteModal(true);
        setDataDelete(article);
    }

    const handleUpdate = (article: TreatmentArticleType) => {
        setIsShowUpdateModal(true);
        setDataUpdate(article);
    }

    const handlePageClick = (event: any) => {
        setCurrentPage(event.selected + 1)
    };

    const truncateText = (text: string, maxLength = 50) => {
        if (text.length <= maxLength) return text;

        let trimmedText = text.slice(0, maxLength);
        // Nếu ký tự cuối không phải khoảng trắng, tìm vị trí khoảng trắng gần nhất trước đó
        if (text[maxLength] !== ' ' && trimmedText.includes(' ')) {
            trimmedText = trimmedText.slice(0, trimmedText.lastIndexOf(' '));
        }

        return trimmedText + " ...";
    }

    return (
        <>
            <div className="table-data" >
                <div className='head'>
                    <div className="title">Danh sách bài viết về <b>Chăm Sóc Cây Cảnh</b></div>
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
                            <th>Credit</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listData && listData.length > 0 ?
                            listData.map((item, index) => {
                                return (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{truncateText(item.description)}</td>
                                        <td>{item.cre}</td>
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
                                <th colSpan={5}>
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


            <CreateTreatmentArticleModal
                show={isShowCreateModal}
                setShow={setIsShowCreateModal}
                getDataTreatmentArticle={getDataTreatmentArticle}
            />

            <ConfirmDeleteTreatmentModal
                show={isShowDeleteModal}
                setShow={setIsShowDeleteModal}
                dataDelete={dataDelete}
                getDataTreatmentArticle={getDataTreatmentArticle}
            />

            <UpdateTreatmentModal
                show={isShowUpdateModal}
                setShow={setIsShowUpdateModal}
                dataUpdate={dataUpdate}
                getDataTreatmentArticle={getDataTreatmentArticle}
                setDataUpdate={setDataUpdate}
            />
        </>
    )
}

export default TreatmentArticle;