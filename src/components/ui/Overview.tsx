import { Button, Col, Row, Statistic } from 'antd';

const ServiceOverview = () => {
    return (
        <div>
            <Row gutter={16}>
                <Col span={12}>
                    <Statistic title="Happy Clients" value={112893} />
                </Col>
                <Col span={12}>
                    <Statistic title="In Industry" value={`10+ years`} />
                </Col>
                <Col span={12}>
                    <Statistic title="Yearly Revenue" value={112893} precision={2} />
                    
                </Col>
                <Col span={12}>
                    <Statistic title="Active Engineers" value={109}  />
                </Col>
            </Row>
        </div>
    )
}

export default ServiceOverview