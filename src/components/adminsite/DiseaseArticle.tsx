'use client'
import './DiseaseArticle.scss';
import { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import { FaPen } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import ReactPaginate from "react-paginate";
import Placeholder from 'react-bootstrap/Placeholder';
import { getAllDiseaseArticle } from '@/app/action';
import CreateDiseaseArticleModal from '@/modals/CreateDiseaseModal';
import ConfirmDeleteDiseaseModal from '@/modals/ConfimDeleteDiseaseModal';
import UpdateDiseaseModal from '@/modals/UpdateDiseaseModal';


type DiseaseArticleType = {
    id: number;
    name: string;
    type_project: string;
    description: string;
    cre: string;
    Allcode: any
};

const DiseaseArticle = () => {
    const LIMIT = 5
    const [listData, setListData] = useState<DiseaseArticleType[]>([]);
    const [isShowCreateModal, setIsShowCreateModal] = useState<boolean>(false);
    const [isShowDeleteModal, setIsShowDeleteModal] = useState<boolean>(false);
    const [isShowUpdateModal, setIsShowUpdateModal] = useState<boolean>(false);
    const [dataDelete, setDataDelete] = useState<DiseaseArticleType>();
    const [dataUpdate, setDataUpdate] = useState<DiseaseArticleType>();
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(0)

    const getDataDiseaseArticle = async () => {
        let res = await getAllDiseaseArticle(+currentPage, LIMIT);
        if (res && res.EC === 0) {
            setListData(res.DT.article)
            setTotalPages(res.DT.totalPages)
            console.log(res.DT)
        }
    }

    useEffect(() => {
        getDataDiseaseArticle();
    }, [currentPage])

    const handleCreateNewArticle = () => {
        setIsShowCreateModal(true)
    }

    const handleDelete = (article: DiseaseArticleType) => {
        setIsShowDeleteModal(true);
        setDataDelete(article);
    }

    const handleUpdate = (article: DiseaseArticleType) => {
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
                    <div className="title">Danh sách bài viết về <b>Các Công Trình Hoàn Thiện</b></div>
                    <div className='btn-add'>
                        <button onClick={() => handleCreateNewArticle()}>Thêm mới</button>
                    </div>
                </div>
                <Table striped bordered hover style={{ textAlign: "center", verticalAlign: "middle" }} >
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Type Project</th>
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
                                        <td>{item.Allcode?.value}</td>
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
                                <th colSpan={6}>
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

            <CreateDiseaseArticleModal
                show={isShowCreateModal}
                setShow={setIsShowCreateModal}
                getDataDiseaseArticle={getDataDiseaseArticle}
                listData={listData}
            />

            <ConfirmDeleteDiseaseModal
                show={isShowDeleteModal}
                setShow={setIsShowDeleteModal}
                dataDelete={dataDelete}
                getDataDiseaseArticle={getDataDiseaseArticle}
            />

            <UpdateDiseaseModal
                show={isShowUpdateModal}
                setShow={setIsShowUpdateModal}
                dataUpdate={dataUpdate}
                setDataUpdate={setDataUpdate}
                getDataDiseaseArticle={getDataDiseaseArticle}
            />

        </>
    )
}

export default DiseaseArticle;