import React, { FunctionComponent } from 'react';
import { Navbar, Container, Nav, Form, Dropdown, Badge } from 'react-bootstrap';
import { BsFillCartFill } from 'react-icons/bs';
import { FaShoppingBag } from 'react-icons/fa';
import { useNavigate } from 'react-router';
import { CartState } from '../../Context/Context';
import { CHECKOUT, HOME } from '../../routes';
 
const Header: FunctionComponent = () => {
    const {state, dispatch, productDispatch} = CartState();
    const navigate = useNavigate();
    return <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='header'>
        <Container className='header-container'>
            <Navbar.Brand data-testid="brand-logo" onClick={()=>navigate(HOME)} className='brandLogo'><FaShoppingBag fontSize='32'/>ShopAway</Navbar.Brand>
            {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
            <Navbar.Collapse className='show' id="responsive-navbar-nav">
                <Nav className="ml-auto search-container">
                    <Form className="d-flex search-form">
                        <Form.Control
                            data-testid='search-input'
                            type="search"
                            placeholder="Search"
                            className="search-input"
                            aria-label="Search"
                            onChange={(e) => {
                                productDispatch && productDispatch({
                                type: "FILTER_BY_SEARCH",
                                payload: e.target.value,
                                });
                            }}
                        />
                    </Form>
                </Nav>
                <Nav className='cart-state'>
                    <Dropdown align='end' className='cart-dropdown'>
                        <Dropdown.Toggle variant='success' data-testid='cart-icon'>
                            <BsFillCartFill fontSize='18'/>
                            <Badge data-testid="cart-length">{state?.cart?.length}</Badge>
                        </Dropdown.Toggle>
                        <Dropdown.Menu data-testid="cart-menu">
                            {
                                state?.cart?.length ? <>
                                    <Dropdown.Item data-testid="cart-checkout" onClick={() => navigate(CHECKOUT)}>Check out</Dropdown.Item>
                                    <Dropdown.Item data-testid="clear-cart" onClick={()=>dispatch && dispatch({type:'CLEAR_CART', payload:[]})} >Clear cart</Dropdown.Item>
                                </> : <Dropdown.Item className="text-danger">
                                    Cart is empty!
                                </Dropdown.Item>
                            }
                        </Dropdown.Menu>
                    </Dropdown>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>;
}
 
export default Header;