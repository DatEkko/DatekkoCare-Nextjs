import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import { Form, Row, Col } from "react-bootstrap";
import _ from 'lodash';
import { handleUpdateArticleAction } from '@/app/action';
import { toast } from 'react-toastify';

const UpdateOrganModal = (props: any) => {
    const { show, setShow, getDataOrganArticle, dataUpdate, setDataUpdate } = props;
    const handleClose = () => setShow(false);

    const handleOnChangeInput = (type: any, value: string) => {
        const _dataUpdate = _.cloneDeep(dataUpdate);
        _dataUpdate[type] = value;
        setDataUpdate(_dataUpdate)
    }

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.readAsDataURL(file); // Chuyển thành base64

            reader.onloadend = () => {
                const base64String = reader.result as string; // Lấy chuỗi base64

                setDataUpdate((prev: any) => ({
                    ...prev,
                    image: base64String, // Lưu base64 vào state
                }));
            };
        }
    };

    const handleSubmitUpdate = async () => {
        const res = await handleUpdateArticleAction(dataUpdate);
        if (res && res.EC === 0) {
            handleClose();
            getDataOrganArticle();
            toast.success(res.EM)
        } else {
            console.log(res.EM)
        }
    }

    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                size='lg'
                backdrop='static'
            >
                <Modal.Header closeButton>
                    <Modal.Title>Chỉnh sửa bài viết</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form>
                        <Row className="mb-3">
                            {/* Ô nhập tên */}
                            <Col md={6}>
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label>Tên Cơ Quan Nội Tạng</Form.Label>
                                    <Form.Control
                                        value={dataUpdate?.name}
                                        onChange={(event) => handleOnChangeInput("name", event.target.value)}
                                    />
                                </Form.Group>
                            </Col>

                            {/* Ô tải ảnh */}
                            <Col md={6}>
                                <Form.Group controlId="exampleForm.ControlFile1">
                                    <Form.Label>Tải ảnh</Form.Label>
                                    <Form.Control
                                        type="file" onChange={handleImageUpload} />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Thông tin liên quan</Form.Label>
                            <Form.Control
                                onChange={(event) => handleOnChangeInput("description", event?.target.value)}
                                value={dataUpdate?.description}
                                as="textarea"
                                rows={10} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Nguồn / Tác giả</Form.Label>
                            <Form.Control
                                onChange={(event) => handleOnChangeInput("cre", event?.target.value)}
                                value={dataUpdate?.cre} />
                        </Form.Group>
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Đóng
                    </Button>
                    <Button variant="warning" onClick={handleSubmitUpdate}>
                        Lưu thay đổi
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default UpdateOrganModal;