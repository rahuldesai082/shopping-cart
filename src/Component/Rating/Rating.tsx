import React, { FunctionComponent } from 'react';
import { FaStar } from 'react-icons/fa';

import './Rating.css';

interface RatingProps {
    rating:number;
}
 
const Rating: FunctionComponent<RatingProps> = ({rating}) => {
    return <div className='rating'>
        {
            Array(5).fill(0).map((_, index) => <FaStar color={index<rating ? 'gold' : 'grey'} key={index} className='rating-star'/>)
        }
    </div>;
}
 
export default Rating;