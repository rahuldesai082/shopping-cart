import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import Filters from '../../Component/Filters/Filters';
import { Cart } from '../../Context/Context';
import { mockFunction } from '../common';

describe('Filter', () => {
    it('renders without crashing', () => {
        render(<Filters maxPrice={900} />);
    });
    it('renders all the filter with filter count', () => {
        render(<Cart.Provider value={{ productDispatch: mockFunction, productState: {sort:'highToLow', searchQuery:'' , byPrice: 500, byFastDelivery: true, byRating: 3, byStock: false } } }><Filters maxPrice={900} /></Cart.Provider>);

        const priceRange = screen.getByTestId('price-range');
        expect(priceRange).toBeInTheDocument();

        const inStock = screen.getByTestId('out-of-stock');
        expect(inStock).toBeInTheDocument();
        
        const fastDelivery = screen.getByTestId('fast-delivery');
        expect(fastDelivery).toBeInTheDocument();

        const sortOrderAsc = screen.getByTestId('sort-by-price-asc');
        expect(sortOrderAsc).toBeInTheDocument();
        const sortOrderDesc = screen.getByTestId('sort-by-price-desc');
        expect(sortOrderDesc).toBeInTheDocument();

        const rating = screen.getByTestId('rating');
        expect(rating).toBeInTheDocument();
        
        expect(screen.getByTestId('max-price')).toHaveTextContent('$900');
        expect(screen.getByTestId('filter-applied')).toHaveTextContent('Filters(4)');
    });
    it('should trigger filter dispatch when price range is changed', () =>{
        render(<Cart.Provider value={{ productDispatch: mockFunction, productState: {sort:'highToLow', searchQuery:'' , byPrice: 500, byFastDelivery: true, byRating: 3, byStock: false } } }>
            <Filters maxPrice={900} />
        </Cart.Provider>);

        const priceRange = screen.getByTestId('price-range');
        expect(priceRange).toBeInTheDocument();
        
        fireEvent.change(priceRange, { target: { value: 300  } });
        expect(mockFunction).toHaveBeenCalledTimes(1);
    });

    it('should trigger filter dispatch when "in stock option" is changed', () =>{
        render(<Cart.Provider value={{ productDispatch: mockFunction, productState: {sort:'highToLow', searchQuery:'' , byPrice: 500, byFastDelivery: true, byRating: 3, byStock: false } } }>
            <Filters maxPrice={900} />
        </Cart.Provider>);

        const inStock = screen.getByTestId('out-of-stock');
        expect(inStock).toBeInTheDocument();
        
        fireEvent.click(inStock);
        expect(mockFunction).toHaveBeenCalled();
    });

    it('should trigger filter dispatch when "fast delivery" is changed', () =>{
        render(<Cart.Provider value={{ productDispatch: mockFunction, productState: {sort:'highToLow', searchQuery:'' , byPrice: 500, byFastDelivery: true, byRating: 3, byStock: false } } }>
            <Filters maxPrice={900} />
        </Cart.Provider>);

        const fastDelivery = screen.getByTestId('fast-delivery');
        expect(fastDelivery).toBeInTheDocument();
        
        fireEvent.click(fastDelivery);
        expect(mockFunction).toHaveBeenCalledTimes(1);
    });
    it('should trigger filter dispatch when "sort by ascending" is checked', () =>{
        render(<Cart.Provider value={{ productDispatch: mockFunction, productState: {sort:'highToLow', searchQuery:'' , byPrice: 500, byFastDelivery: true, byRating: 3, byStock: false } } }>
            <Filters maxPrice={900} />
        </Cart.Provider>);

        const sortOrderAsc = screen.getByTestId('sort-by-price-asc');
        expect(sortOrderAsc).toBeInTheDocument();
        
        fireEvent.click(sortOrderAsc);
        expect(mockFunction).toHaveBeenCalledTimes(1);
    });
    it('should trigger filter dispatch when "sort by descending" is checked', () =>{
        render(<Cart.Provider value={{ productDispatch: mockFunction, productState: {sort:'highToLow', searchQuery:'' , byPrice: 500, byFastDelivery: true, byRating: 3, byStock: false } } }>
            <Filters maxPrice={900} />
        </Cart.Provider>);

        const sortOrderDesc = screen.getByTestId('sort-by-price-desc');
        expect(sortOrderDesc).toBeInTheDocument();
        
        fireEvent.click(sortOrderDesc);
        expect(mockFunction).toHaveBeenCalledTimes(1);
    });

})