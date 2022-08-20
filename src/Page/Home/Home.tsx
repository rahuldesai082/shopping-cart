import React, { FunctionComponent } from 'react';
import { Container } from 'react-bootstrap';
import CartCard from '../../Component/CartCard/CartCard';
import Products from '../../Component/Products/Products';

import './Home.css';

interface HomeProps {
    
}
 
const Home: FunctionComponent<HomeProps> = () => {
    return <Container className='home-container'>
        <Products/>
        <CartCard customClass='home-container__cart'/>
    </Container>;
}
 
export default Home;