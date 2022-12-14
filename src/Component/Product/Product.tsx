import React, {  FunctionComponent } from 'react';
import { Card } from 'react-bootstrap';
import { TbTruckDelivery} from 'react-icons/tb';
import { CartState } from '../../Context/Context';
import { product } from '../../Utils/Interface/ContextInterface';
import Counter from '../Counter/Counter';
import Rating from '../Rating/Rating';
import './Product.css';
interface ProductsProps {
    productData:product;
    customClass?:string;
}

const Product: FunctionComponent<ProductsProps> = ({productData, customClass }) => {
    const { id, image, name, price, ratings, inStock, quantity, fastDelivery} = productData;
    const {dispatch} = CartState();
    const handleUpdateCart = ( value: number) => {
        let action:string;
        
        if(!!value)
            action = quantity ? 'CHANGE_CART_QTY' : 'ADD_TO_CART';
        else action = 'REMOVE_FROM_CART';
        
        dispatch && dispatch({type:action, payload: {...productData, quantity:value}});
    }
    return <>
        <Card key={id} className={`${customClass? customClass : ''} product-card`}>
            <Card.Body>
                <Card.Img variant="top" src={image} alt={name} />
            </Card.Body>
            <Card.Footer>
                <div className='rating-delivery'>
                    <Rating rating={ratings}/>
                    {fastDelivery && <TbTruckDelivery className='fastDelivery'/> }
                </div>
                <Card.Title className='product-name'>
                    <Card.Text ><small>{name}</small></Card.Text>
                </Card.Title>
                <div className='details'>
                    <span className='card-price'><b>${price}</b> {inStock ? <small>(<b className='text-danger'>{inStock} left</b>)</small> : 'Out of Stock'}</span>
                    {!!(inStock > 0) ? <Counter updateCart={handleUpdateCart} value={quantity} maxValue={inStock} placeHolder='Add' customClass='card-add_to_cart' /> :
                    <span className='out-of-stack text-danger'>Out of stock!</span>}
                </div>
            </Card.Footer>
        </Card>
    </>;
}
 
export default Product;