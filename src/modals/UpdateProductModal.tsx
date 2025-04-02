import { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import { Form, Row, Col } from "react-bootstrap";
import _ from 'lodash';
import { getAllCodeProductService, getAllCodeConditionService, handleCreateProductAction, handleUpdateProductAction } from '@/app/action';
import { toast } from 'react-toastify';

type Product = {
    name: string,
    type_product: string,
    type_condition: string,
    description: string,
    image?: any,
    price: any
}

const UpdateProductModal = (props: any) => {
    const { show, setShow, getDataProduct, dataUpdate, setDataUpdate } = props;
    const [typeProduct, setTypeProduct] = useState([]);
    const [typeConditon, setTypeCondition] = useState([]);

    const [dataSelectProduct, setDataSelectProduct] = useState([]);
    const [dataSelectCondition, setDataSelectCondition] = useState([]);

    const handleClose = () => setShow(false);

    const handleOnChangeInput = (type: keyof Product, value: string) => {
        const _product = _.cloneDeep(dataUpdate);
        _product[type] = value;
        setDataUpdate(_product)
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

    const handleSelectChange = (type: string, event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedId = event.target.value;
        setDataUpdate((prev: any) => ({
            ...prev,
            [type]: selectedId,
        }));
    };

    const fetchAllCodeTypeProduct = async () => {
        const res = await getAllCodeProductService();
        if (res && res.EC === 0) {
            setTypeProduct(res.DT)
        }
    }

    const fetchAllCodeTypeCondition = async () => {
        const res = await getAllCodeConditionService();
        if (res && res.EC === 0) {
            setTypeCondition(res.DT)
        }
    }

    useEffect(() => {
        fetchAllCodeTypeProduct();
        fetchAllCodeTypeCondition();
    }, [])

    const buildDataSelect = () => {
        if (typeProduct && typeProduct.length > 0) {
            const data: any = typeProduct.map((item: any) => ({
                key: item.value,
                value: item.key_code,
            }));
            setDataSelectProduct(data);
        }

        if (typeConditon && typeConditon.length > 0) {
            const data: any = typeConditon.map((item: any) => ({
                key: item.value,
                value: item.key_code,
            }));
            setDataSelectCondition(data);
        }
    };

    useEffect(() => {
        if (typeConditon.length > 0) {
            buildDataSelect();
        }
    }, [typeConditon]);

    const handleSubmitUpdate = async () => {
        const res = await handleUpdateProductAction(dataUpdate);
        if (res && res.EC === 0) {
            handleClose();
            getDataProduct();
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
                            <Col md={12}>
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label>Tên Sản Phẩm</Form.Label>
                                    <Form.Control
                                        value={dataUpdate?.name}
                                        onChange={(event) => handleOnChangeInput("name", event.target.value)}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row className="mb-3">
                            <Col md={6}>
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label>Loại sản phẩm</Form.Label>
                                    <Form.Select value={dataUpdate?.type_product} onChange={(event) => handleSelectChange("type_product", event)}>
                                        {dataSelectProduct && dataSelectProduct.length > 0 &&
                                            dataSelectProduct.map((item: any) => {
                                                return (
                                                    <option key={item.value} value={item.value}>{item.key}</option>
                                                )
                                            })
                                        }
                                    </Form.Select>
                                </Form.Group>
                            </Col>

                            <Col md={6}>
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label>Điều kiện sống</Form.Label>
                                    <Form.Select value={dataUpdate?.type_condition} onChange={(event) => handleSelectChange("type_condition", event)}>
                                        {dataSelectCondition && dataSelectCondition.length > 0 &&
                                            dataSelectCondition.map((item: any) => {
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
                                rows={5} />
                        </Form.Group>

                        <Row className="mb-3">
                            {/* Ô nhập số tiền */}
                            <Col md={6}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Giá tiền</Form.Label>
                                    <Form.Control
                                        onChange={(event) => handleOnChangeInput("price", event?.target.value)}
                                        value={dataUpdate?.price} />
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

export default UpdateProductModal;