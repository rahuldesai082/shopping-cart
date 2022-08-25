import React, { FunctionComponent, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';

import './Rating.css';

interface RatingProps {
    rating:number;
    onClick?:(rating:number)=>void;
}
 
const Rating: FunctionComponent<RatingProps> = ({rating, onClick}) => {
    const [ratingValue, setRatingValue] = React.useState(rating);
    useEffect(() => {
        setRatingValue(rating);
    } , [rating]);
    const ratingHandle = (rating:number) => {
        onClick && onClick(rating);
    }
    return <div className='rating' data-testid='rating'>
        {
            Array(5).fill(0).map((_, index) => <FaStar
                key={index}
                className={`${!!(index < ratingValue) && 'active'} rating-star`}

                onClick={() => ratingHandle(index+1)}
                onMouseEnter={(e) => onClick && index >= rating && setRatingValue(index+1)}
                onMouseLeave={() => onClick && setRatingValue(rating)}
            />)
        }
    </div>;
}
 
export default Rating;