import { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import { Form, Row, Col } from "react-bootstrap";
import _ from 'lodash';
import { handleUpdateArticleAction, handleUpdateDiseaseArticleAction, getAllCodeProjectService } from '@/app/action';
import { toast } from 'react-toastify';
import { getAllOrganArticle } from '@/app/action';

const UpdateDiseaseModal = (props: any) => {
    const { show, setShow, getDataDiseaseArticle, dataUpdate, setDataUpdate } = props;
    const [dataSelect, setDataSelect] = useState([]);
    const [allCode, setAllCode] = useState([]);

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

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedId = event.target.value;
        setDataUpdate((prev: any) => ({
            ...prev,
            type_project: selectedId,
        }));
    };

    const fetchAllCode = async () => {
        const res = await getAllCodeProjectService();
        if (res && res.EC === 0) {
            setAllCode(res.DT)
        }
    }

    useEffect(() => {
        fetchAllCode();
    }, [])

    const buildDataSelect = () => {
        if (allCode && allCode.length > 0) {
            const data: any = allCode.map((item: any) => ({
                key: item.value,
                value: item.key_code,
            }));
            setDataSelect(data);
        }
    };

    useEffect(() => {
        if (allCode.length > 0) {
            buildDataSelect();
        }
    }, [allCode]);

    const handleSubmitUpdate = async () => {
        const res = await handleUpdateDiseaseArticleAction(dataUpdate);
        if (res && res.EC === 0) {
            handleClose();
            getDataDiseaseArticle();
            toast.success(res.EM)
        } else {
            console.log(res.EM)
        }
        console.log(dataUpdate)
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
                    <Modal.Title>Thêm mới bài viết</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form>
                        <Row className="mb-3">
                            {/* Ô nhập tên */}
                            <Col md={6}>
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label>Tên Công Trình</Form.Label>
                                    <Form.Control
                                        value={dataUpdate?.name}
                                        onChange={(event) => handleOnChangeInput("name", event.target.value)}
                                    />
                                </Form.Group>
                            </Col>

                            <Col md={6}>
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label>Loại Công Trình</Form.Label>
                                    <Form.Select value={dataUpdate?.type_project} onChange={(event) => handleSelectChange(event)}>
                                        {dataSelect && dataSelect.length > 0 &&
                                            dataSelect.map((item: any) => {
                                                return (
                                                    <option key={item.value} value={item.value}>{item.key}</option>
                                                )
                                            })
                                        }
                                    </Form.Select>
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

                        <Row className="mb-3">
                            {/* Ô nhập tên */}
                            <Col md={6}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Nguồn / Tác giả</Form.Label>
                                    <Form.Control
                                        onChange={(event) => handleOnChangeInput("cre", event?.target.value)}
                                        value={dataUpdate?.cre} />
                                </Form.Group>
                            </Col>

                            {/* Ô tải ảnh */}
                            <Col md={6}>
                                <Form.Group controlId="exampleForm.ControlFile1">
                                    <Form.Label>Tải ảnh</Form.Label>
                                    <Form.Control type="file" onChange={handleImageUpload} />
                                </Form.Group>
                            </Col>
                        </Row>

                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSubmitUpdate}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default UpdateDiseaseModal;