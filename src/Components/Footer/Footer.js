import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div>
            <div className="footer">
                <div className="left-container">
                    <div className="row">
                        <div className="col-md-5">
                            <h2 className="text-white">Do Your Assignments</h2>
                            {/* icons use */}
                            <div className="icons-container d-flex ">
                                <div className="icons">
                                    <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                                </div>
                                <div className="icons">
                                    <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>
                                </div>
                                <div className="icons">
                                    <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                                </div>
                            </div>

                            <p className="mt-3 text-white">
                                <small> © . All rights reserved.</small>
                            </p>
                        </div>
                        {/* menu */}
                        <div className="col-md-2">
                            <div className="footer-menu text-white">
                                <ul>
                                    <li className="footer-menu">Home</li>
                                    <li className="footer-menu"> About us</li>
                                    <li className="footer-menu">Services</li>
                                    <li className="footer-menu">Contact us</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-5">
                            {/* left container */}
                            <div className="right-container text-white">
                                <h3>Sign up</h3>
                                <input
                                    className="footer-input"
                                    type="text"
                                    placeholder="Enter Email"
                                />
                                <div className="phone d-flex mt-4 text-white">
                                    <div className="icons">
                                        <FontAwesomeIcon icon={faPhoneVolume} />
                                    </div>
                                    <div>
                                        <h5>0192222222111</h5>
                                    </div>
                                </div>
                                <div className="justify-content-center text-white">
                                    <div>
                                        <p>
                                            Road 11 block- D banani, 1213 Dhaka, Bangladesh.
                                            <br />
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Footer;