import React, { FunctionComponent } from 'react';
import { Col, Row } from 'react-bootstrap';
import { CartState } from '../../Context/Context';
import { product } from '../../Utils/Interface/ContextInterface';
import Filters from '../Filters/Filters';
import Product from '../Product/Product';

import './products.css';

interface ProductsProps {
    
}
 
const Products: FunctionComponent<ProductsProps> = () => {
    const { state, productState } = CartState();
    const getQuantity = (prodId:string) => {
        const cart: product[] | undefined = state?.cart;
        // find id in cart
        return cart?.find(item=>item.id===prodId)?.quantity;
    }

    const getHighestPrice =() => {
        return (state?.products?.reduce((prev, curr) => {
            return prev.price > curr.price ? prev : curr;
        },state?.products[0]).price)||0;
    }

    const transformProducts = () => {
      let sortedProducts = state?.products;
      if(sortedProducts && productState) {
          if (productState.byStock) {
            sortedProducts = sortedProducts?.filter((prod) => prod.inStock>0);
          }
      
          if (productState.byRating) {
            sortedProducts = sortedProducts?.filter(
              (prod) => prod.ratings >= productState.byRating
            );
          }
          
          if (productState.sort) {
            sortedProducts = sortedProducts?.sort((a, b) =>
            productState.sort === "lowToHigh" ? a.price - b.price : b.price - a.price
            );
          }

          if (productState.byFastDelivery) {
            sortedProducts = sortedProducts?.filter((prod) => prod.fastDelivery);
          }
          if (productState.byPrice) {
              sortedProducts = sortedProducts?.filter((prod) => {
                  return +prod.price <= +productState.byPrice
              });
          }
      
          if (productState.searchQuery) {
            sortedProducts = sortedProducts?.filter((prod) =>
              prod.name.toLowerCase().includes(productState.searchQuery)
            );
          }
      }
  
      return sortedProducts;
    };
    const productList = transformProducts();
    return <div className='products-container' data-testid='products-container'>
        <Filters maxPrice={getHighestPrice()}/>
        <Col md={12} className='products-list'>
        {
            !!productList?.length ? productList?.map(
                (product:product ,index:number)=><Product
                    customClass='product-size'
                    key={index}
                    productData={{...product, quantity:getQuantity(product.id)}}
                />
            ) : <>No match found!</>
        }
        </Col>
    </div>;
}
 
export default Products;