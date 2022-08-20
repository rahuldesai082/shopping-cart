import React, { FunctionComponent } from 'react';
import { Col, Row } from 'react-bootstrap';
import { FaMinus, FaPlus, FaTrash } from 'react-icons/fa';
import { FiTrash } from 'react-icons/fi';

import './Counter.css';
interface CounterProps {
    customClass?: string;
    placeHolder?: string;
    value?: number;
    maxValue?: number;
    updateCart?: (value: number) => void;
}
 
const Counter: FunctionComponent<CounterProps> = (props) => {
    const { customClass, placeHolder, value, updateCart, maxValue } = props;

    return <Row className={`${customClass ? customClass : ''} Counter`}>
        {
            (placeHolder && !value) ? <span className='placeHolder' onClick={() => updateCart && updateCart(1)}>
                {placeHolder}
            </span> : <Col className='cart-action'>
                {
                    (value && value > 1) ? <FaMinus
                        className='minus'
                        onClick={() => updateCart && updateCart(value - 1)}/>
                    : <FiTrash
                        className='remove'
                        onClick={() => updateCart && updateCart(0)}/>
                }
                <input type="text" readOnly className='Counter-input' value={value} />
                {
                    ((maxValue && value) && maxValue > value) ? <FaPlus
                        className='add'
                        onClick={() => updateCart && updateCart((value || 0 ) + 1)}/>
                    : null
                }
            </Col>
        }
    </Row>;
}
 
export default Counter;