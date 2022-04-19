import React from 'react';
import Header from '../Header/Header';
import './About.css'
import imgMe from '../../images/me2.png'
import './About.css'

const About = () => {
    return (
        <div className=''>
            <Header></Header>
                <h2 className='mt-5 text-center'>About Me</h2>
            <div className=' mt-3 d-flex align-items-center justify-content-center'>
                <div className='about-me w-50'>
                    <h1>I'm Mozammel Hoque</h1>
                    <p>I'm a proud student of 'Programming Hero'. My goal is to see myself as a Frontend Developer in 2022. I learnet a lot from my favorit teacher 'Jhankar Mahbub'. He motivated me to start my career as a Developer.</p>
                </div>
                <img className='rounded mt-3 shadow' src={imgMe} alt="" />
            </div>
        </div>
    );
};

export default About;