import React from 'react';
import './Service.css'

const Service = (props) => {
    const {name, img, description, price} = props.service;
    return (
        <div>
            <div className='service'>
                <img src={img} alt="" />
                <div className='p-2 pb-4'>
                    <h3>{name}</h3>
                <p>Price: {price}</p>
                <p>{description}</p>
                <button className='btn btn-primary'>Show Details</button>
                </div>
            </div>
        </div>
    );
};

export default Service;