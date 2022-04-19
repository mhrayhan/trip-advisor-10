import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Header/Header';
import './ServiceDescription.css'

const ServiceDescription = () => {
    const {serviceId} = useParams();
    return (
        <div>
            <Header></Header>
            <p className='service-desc  mt-5'>{serviceId}</p>
        </div>
    );
};

export default ServiceDescription;