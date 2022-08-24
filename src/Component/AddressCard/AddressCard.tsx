import React, { FunctionComponent } from 'react';
import { Form } from 'react-bootstrap';
import Card from 'react-bootstrap/esm/Card';
import { FaPen, FaTrash } from 'react-icons/fa';
import { CartState } from '../../Context/Context';

import './AddressCard.css';

interface AddressCardProps {
    id:string;
    title?: string;
    address_type?: string;
    address?: string;
}
 
const AddressCard: FunctionComponent<AddressCardProps> = ({id, title, address_type, address}) => {
    const { addressDispatch } = CartState();
    return <Card className='address-card' key ={id}>
        <Card.Header>
            <Card.Title className='address--radio-button'>
                <Form.Check type='radio' label={title} name='address' inline id={id} onClick={ e => console.log(e.target) }/>
            </Card.Title>
        </Card.Header>
        <Card.Body>
            <Card.Subtitle className="mb-2 text-muted">{address_type}</Card.Subtitle>
            <Card.Text>{address}</Card.Text>
        </Card.Body>
        <Card.Footer className='address-action'>
            <span className='address-action-link text-success edit'><FaPen/>Edit</span>
            <span
                className='address-action-link text-danger delete'
                onClick={() => addressDispatch && addressDispatch({type: 'DELETE_ADDRESS', payload: id})}
            >
                    <FaTrash/>Delete
            </span>
        </Card.Footer>
    </Card>;
}
 
export default AddressCard;