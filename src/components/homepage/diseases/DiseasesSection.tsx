import './DiseasesSection.scss';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';

const DiseasesSection = () => {
    return (
        <div className="disease-section">
            <div className="main-title">
                Bệnh Lý Thường Gặp
                <div className='underline'></div>
            </div>

            <div className='disease-content'>
                {[...Array(4)].map((_, index) => {
                    return (
                        <div className='each-disease' key={index}>
                            <Card style={{ width: '100%' }}>
                                <Card.Body style={{ height: "180px", backgroundColor: "#ccc", padding: "20px" }} />
                                <Card.Body>
                                    <Placeholder as={Card.Title} animation="glow">
                                        <Placeholder xs={6} />
                                    </Placeholder>
                                    <Placeholder as={Card.Text} animation="glow">
                                        <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                                        <Placeholder xs={6} /> <Placeholder xs={8} />
                                    </Placeholder>
                                    <Placeholder.Button variant="primary" xs={6} />
                                </Card.Body>
                            </Card>
                        </div>
                    )
                })
                }
            </div>

            <div className='explore'>
                <button>Tìm hiểu thêm</button>
            </div>
        </div>
    )
}

export default DiseasesSection;