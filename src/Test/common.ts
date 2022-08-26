import { product, ProductFilter } from "../Utils/Interface/ContextInterface";

export const mockFunction = jest.fn();

export const cartList: product[] = [
    {
        id: 'product_id1',
        name: 'Product1',
        price: 450,
        image: 'product_image1',
        inStock: 4,
        fastDelivery: true,
        ratings: 3,
        quantity: 2
    },
    {
        id: 'product_id2',
        name: 'Product2',
        price: 550,
        image: 'product_image2',
        inStock: 6,
        fastDelivery: true,
        ratings: 4,
        quantity: 3
    },
    {
        id: 'product_id3',
        name: 'Product3',
        price: 650,
        image: 'product_image3',
        inStock: 7,
        fastDelivery: false,
        ratings: 3,
        quantity: 1
    }
]
export const productList: product[] = [
    {
        id: 'product_id1',
        name: 'Product1',
        price: 450,
        image: 'product_image1',
        inStock: 4,
        fastDelivery: true,
        ratings: 3
    },
    {
        id: 'product_id2',
        name: 'Product2',
        price: 550,
        image: 'product_image2',
        inStock: 6,
        fastDelivery: true,
        ratings: 4
    },
    {
        id: 'product_id3',
        name: 'Product3',
        price: 650,
        image: 'product_image3',
        inStock: 7,
        fastDelivery: false,
        ratings: 3
    },
    {
        id: 'product_id4',
        name: 'Product4',
        price: 600,
        image: 'product_image4',
        inStock: 3,
        fastDelivery: false,
        ratings: 4
    },
    {
        id: 'product_id5',
        name: 'Product5',
        price: 950,
        image: 'product_image5',
        inStock: 9,
        fastDelivery: true,
        ratings: 5
    }
]

export const filters1:ProductFilter = {
    sort: 'highToLow',
    byStock: true,
    byFastDelivery: false,
    byRating: 4,
    byPrice: 500,
    searchQuery: ''
}
export const filters2:ProductFilter = {
    sort: 'lowToHigh',
    byStock: true,
    byFastDelivery: true,
    byRating: 4,
    byPrice: 500,
    searchQuery: 'product'
}