import React, { FunctionComponent } from 'react';
import { Container } from 'react-bootstrap';
import CartCard from '../../Component/CartCard/CartCard';
import Products from '../../Component/Products/Products';

import './Home.css';

interface HomeProps {
    
}
 
const Home: FunctionComponent<HomeProps> = () => {
    return <Container data-testid='home-container' className='home-container'>
        <Products/>
        <CartCard actionType='checkout' customClass='home-container--cart'/>
    </Container>;
}
 
export default Home;