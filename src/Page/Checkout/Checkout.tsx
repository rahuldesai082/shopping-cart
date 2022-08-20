import React, { FunctionComponent } from 'react';
import CartCard from '../../Component/CartCard/CartCard';

import './Checkout.css';
interface CartProps {
    
}
 
const Checkout: FunctionComponent<CartProps> = () => {
    return <div className='cart-container'>
        <CartCard/>
    </div>;
}
 
export default Checkout;