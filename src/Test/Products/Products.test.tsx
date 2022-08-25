import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import Products from '../../Component/Products/Products';
import { Cart } from '../../Context/Context';
import { filters, productList } from '../common';

describe('Products', () => {
    it('renders without crashing', () => {
        render(<Cart.Provider value={{ state:{ products: productList }, productState: filters}}>
            <Products/>
        </Cart.Provider>);
    });
    it('renders filter', () => {
        render(<Cart.Provider value={{ state:{ products: productList }, productState: filters}}>
            <Products/>
        </Cart.Provider>);
        expect(screen.getByTestId('filters')).toBeInTheDocument();
    });
    it('renders product list', () => {
        render(<Cart.Provider value={{ state:{ products: productList }, productState: filters}}>
            <Products/>
        </Cart.Provider>);
        expect(screen.getByTestId('product-list')).toBeInTheDocument();
    });
    it('renders message "No match found!" if no product exists', () => {
        render(<Cart.Provider value={{ state:{ products: [] }, productState: filters}}>
            <Products/>
        </Cart.Provider>);
        expect(screen.getByText('No match found!')).toBeInTheDocument();
    });
})