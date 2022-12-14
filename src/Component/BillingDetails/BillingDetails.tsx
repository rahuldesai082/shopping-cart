import React, { FunctionComponent } from 'react';
import Button from 'react-bootstrap/esm/Button';
import Row from 'react-bootstrap/esm/Row';
import { CartState } from '../../Context/Context';
import { address } from '../../Utils/Interface/ContextInterface';
import AddressCard from '../AddressCard/AddressCard';
import AddressForm from '../AddressForm/AddressForm';
import Carousel from 'react-bootstrap/Carousel';


import './BillingDetails.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
interface BillingDetailsProps {
    customClass?: string;
}
 
const BillingDetails: FunctionComponent<BillingDetailsProps> = (props) => {
    const { addressState, uiState } = CartState();
    const { customClass } = props;
    const [showAddressForm, setShowAddressForm] = React.useState(false);
    return <div className={`${customClass ? customClass : ''} billing--card`}>
        <h5 className="billing--title">
            <span>Billing details</span>
            <Button variant='primary' onClick={()=>setShowAddressForm(true)}>New</Button>
        </h5>
        {
            !!(uiState?.isMobile && addressState && addressState?.addressList?.length-1 > 0) && <div className='scroll-note text-primary'>
                <FaArrowLeft/><span>Scroll side ways to see <b className='text-danger'>{addressState.addressList.length-1 || 0}</b> more address</span><FaArrowRight/>
            </div>
        }
        <Row className='billing--address_list'>
            {
                addressState && addressState?.addressList?.map((address:address, index) => <AddressCard
                    key={index}
                    id={address.id}
                    title={address.AddressTitle}
                    address_type={address.addressType}
                    address={address.address}
                />)
            }
        </Row>
        <AddressForm show={showAddressForm} setShow={setShowAddressForm} />
    </div>;
}
 
export default BillingDetails;