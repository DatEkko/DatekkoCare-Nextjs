'use client'
import './OrganArticle.scss';
import { useEffect, useState } from "react";
import { getAllOrganArticle, handleDeleteOrganArticle } from "@/app/action";
import Table from 'react-bootstrap/Table';
import { FaBookOpen } from "react-icons/fa6";
import { FaPen } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import CreateOrganArticleModal from '@/modals/CreateOrganArticleModal';
import ConfirmDeleteOrganModal from '@/modals/ConfirmDeleteOrganModal';
import UpdateOrganModal from '@/modals/UpdateOrganModal';

type OrganArticleType = {
    id: number;
    name: string;
    description: string;
    cre: string;
};

const OrganArticle = () => {
    const [listData, setListData] = useState<OrganArticleType[]>([]);
    const [isShowCreateModal, setIsShowCreateModal] = useState<boolean>(false);
    const [isShowDeleteModal, setIsShowDeleteModal] = useState<boolean>(false);
    const [isShowUpdateModal, setIsShowUpdateModal] = useState<boolean>(false);
    const [dataDelete, setDataDelete] = useState<OrganArticleType>();
    const [dataUpdate, setDataUpdate] = useState<OrganArticleType>();

    const getDataOrganArticle = async () => {
        let res = await getAllOrganArticle();
        if (res && res.EC === 0) {
            setListData(res.DT)
        }
    }

    useEffect(() => {
        getDataOrganArticle();
    }, [])

    const handleCreateNewArticle = () => {
        setIsShowCreateModal(true)
    }

    const handleDelete = (article: OrganArticleType) => {
        setIsShowDeleteModal(true);
        setDataDelete(article);
    }

    const handleUpdate = (article: OrganArticleType) => {
        setIsShowUpdateModal(true);
        setDataUpdate(article);
    }

    return (
        <>
            <div className="table-data" >
                <div className='head'>
                    <div className="title">Danh sách bài viết về cơ quan nội tạng</div>
                    <div className='btn-add'>
                        <button onClick={() => handleCreateNewArticle()}>Thêm mới</button>
                    </div>
                </div>
                <Table striped bordered hover style={{ textAlign: "center" }} >
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
                        {listData && listData.length > 0 &&
                            listData.map((item, index) => {
                                return (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.description}</td>
                                        <td>{item.cre}</td>
                                        <td className='actions'>
                                            <div className='read'><FaBookOpen /></div>
                                            <div
                                                onClick={() => handleUpdate(item)}
                                                className='edit'><FaPen /></div>
                                            <div
                                                onClick={() => handleDelete(item)}
                                                className='delete'><FaTrash /></div>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </div>

            <CreateOrganArticleModal
                show={isShowCreateModal}
                setShow={setIsShowCreateModal}
                getDataOrganArticle={getDataOrganArticle}
            />

            <ConfirmDeleteOrganModal
                show={isShowDeleteModal}
                setShow={setIsShowDeleteModal}
                dataDelete={dataDelete}
                getDataOrganArticle={getDataOrganArticle}
            />

            <UpdateOrganModal
                show={isShowUpdateModal}
                setShow={setIsShowUpdateModal}
                dataUpdate={dataUpdate}
                getDataOrganArticle={getDataOrganArticle}
                setDataUpdate={setDataUpdate}
            />
        </>
    )
}

export default OrganArticle;