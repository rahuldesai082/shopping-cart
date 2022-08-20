import React, { FunctionComponent } from 'react';
import { Col, Row } from 'react-bootstrap';
import { CartState } from '../../Context/Context';
import { product } from '../../Utils/Interface/ContextInterface';
import Product from '../Product/Product';

import './products.css';

interface ProductsProps {
    
}
 
const Products: FunctionComponent<ProductsProps> = () => {
    const {state} = CartState();
    const getQuantity = (prodId:string) => {
        const cart: product[] | undefined = state?.cart;
        // find id in cart
        return cart?.find(item=>item.id===prodId)?.quantity;
    }
    return <Row className='products-container'>
        {
            state?.products && state.products.map(
                (product:product ,index:number)=><Product
                    customClass='product-size'
                    key={index}
                    productData={{...product, quantity:getQuantity(product.id)}}
                />
            )
        }
    </Row>;
}
 
export default Products;