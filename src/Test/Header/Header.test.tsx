import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../../Component/Header/Header';
import { Cart } from '../../Context/Context';
import { CHECKOUT, HOME } from '../../routes';
import { cartList, mockFunction } from '../common';

describe('Header', () => {
    it('renders without crashing', () => {
        render(<Cart.Provider value={{state:{cart:cartList}, dispatch: mockFunction, productDispatch: mockFunction}}>
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        </Cart.Provider>);
    });
    it('should have brand logo and navigate to home when clicked', () => {
        render(<Cart.Provider value={{state:{cart:cartList}, dispatch: mockFunction, productDispatch: mockFunction}}>
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        </Cart.Provider>);
        const brandLogo = screen.getByTestId('brand-logo');
        expect(brandLogo).toBeInTheDocument();
        fireEvent.click(brandLogo);
        expect(window.location.pathname).toEqual(HOME);
    });
    it('should show message "Cart is empty!" when cart is empty', () => {
        render(<Cart.Provider value={{state:{cart:[]}, dispatch: mockFunction, productDispatch: mockFunction}}>
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        </Cart.Provider>);
        const cartIcon = screen.getByTestId('cart-icon');
        expect(cartIcon).toBeInTheDocument();
        fireEvent.click(cartIcon);
        expect(screen.getByText('Cart is empty!')).toBeInTheDocument();
    });
    it('should trigger search call on typing in search box', () => {
        render(<Cart.Provider value={{state:{cart:cartList}, dispatch: mockFunction, productDispatch: mockFunction}}>
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        </Cart.Provider>);
        const searchInput = screen.getByTestId('search-input');
        expect(searchInput).toBeInTheDocument();
        fireEvent.change(searchInput, {target:{value:'test'}});
        expect(mockFunction).toHaveBeenCalled();
    });
    it('should render check out and clear cart button if items added in cart', () => {
        render(<Cart.Provider value={{state:{cart:cartList}, dispatch: mockFunction, productDispatch: mockFunction}}>
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        </Cart.Provider>);
        const cartIcon = screen.getByTestId('cart-icon');
        expect(cartIcon).toBeInTheDocument();
        fireEvent.click(cartIcon);
        const checkOut = screen.getByTestId('cart-checkout');
        expect(checkOut).toBeInTheDocument();
        const clearCart = screen.getByTestId('clear-cart');
        expect(clearCart).toBeInTheDocument();
    });
    it('should navigate to checkout page on clicking on checkout option from dropdown', () => {
        render(<Cart.Provider value={{state:{cart:cartList}, dispatch: mockFunction, productDispatch: mockFunction}}>
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        </Cart.Provider>);
        const cartIcon = screen.getByTestId('cart-icon');
        expect(cartIcon).toBeInTheDocument();
        fireEvent.click(cartIcon);
        const checkOut = screen.getByTestId('cart-checkout');
        expect(checkOut).toBeInTheDocument();
        fireEvent.click(checkOut);
        expect(window.location.pathname).toEqual(CHECKOUT);
    });
    it('should dispatch a clear cart function on clicking on clear cart option from dropdown', () => {
        render(<Cart.Provider value={{state:{cart:cartList}, dispatch: mockFunction, productDispatch: mockFunction}}>
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        </Cart.Provider>);
        const cartIcon = screen.getByTestId('cart-icon');
        expect(cartIcon).toBeInTheDocument();
        fireEvent.click(cartIcon);
        const clearCart = screen.getByTestId('clear-cart');
        expect(clearCart).toBeInTheDocument();
        fireEvent.click(clearCart);
        expect(mockFunction).toHaveBeenCalled()
    });
})