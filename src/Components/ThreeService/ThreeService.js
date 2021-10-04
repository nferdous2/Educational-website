import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './ThreeService.css'
const ThreeService = () => {
    const [service, setService] = useState([])
    useEffect(() => {
        fetch('/threeservice.json')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <div>
            <div className="container">
                <div className="services">
                    <div className="row">
                        <h1 className="tags">Our Services</h1>
                        {/* services information */}
                        {service?.map((pd) => (
                            <div className="col-md-4 mt-5 mb-5">
                                <div className="service-style">
                                    <div className="service-details">
                                        <img className="w-75" src={pd.image} alt="" />
                                    </div>
                                    <div className="text-area">
                                        <h4>{pd.subject}</h4>
                                        <p>{pd.description}</p>
                                        <h2> {pd.project}Projects</h2>

                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ThreeService;