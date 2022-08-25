import { product } from "../Utils/Interface/ContextInterface";

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