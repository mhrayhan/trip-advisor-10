import React from 'react';
import {  useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    const { name, img, description, price} = service;
    const navigate = useNavigate();
    const navigateToServiceDescription = id => {
        navigate(`/service/${id}`);
    }

    return (
        <div>
            <div className='service'>
                <img src={img} alt="" />
                <div className='p-2 pb-4'>
                    <h3>{name}</h3>
                <p>Price: {price}</p>
                <p>{description}</p>
                <button onClick={()=>navigateToServiceDescription(description)} className='btn btn-primary'>Show Details</button>
                </div>
            </div>
        </div>
    );
};

export default Service;