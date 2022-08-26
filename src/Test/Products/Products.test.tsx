import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import Products from '../../Component/Products/Products';
import { Cart } from '../../Context/Context';
import { cartList, filters1, filters2, productList } from '../common';

describe('Products', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });
    it('renders without crashing', () => {
        render(<Cart.Provider value={{ state:{ products: productList }, productState: filters1}}>
            <Products/>
        </Cart.Provider>);
    });
    it('renders filter', () => {
        render(<Cart.Provider value={{ state:{ products: productList }, productState: filters2}}>
            <Products/>
        </Cart.Provider>);
        expect(screen.getByTestId('filters')).toBeInTheDocument();
    });
    it('renders product list', () => {
        render(<Cart.Provider value={{ state:{ products: productList, cart: cartList }, productState: filters1}}>
            <Products/>
        </Cart.Provider>);
        expect(screen.getByTestId('product-list')).toBeInTheDocument();
    });
    it('renders message "No match found!" if no product exists', () => {
        render(<Cart.Provider value={{ state:{ products: [] }, productState: filters1}}>
            <Products/>
        </Cart.Provider>);
        expect(screen.getByText('No match found!')).toBeInTheDocument();
    });
})