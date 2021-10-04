import React from 'react';
import img from '../images/about.jpg';
import './About.css'
const About = () => {
    return (
        <div>
            <div className="container">
                <h1 className="tags p-4">About Us</h1>

                <div className="about-container mt-2 mb-5">
                    <div className="row g-0">
                        <div className="about-image col-md-4">
                            <img className="w-75" src={img} alt="" />
                        </div>
                        <div className="details col-md-8">
                            <h3 className=''>Who we are</h3>
                            <p>Get a glimpse of who we are today, and of the long, long way we've come together.</p>
                            <p>we have about 500+ exparts,45+ support manager,1k+ projects.Here students can solve their assignments with the help of the exparts,they can solve their problems in short time.With out problem solving,students can read and parctice different subjects according to their need.And if the stuck somewhere,then our exparts are always there.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;