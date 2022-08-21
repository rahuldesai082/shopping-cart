import React, { FunctionComponent } from 'react';
import Button from 'react-bootstrap/esm/Button';
import Row from 'react-bootstrap/esm/Row';
import AddressCard from '../AddressCard/AddressCard';
import AddressForm from '../AddressForm/AddressForm';

import './BillingDetails.css';
interface BillingDetailsProps {
    customClass?: string;
}
 
const BillingDetails: FunctionComponent<BillingDetailsProps> = (props) => {
    const { customClass } = props;

    const [showAddressForm, setShowAddressForm] = React.useState(false);

    return <div className={`${customClass ? customClass : ''} billing--card`}>
        <h5 className="billing--title">
            <span>Billing details</span>
            <Button variant='primary' onClick={()=>setShowAddressForm(true)}>New</Button>
        </h5>
        <Row className='billing--address_list'>
            <AddressCard/>
            <AddressCard/>
        </Row>
        <AddressForm show={showAddressForm} setShow={setShowAddressForm} />
    </div>;
}
 
export default BillingDetails;