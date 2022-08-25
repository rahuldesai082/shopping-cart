import React, { FunctionComponent, useEffect } from 'react';
import { Form, FormGroup, InputGroup, Accordion, Col } from 'react-bootstrap';
import { CartState } from '../../Context/Context';
import Rating from '../Rating/Rating';

import './Filters.css';

interface FiltersProps {
    maxPrice:number
}
 
const Filters: FunctionComponent<FiltersProps> = ({maxPrice}) => {
    const { productState, productDispatch } = CartState();
    const [ FilterCount, setFilterCount ] = React.useState(0);
    
    useEffect(() => {
        let count = 0;
        productState && Object.keys(productState).forEach((key:any) => {
            if (productState[key] && key !== 'searchQuery') {
                count++;
            }
        } );
        setFilterCount(count);
    }, [productState]);
    return <Col md={12} className='filter-container' data-testid="filters">
        <Accordion >
            <Accordion.Item eventKey="0">
                <Accordion.Header data-testid='filter-applied'>Filters({FilterCount})</Accordion.Header>
                <Accordion.Body className='filter-list'>
                    <InputGroup className='range-container'>
                        <InputGroup.Text className='range-label'>$0</InputGroup.Text>
                        <InputGroup.Text className='range-input'>
                            <Form.Range
                                data-testid='price-range'
                                min={0}
                                max={maxPrice}
                                value={productState?.byPrice}
                                onChange={(e) => productDispatch && productDispatch({
                                    type: "FILTER_BY_PRICE",
                                    payload: e.currentTarget.value,
                                })}
                                />
                        </InputGroup.Text>
                        <InputGroup.Text className='range-label' data-testid='max-price'>${maxPrice.toString().split('.')[0]}</InputGroup.Text>
                        <InputGroup.Text className='range-label range-value text-success rang'><b>${productState?.byPrice}</b></InputGroup.Text>
                    </InputGroup>
                    <Form.Check
                        className='filter-checkbox'
                        inline
                        label="In stock only"
                        name="outOfStock"
                        type="checkbox"
                        id={`outOfStock`}
                        data-testid='out-of-stock'
                        onChange={() =>
                            productDispatch && productDispatch({
                                type: "FILTER_BY_STOCK",
                                payload: '',
                            })
                        }
                        checked={productState?.byStock}
                    />
                    <Form.Check
                        data-testid='fast-delivery'
                        inline
                        className='filter-checkbox'
                        label="Fast delivery"
                        name="fastDelivery"
                        type="checkbox"
                        id={`fastDelivery`}
                        onChange={() =>
                            productDispatch && productDispatch({
                                type: "FILTER_BY_DELIVERY",
                                payload: '',
                            })
                        }
                        checked={productState?.byFastDelivery}
                    />
                    <div className='sortOrder'>
                        <FormGroup>
                            <Form.Check
                                data-testid='sort-by-price-asc'
                                inline
                                label="Ascending"
                                name="sortOrder"
                                type="radio"
                                id={`sortOrderAscending`}
                                onChange={() =>
                                    productDispatch && productDispatch({
                                    type: "SORT_BY_PRICE",
                                    payload: "lowToHigh",
                                    })
                                }
                                checked={productState?.sort === "lowToHigh" ? true : false}
                            />
                            <Form.Check
                                data-testid='sort-by-price-desc'
                                inline
                                label="Descending"
                                name="sortOrder"
                                type="radio"
                                id={`sortOrderDescending`}
                                onChange={() =>
                                    productDispatch && productDispatch({
                                    type: "SORT_BY_PRICE",
                                    payload: "highToLow",
                                    })
                                }
                                checked={productState?.sort === "highToLow" ? true : false}
                            />
                        </FormGroup>
                    </div>
                    <div className='rating-filter'>
                        <span>Rating: </span>
                        <Rating
                            rating={productState?.byRating||0}
                            onClick={(rating:number) => {
                                productDispatch && productDispatch({
                                    type: "FILTER_BY_RATING",
                                    payload: rating,
                                })
                            }}
                        />
                    </div>
                    {
                        !!FilterCount && <div
                            data-testid='clear-filters'
                            className='clear-filter'
                            onClick={() => {
                                productDispatch && productDispatch({type:"CLEAR_FILTERS", payload:''})
                            }}>
                            Clear filter
                        </div>
                    }
                </Accordion.Body>
            </Accordion.Item>
      </Accordion>
    </Col>;
}
 
export default Filters;