import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import _ from 'lodash';
import { toast } from 'react-toastify';
import { handleDeleteProductArticle } from '@/app/action';

const ConfirmDeleteProductModal = (props: any) => {
    const { show, setShow, dataDelete, getDataProduct } = props;
    const handleClose = () => setShow(false);

    const handeDelete = async () => {
        let res = await handleDeleteProductArticle(dataDelete);
        if (res && res.EC === 0) {
            toast.success(res.EM);
            getDataProduct();
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
                    <Modal.Title>Xóa sản phẩm</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    Bạn có muốn chắc xóa sản phẩm <b>{dataDelete?.name}</b>?
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

export default ConfirmDeleteProductModal;