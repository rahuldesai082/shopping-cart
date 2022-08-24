import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Home from '../../Page/Home/Home';

describe(Home, () => {
    it('renders without crashing', () => {
        render(<Home />);
    });
    it('renders the title', () => {
        render(<Home />);
        expect(screen.getByTestId('homeContainer')).toBeInTheDocument();
    });
})