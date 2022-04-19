import React from 'react';
import './Reviews.css'

const Reviews = () => {
    const reviews = [
        {id: 1, 
            name: 'Matthews', 
        review: 'Excellent private tour. Our guide was incredibly knowledgable and gave us a fantastic day in Riga. We learnt about history, art, culture and much more. We are well traveled and have high standards, and we were very happy with our tour guide - she was great and spoke excellent English. Time and money well invested.'},
        {id: 2, 
        name: 'anna', 
        review: 'An excellent tour with more than just an overview of Riga. Old town is fascinating with some great stories and ideas for further exploring. Art Nouveau district is a gem! The real treat was the markets with a great introduction to this mammoth'},
        {id: 3, 
        name: 'Dave', 
        review: 'Our guide Edita was lovely and charming on our 3.5 hour trip, we got to choose what we wanted to see and even stop for coffee as it was cold, a great tour would highly recommend it.'}
    ];
    return (
        <div className='container'>
            <h2 className='text-center  mt-5 mb-2'>Customer Says</h2>
            <div className='reviews'>
                {
                reviews.map(review => 
                <div>
                    <div className='review'>
                        <h5>{review.name}</h5>
                        <p>{review.review}</p>
                    </div>
                </div>)
            }
            </div>
        </div>
    );
};

export default Reviews;