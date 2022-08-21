import React, { FunctionComponent } from 'react';
import Card from 'react-bootstrap/esm/Card';

import './AddressCard.css';

interface AddressCardProps {
    title?: string;
    address_type?: string;
    address?: string;
}
 
const AddressCard: FunctionComponent<AddressCardProps> = () => {
    return <Card className='address-card'>
        <Card.Body>
            <Card.Title className='address--radio-button'>
                <span>Card Title</span>
                <input aria-label="Checkbox for following text input" name='address' type="radio" className="form-check-input"/>
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
            <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            </Card.Text>
        </Card.Body>
    </Card>;
}
 
export default AddressCard;