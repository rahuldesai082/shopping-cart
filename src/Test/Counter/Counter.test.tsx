import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import Counter from '../../Component/Counter/Counter';

const clickFunction = jest.fn();
describe('Counter', () => {
    it('renders without crashing', () => {
        render(<Counter />);
    });
    it('must have right placeholder', () => {
        render(<Counter placeHolder='Add' maxValue={5} updateCart={clickFunction} value={0}/>);
        const ele = screen.getByText('Add');
        expect(ele).toBeInTheDocument();
        fireEvent.click(ele);
        expect(clickFunction).toHaveBeenCalled();
    });
    it('must have right value', () => {
        render(<Counter placeHolder='Add' maxValue={5} updateCart={clickFunction} value={2}/>);
        const ele1 = screen.queryByTestId('counterValue');
        expect(ele1).toHaveValue('2');
    });
    it('must have not show add button when value is equal to max value', () => {
        render(<Counter placeHolder='Add' maxValue={5} updateCart={clickFunction} value={5}/>);
        const ele = screen.queryByTestId('add');
        expect(ele).not.toBeInTheDocument();
    });
    it('must show delete button if the value is equal to 1', () => {
        render(<Counter placeHolder='Add' maxValue={5} updateCart={clickFunction} value={1}/>);
        const ele = screen.queryByTestId('delete');
        expect(ele).toBeInTheDocument();
    });
    it('must show add and minus button if the value is let than max value but more than 1', () => {
        render(<Counter placeHolder='Add' maxValue={5} updateCart={clickFunction} value={3}/>);
        const ele1 = screen.queryByTestId('add');
        expect(ele1).toBeInTheDocument();
        ele1 && fireEvent.click(ele1);
        expect(clickFunction).toHaveBeenCalled();

        const ele2 = screen.queryByTestId('minus');
        expect(ele2).toBeInTheDocument();
        ele2 && fireEvent.click(ele2);
        expect(clickFunction).toHaveBeenCalled();
    });
    it('must call update cart function on button click', () => {
        render(<Counter placeHolder='Add' maxValue={5} updateCart={clickFunction} value={1}/>);
        const ele = screen.queryByTestId('delete');
        ele && fireEvent.click(ele);
        expect(clickFunction).toHaveBeenCalled();
    });
})