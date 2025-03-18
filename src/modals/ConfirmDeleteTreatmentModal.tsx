import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import _ from 'lodash';
import { toast } from 'react-toastify';
import { handleDeleteTreatmentArticle } from '@/app/action';

const ConfirmDeleteTreatmentModal = (props: any) => {
    const { show, setShow, dataDelete, getDataTreatmentArticle } = props;
    const handleClose = () => setShow(false);

    const handeDelete = async () => {
        let res = await handleDeleteTreatmentArticle(dataDelete);
        if (res && res.EC === 0) {
            toast.success(res.EM);
            getDataTreatmentArticle();
            handleClose();
        } else {
            toast.error(res.EM)
        }
    }
    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop='static'
            >
                <Modal.Header closeButton>
                    <Modal.Title>Xóa bài viết</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    Bạn có muốn chắc xóa bài viết <b>{dataDelete?.name}</b>?
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Đóng
                    </Button>
                    <Button variant="danger" onClick={handeDelete}>
                        Chắc chắn
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ConfirmDeleteTreatmentModal;