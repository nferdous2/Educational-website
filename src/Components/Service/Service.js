
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './Service.css'
const Service = () => {
    const [service, setService] = useState([])
    useEffect(() => {
        fetch('/packageinfo.JSON')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <div>
            <div className="container">
                <div className="services">
                    <div className="row">
                        {/* services informations */}
                        {service?.map((pd) => (
                            <div className="col-md-4">
                                <div className="service-style">
                                    <div className="service-details">
                                        <img className="w-75" src={pd.image} alt="" />
                                    </div>
                                    <div className="text-area">
                                        <h4>{pd.subject}</h4>
                                        <p>{pd.description}</p>
                                        <p> {pd.project}Projects</p>

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

export default Service;