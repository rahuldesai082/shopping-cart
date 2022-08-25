import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import Rating from '../../Component/Rating/Rating';
import { mockFunction } from '../common';

describe('Rating page', () => {
    it('renders without crashing', () => {
        render(<Rating rating={4} />);
    });
    it('renders all 5 star', () => {
        const {container} = render(<Rating rating={4} />);
        const ele = container.getElementsByClassName('rating-star')
        expect(ele).toHaveLength(5);
    });
    it('renders all active star', () => {
        const {container} = render(<Rating rating={4} />);
        const ele = container.getElementsByClassName('rating-star active')
        expect(ele).toHaveLength(4);
    });
    it('Click event must work', () => {
        const {container} = render(<Rating rating={4} onClick={mockFunction}/>);
        const ele1 = container.getElementsByClassName('rating-star')
        fireEvent.click(ele1[4]);
        const ele2 = container.getElementsByClassName('rating-star active');
        expect(ele2).toHaveLength(4);
    });
    it('Mouse hover changes the start color', () => {
        const {container} = render(<Rating rating={2} onClick={mockFunction}/>);
        const ele1 = container.getElementsByClassName('rating-star')
        fireEvent.mouseEnter(ele1[3]);
        const ele2 = container.getElementsByClassName('rating-star active');

        expect(ele2).toHaveLength(4);
        
        fireEvent.mouseLeave(ele1[3]);
        const ele3 = container.getElementsByClassName('rating-star active');
        
        expect(ele3).toHaveLength(2);
    });
})