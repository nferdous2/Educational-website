import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Reviews.css'
const Reviews = () => {
    return (
        <div>
            <Container>
                <h1 className="tags">Reviews</h1>

                <Row className="review-details m-5 mt-5 p-5">
                    <Col xs>We are really glad to have supports from exparts.It really help me to sort out my problems.</Col>
                    <Col xs={{ order: 12 }}>I was so amazed by thier behaviour.And I can enrich my knowledge by the help of the exparts and also here we can read other subjects</Col>
                    <Col xs={{ order: 1 }}>Its proven helpful for me.IT's like my private tutor.The Exparts make our laerning easer</Col>
                </Row>
            </Container>
        </div>
    );
};

export default Reviews;