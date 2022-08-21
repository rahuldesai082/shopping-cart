import React, { FunctionComponent } from 'react';
import Button from 'react-bootstrap/esm/Button';
import Col from 'react-bootstrap/esm/Col';
import Form from 'react-bootstrap/esm/Form';
import InputGroup from 'react-bootstrap/esm/InputGroup';
import Modal from 'react-bootstrap/esm/Modal';

import './AddressForm.css';

interface AddressFormProps {
    show: boolean;
    setShow: (show: boolean) => void;
}
 
const AddressForm: FunctionComponent<AddressFormProps> = ({show, setShow}) => {
    return <Modal show={show} onHide={()=>setShow(false)}>
        <Modal.Header closeButton><Modal.Title>Modal heading</Modal.Title></Modal.Header>
        <Modal.Body>
            <Form className='w-100 Address--form h-100'>
                <div>
                    <Form.Group className="mb-3 " controlId="formBasicAddressTitle">
                        <Form.Label>Address title</Form.Label>
                        <Form.Control aria-label="Address title" placeholder="Address title" />
                    </Form.Group>
                    <Form.Group className="mb-3 " controlId="formBasicFullName">
                        <Form.Label>Full name</Form.Label>
                        <InputGroup className="mb-3">
                            <Form.Control aria-label="First name" placeholder="First name" />
                            <Form.Control aria-label="Last name" placeholder="Last name" />
                        </InputGroup>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicMobile">
                        <Form.Label>Mobile number</Form.Label>
                        <Form.Control type="mobile" placeholder="Enter mobile" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicAddress">
                        <Form.Label>Address</Form.Label>
                        <Form.Control as="textarea" type="text" placeholder="Enter address" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCity">
                        <Form.Label>City & State</Form.Label>
                        <InputGroup className="mb-3">
                            <Form.Control aria-label="City" placeholder="Enter your city" />
                            <Form.Control aria-label="State" placeholder="Enter your state" />
                        </InputGroup>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPostcode">
                        <Form.Label>Postcode</Form.Label>
                        <Form.Control type="text" placeholder="Enter postcode" />
                    </Form.Group>
                </div>
                <Col className="Address--action">
                    <Button variant="danger" type="button" onClick={()=>setShow(false)}>Cancel</Button>
                    <Button variant="primary" type="submit">Save</Button>
                </Col>
            </Form>
        </Modal.Body>
    </Modal>;
}
 
export default AddressForm;