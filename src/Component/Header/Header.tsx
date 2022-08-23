import React, { FunctionComponent } from 'react';
import { Navbar, Container, Nav, Form, Dropdown, Badge } from 'react-bootstrap';
import { BsFillCartFill } from 'react-icons/bs';
import { FaShoppingBag } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { CartState } from '../../Context/Context';
import { CHECKOUT, HOME } from '../../routes';
 
const Header: FunctionComponent = () => {
    const {state, dispatch, productDispatch} = CartState();
    return <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='header'>
    <Container>
      <Navbar.Brand><Link className='brandLogo' to={HOME}><FaShoppingBag fontSize='32'/>ShopAway</Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse className='show' id="responsive-navbar-nav">
        <Nav className="ml-auto search-container">
            <Form className="d-flex search-form">
                <Form.Control
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
        <Nav>
            <Dropdown align='end' className='cart-dropdown'>
                <Dropdown.Toggle variant='success'>
                    <BsFillCartFill fontSize='18'/>
                    <Badge>{state?.cart?.length}</Badge>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    {
                        state?.cart?.length ? <>
                            <Dropdown.Item><Link to={CHECKOUT}>Check out</Link></Dropdown.Item>
                            <Dropdown.Item onClick={()=>dispatch && dispatch({type:'CLEAR_CART', payload:[]})} >Clear cart</Dropdown.Item>
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