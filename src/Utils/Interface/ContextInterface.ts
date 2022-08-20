export interface product {
    id: string,
    name: string,
    price: number,
    image: string,
    inStock: number,
    fastDelivery: boolean,
    ratings: number,
    quantity?: number,
}

export interface reducerParameters {
    type: string,
    payload: any,
}

export interface CartContextType {
    state?:{
        cart?: product[],
        products?: product[],
    },
    dispatch?:(param:reducerParameters)=>void,
    productState?:{},
    productDispatch?:(param:reducerParameters)=>void
};