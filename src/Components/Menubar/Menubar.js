import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import img from '../images/logo1.png';
import './Menubar.css'
import { userContext } from "./../../App";

const Menubar = () => {
    const [users, setUsers] = useContext(userContext);
    console.log(users)
    return (

        <div className="container">
            <div className="row bg-dark">
                <div className="col-md-10">
                    <div className="text-white">
                        <h3><span className="name">Do</span> Your Assignment</h3>
                    </div>
                </div>
                <div className="col-md-10">
                    <div className="menu">
                        <div className="d-flex align-items-center">

                            <Link to="/home" className="menu-tags">
                                <li>Home</li>
                            </Link>
                            <Link to="/about" className="menu-tags">
                                <li>About</li>
                            </Link>
                            <Link to="/services" className="menu-tags">
                                <li>Services</li>
                            </Link>
                            <Link to="/pricing" className="menu-tags">
                                <li>Pricing</li>
                            </Link>
                            <Link to="contact" className="menu-tags">
                                <li>Contact us</li>
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Menubar;