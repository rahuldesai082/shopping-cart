import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import Filters from '../../Component/Filters/Filters';

describe('Filter', () => {
    it('renders without crashing', () => {
        render(<Filters maxPrice={900} />);
    });
    it('renders all the filter', () => {
        render(<Filters maxPrice={900} />);
        expect(screen.getByTestId('price-range')).toBeInTheDocument();
        expect(screen.getByTestId('out-of-stock')).toBeInTheDocument();
        expect(screen.getByTestId('fast-delivery')).toBeInTheDocument();
        expect(screen.getByTestId('sort-by-price-asc')).toBeInTheDocument();
        expect(screen.getByTestId('sort-by-price-desc')).toBeInTheDocument();
        expect(screen.getByTestId('rating')).toBeInTheDocument();
    })
    
})