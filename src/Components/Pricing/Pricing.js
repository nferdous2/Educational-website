import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Pricing.css';
const Pricing = () => {
    return (
        <div>
            <Container>
                <h1 className="tags">Our Subjects Cost</h1>
                <Row className="pricing-details mb-5 mt-3">
                    <Col xs>
                        <h2>Writting</h2>
                        <p>Expert problem solving
                            100% unique content
                            Tests, experiments and surveys
                            Thorough review of sources
                            Cohesive argumentation <h1>$175</h1>
                        </p>
                        <button className="button">Try Now</button>
                    </Col>
                    <Col xs={{ order: 12 }}>
                        <h2>Problem Solving</h2>
                        <p>Instruction-based formatting
                            Problem checking
                            Changes to improve structure
                            Streamlining voice and style <h1>$110</h1>

                        </p>
                        <button className="button">Try Now</button>
                    </Col>
                    <Col xs={{ order: 1 }}>
                        <h2>Q&A</h2>
                        <p>There are several question and ans of your problems,given by our exparts.And they will make you understand your problems <h1>$100</h1>

                        </p>
                        <button className="button">Ask and Read</button>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default Pricing;