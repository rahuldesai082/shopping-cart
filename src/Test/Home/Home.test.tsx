import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Home from '../../Page/Home/Home';

describe('Home', () => {
    it('renders without crashing', () => {
        render(<BrowserRouter>
            <Home/>
        </BrowserRouter>);
    });
    it('renders products container and cart', () => {
        render(<BrowserRouter>
            <Home/>
        </BrowserRouter>);
        expect(screen.getByTestId('products-container')).toBeInTheDocument();
        expect(screen.getByTestId('cart-card')).toBeInTheDocument();
    });
})