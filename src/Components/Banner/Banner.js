import React from 'react';
import img from '../images/homes.jpg';
import './Banner.css'
import { Card } from 'react-bootstrap';
const Banner = () => {
    return (
        <div className="banner-container ">
            <div className="">
                <Card className="row d-flex banner align-items-center justify-content-center">
                    <Card.Img className="banner-image" src={img} alt="" />
                    <Card.ImgOverlay className="mt-2">
                        <Card.Title>
                            <h1 className="title">
                                Take A Break  <br /> From Assignment
                            </h1>
                        </Card.Title>
                        <Card.Text className="mt-3 p-3 title">
                            <h2>Skip the all-nighter.Take exparts suggestion for your assignment.And expand your knowledge.</h2>
                        </Card.Text>
                    </Card.ImgOverlay>
                </Card>
            </div>
        </div >
    );
};

export default Banner;