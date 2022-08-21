import React, { FunctionComponent } from 'react';
import { Container } from 'react-bootstrap';
import BillingDetails from '../../Component/BillingDetails/BillingDetails';
import CartCard from '../../Component/CartCard/CartCard';

import './Checkout.css';
interface CartProps {
    
}
 
const Checkout: FunctionComponent<CartProps> = () => {
    return <Container className='checkout-container'>
        <BillingDetails customClass='checkout-container--billing-detail'/>
        <CartCard actionType='payment' customClass='checkout-container--cart'/>
    </Container>;
}
 
export default Checkout;