import React from 'react';
import { useParams } from 'react-router-dom';

const CheckOut = () => {
    const {serviceId} = useParams();
    return (
        <div>
            <p className='service-desc'>{serviceId}</p>
        </div>
    );
};

export default CheckOut;