import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import CartCard from '../../Component/CartCard/CartCard';
import { Cart } from '../../Context/Context';
import { product } from '../../Utils/Interface/ContextInterface';
import { cartList, mockFunction } from '../common';

describe('Cart card', () => {
    it('renders without crashing', () => {
        render(<Cart.Provider value={{state:{cart:cartList}, dispatch: mockFunction, productDispatch: mockFunction}}>
            <BrowserRouter>
                <CartCard actionType='checkout' customClass='cart-card'/>
            </BrowserRouter>
        </Cart.Provider>)
    });
    it('should have proper heading as "Yay!! keep shopping", if items added to cart', () => {
        render(<Cart.Provider value={{state:{cart:cartList}, dispatch: mockFunction, productDispatch: mockFunction}}>
            <BrowserRouter>
                <CartCard actionType='checkout' customClass='cart-card'/>
            </BrowserRouter>
        </Cart.Provider>)
        expect(screen.getByText('Yay!! keep shopping')).toBeInTheDocument();
    });
    it('should have proper heading as "Your cart is empty", if items not added to cart', () => {
        render(<Cart.Provider value={{state:{cart:[]}, dispatch: mockFunction, productDispatch: mockFunction}}>
            <BrowserRouter>
                <CartCard actionType='checkout' customClass='cart-card'/>
            </BrowserRouter>
        </Cart.Provider>)
        expect(screen.getByText('Your cart is empty')).toBeInTheDocument();
    });

})