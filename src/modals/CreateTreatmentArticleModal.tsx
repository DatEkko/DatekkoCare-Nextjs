import { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import { Form, Row, Col } from "react-bootstrap";
import _ from 'lodash';
import { handleCreateTreatmentAction, getAllDiseaseArticle } from '@/app/action';
import { toast } from 'react-toastify';


type TreatmentArticle = {
    name: string,
    disease_id: number | string,
    content: string,
    author: string,
    image?: any
}

const CreateTreatmentArticleModal = (props: any) => {
    const { show, setShow, getDataTreatmentArticle } = props;
    const handleClose = () => setShow(false);
    const defaultArticle = {
        name: '',
        disease_id: '1',
        content: '',
        author: '',
        image: null
    }

    const [listDataDisease, setlistDataDisease] = useState<any[]>([])
    const [listDataSelect, setListDateSelect] = useState<any>([]);
    const [article, setArticle] = useState<TreatmentArticle>(defaultArticle);

    const handleOnChangeInput = (type: keyof TreatmentArticle, value: string) => {
        const _article = _.cloneDeep(article);
        _article[type] = value;
        setArticle(_article)
    }

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

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.readAsDataURL(file); // Chuyển thành base64

            reader.onloadend = () => {
                const base64String = reader.result as string; // Lấy chuỗi base64

                setArticle((prev) => ({
                    ...prev,
                    image: base64String, // Lưu base64 vào state
                }));
            };
        }
    };

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedId = event.target.value;
        setArticle(prev => ({
            ...prev,
            disease_id: selectedId,
        }));
    };

    const handleSubmitCreate = async () => {
        const res = await handleCreateTreatmentAction(article);
        if (res && res.EC === 0) {
            handleClose();
            setArticle(defaultArticle);
            getDataTreatmentArticle();
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
                    <Modal.Title>Thêm mới bài viết</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form>
                        <Row className="mb-3">
                            {/* Ô nhập tên */}
                            <Col md={6}>
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label>Tiêu Đề</Form.Label>
                                    <Form.Control
                                        value={article.name}
                                        onChange={(event) => handleOnChangeInput("name", event.target.value)}
                                    />
                                </Form.Group>
                            </Col>

                            {/* Ô tải ảnh */}
                            <Col md={6}>
                                <Form.Label>Bệnh Liên Quan</Form.Label>
                                <Form.Select onChange={(event) => handleSelectChange(event)}>
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
                                onChange={(event) => handleOnChangeInput("content", event?.target.value)}
                                value={article.content}
                                as="textarea"
                                rows={10} />
                        </Form.Group>

                        <Row className="mb-3">
                            {/* Ô nhập tên */}
                            <Col md={6}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Nguồn / Tác giả</Form.Label>
                                    <Form.Control
                                        onChange={(event) => handleOnChangeInput("author", event?.target.value)}
                                        value={article.author} />
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
                    <Button variant="primary" onClick={handleSubmitCreate}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default CreateTreatmentArticleModal;