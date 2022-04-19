import React from 'react';
import img1 from '../../images/img1.jpg'
import img2 from '../../images/img2.jpg'
import img3 from '../../images/img3.jpg'
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const services = [
        {id: 1,
        name: '10 Days Taste of Europe Tour', 
        img: img1,
        price: 150000, 
        description: 'The 10 days taste of America tour will take you to the heart of three uniquely beautiful Citys: New York, Washington Dc, an Niagara.'},
        {id: 2, 
            name: 'Maldive & Srilanka Tour 7 Days', 
            img: img2,
            price: 80000, 
            description: 'The 10 days taste of Europe tour will take you to the heart of three uniquely beautiful European countries: France, Switzerland, Italy Monaco including Vatican City.'},
        {id: 3, 
            name: '7 Days Exciting East Coast', 
            img: img3,
            price: 180000, 
            description: 'The 10 days taste of Europe tour will take you to the heart of three uniquely beautiful European countries: France, Switzerland, Italy Monaco including Vatican City.'},
    ]
    return (
        <div className=' container '>
            <h1 className='services-heading text-center mt-5 '>Services</h1>
            <div className='services'>
                {
                services.map(service => <Service 
                    key={service.id} 
                    service={service}
                    ></Service>)
            }
            </div>
        </div>
    );
};

export default Services;