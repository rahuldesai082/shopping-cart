import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Home from '../../Page/Home/Home';

describe(Home, () => {
    it('renders without crashing', () => {
        render(<Home />);
    });
    it('renders home container', () => {
        render(<Home />);
        expect(screen.getByTestId('home-container')).toBeInTheDocument();
        expect(screen.getByTestId('products-container')).toBeInTheDocument();
        expect(screen.getByTestId('cart-container')).toBeInTheDocument();
    });
});