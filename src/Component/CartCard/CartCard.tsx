import React, { FunctionComponent } from 'react';
import { Card, Button, Col } from 'react-bootstrap';
import { TbFaceId, TbFaceIdError } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import { CartState } from '../../Context/Context';
import { CHECKOUT } from '../../routes';
import { product } from '../../Utils/Interface/ContextInterface';
import Counter from '../Counter/Counter';

import './CartCard.css';
interface CartCardProps {
    customClass?: string;
    actionType: 'checkout' | 'payment';
}
 
const CartCard: FunctionComponent<CartCardProps> = (props) => {
    const { customClass, actionType } = props;
    const {state, dispatch} = CartState();
    const getTitle = () => {
        return <div className='w-100' data-testid='cart-container'>
            {
                state?.cart?.length ? <Card.Text className='cart-title text-success'><span>Yay!! keep shopping</span> <TbFaceId className='emotion'/></Card.Text> :
                <Card.Text className='w-100 cart-title text-danger'><span>Your cart is empty</span><TbFaceIdError className='emotion'/></Card.Text>
            }
        </div>;
    }
    const getTotal = () => {
        return state?.cart?.length && state.cart.reduce((a: number, b: product) => a + (b.price * (b?.quantity || 1)), 0);
    }
    const handleCartUpdate = (value: number, productData:product) => {
        let action:string;
        
        if(!!value)
            action = productData.quantity ? 'CHANGE_CART_QTY' : 'ADD_TO_CART';
        else action = 'REMOVE_FROM_CART';
        
        dispatch && dispatch({type:action, payload: {...productData, quantity:value}});
    }
    return <Card className={`${customClass ? customClass : ''} cart-card`}>
        <Card.Header as="h5">{getTitle()}</Card.Header>
        <Card.Body className='cart--body'>
            <div className='w-100 cart--list h-100'>
                {
                    state?.cart && state.cart.map(
                        (product:product ,index:number)=><>
                            <Col className='cart--product' key={index}>
                                <span className='cart--product_image_name'>
                                    <img className='cart--product_image' src ={product.image} alt={product.name} />
                                    <span className='cart--product_name'>{product.name}</span>
                                </span>
                                <span className='cart--product_price_quantity'>${product.price} <small>X</small> {product.quantity}</span>
                            </Col>
                            <Col className='cart--product_total'>
                                <Counter updateCart={(count:number)=>handleCartUpdate(count, product)} value={product.quantity} maxValue={product.inStock} customClass='card-add_to_cart' />
                                <b>${product.price * (product?.quantity||1)}</b>
                            </Col>
                            <hr/>
                        </>
                    )
                }
            </div>
            {
                !!state?.cart?.length && <div className='w-100'>
                    <Col className='cart--grand_total'>
                        <strong>Total</strong>
                        <strong>${getTotal()}</strong>
                    </Col>
                    <hr/>
                    { actionType === 'checkout' ? <Link to={CHECKOUT}><Button className='w-100' variant="primary">Check out</Button></Link>
                        : <Link to='#'><Button className='w-100 btn-success' variant="primary">Proceed to Payment</Button></Link>}
                </div>
            }
        </Card.Body>
    </Card>;
}
 
export default CartCard;