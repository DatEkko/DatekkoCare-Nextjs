import { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import { Form, Row, Col } from "react-bootstrap";
import _ from 'lodash';
import { getAllDiseaseArticle, handleUpdateTreatmentArticleAction } from '@/app/action';
import { toast } from 'react-toastify';
import { getAllOrganArticle } from '@/app/action';

const UpdateTreatmentModal = (props: any) => {
    const { show, setShow, getDataTreatmentArticle, dataUpdate, setDataUpdate } = props;
    const [listDataDisease, setlistDataDisease] = useState<any[]>([])
    const [listDataSelect, setListDateSelect] = useState<any>([]);

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

    const fetchDataDiseaseArticle = async () => {
        let res = await getAllDiseaseArticle();
        if (res && res.EC === 0) {
            setlistDataDisease(res.DT)
        }
    }

    useEffect(() => {
        fetchDataDiseaseArticle();
    }, [])

    const builDataSelect = () => {
        const dataSelect: any[] = [];
        const _listDataSelect = _.cloneDeep(listDataDisease);

        _listDataSelect.forEach((item: any) => {
            const obj = {  // Tạo object mới trong mỗi vòng lặp
                id: item.id,
                name: item.name
            };
            dataSelect.push(obj);
        });

        setListDateSelect(dataSelect);
    };

    useEffect(() => {
        builDataSelect();
    }, [listDataDisease])

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedId = event.target.value;
        setDataUpdate((prev: any) => ({
            ...prev,
            organ_id: selectedId,
        }));
    };



    const handleSubmitUpdate = async () => {
        const res = await handleUpdateTreatmentArticleAction(dataUpdate);
        if (res && res.EC === 0) {
            handleClose();
            getDataTreatmentArticle();
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
                                <Form.Group>
                                    <Form.Label>Tiêu Đề</Form.Label>
                                    <Form.Control
                                        value={dataUpdate?.name}
                                        onChange={(event) => handleOnChangeInput("name", event.target.value)}
                                    />
                                </Form.Group>
                            </Col>


                            <Col md={6}>
                                <Form.Label>Bệnh Liên Quan</Form.Label>
                                <Form.Select
                                    value={dataUpdate?.disease_id}
                                    onChange={(event) => handleSelectChange(event)}>
                                    {listDataSelect && listDataSelect.length > 0 &&
                                        listDataSelect.map((item: any) => {
                                            return (
                                                <option
                                                    key={item.id}
                                                    value={item.id}
                                                >
                                                    {item.name}
                                                </option>
                                            )
                                        })
                                    }
                                </Form.Select>
                            </Col>
                        </Row>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Nội dung</Form.Label>
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

export default UpdateTreatmentModal;