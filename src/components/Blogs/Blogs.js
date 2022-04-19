import React from 'react';
import Header from '../Header/Header';
import './Blogs.css'

const Blogs = () => {
    return (
        <div>
                <Header></Header>
            <div className='blogs'>
            <div>
                <h4>Qs - What is purpose of contex API?</h4>
            <p>Context API create a global variable that can be pass data all components directly. this is alternative of props drilling. Context API use for pass data main component to child component.State management is easier for context api.</p>
            </div>
            <div>
                <h4>Qs - What is Symentic tag?</h4>
            <p>Symentic tag is meaningful part of html markup. This could be easy to understand developer and browser which part why use in html markup. Semantic html tag provide information about the content. Semantic tag is meaningful easy to understand. semantic HTML tag is nav, header, address, div, etc. </p>
            </div>
            <div>
                <h4>Qs - Difference between inline block and inline block element?</h4>
            <p><b>Inline: </b>Inline element doesn't start new line. can not set width height inline element</p>
            <p><b>Inline-block: </b>Inline-block element doesn't start on new line. but this element set width height.</p>
            <p><b>Block: </b>Block element start on new line. but this element can set width height.</p>
            </div>
        </div>
        </div>
    );
};

export default Blogs;