import React, { FunctionComponent } from 'react';
import { Form } from 'react-bootstrap';
import Card from 'react-bootstrap/esm/Card';
import { FaPen, FaTrash } from 'react-icons/fa';

import './AddressCard.css';

interface AddressCardProps {
    id:string;
    title?: string;
    address_type?: string;
    address?: string;
}
 
const AddressCard: FunctionComponent<AddressCardProps> = ({id, title, address_type, address}) => {
    return <Card className='address-card'>
        <Card.Header>
            <Card.Title className='address--radio-button'>
                <Form.Check type='radio' label={title} name='address' inline id={id}/>
            </Card.Title>
        </Card.Header>
        <Card.Body>
            <Card.Subtitle className="mb-2 text-muted">{address_type}</Card.Subtitle>
            <Card.Text>{address}</Card.Text>
        </Card.Body>
        <Card.Footer><FaPen size={'14px'}/><FaTrash size={'14px'}/></Card.Footer>
    </Card>;
}
 
export default AddressCard;