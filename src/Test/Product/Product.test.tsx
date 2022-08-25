import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Product from '../../Component/Product/Product';
import { Cart } from '../../Context/Context';

const productData = {
    id: 'product_id',
    name: 'Product',
    price: 450,
    image: 'product_image',
    inStock: 4,
    fastDelivery: true,
    ratings: 3
}
const dispatch = jest.fn();
describe('Product',() =>{
    it('renders without crashing',() => {
        render(<Product productData={productData} customClass='product'/>);
    });
    it('product should have custom class if passed',() => {
        const {container} = render(<Product productData={productData} customClass='product'/>);
        const ele = container.getElementsByClassName('product');
        expect(ele).toHaveLength(1);
    });
    it('should be able to add to cart if product in stock',() => {
        render(<Cart.Provider value={{dispatch}}><Product productData={productData} customClass='product'/></Cart.Provider>);
        const ele = screen.getByText('Add');
        expect(ele).toBeInTheDocument();
    });
    it('should show out of stock if product not in stock',() => {
        render(<Cart.Provider value={{dispatch:dispatch, uiState:{isMobile:false}}}>
            <Product productData={{...productData, inStock:0}}/>
        </Cart.Provider>);
        const ele = screen.getByText('Out of stock!');
        expect(ele).toBeInTheDocument();
    });
})