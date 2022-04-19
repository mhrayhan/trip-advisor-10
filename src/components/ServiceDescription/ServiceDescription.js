import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Header/Header';
import './ServiceDescription.css'

const ServiceDescription = () => {
    const {serviceId} = useParams();
    return (
        <div>
            <Header></Header>
            <div className='service-desc mt-5'>
                <h5>Description about service:</h5>
            <p className=''>{serviceId}</p>
        </div>
        </div>
    );
};

export default ServiceDescription;