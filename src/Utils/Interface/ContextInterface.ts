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

export interface address {
    id: string,
    firstName: string,
    lastName: string,
    mobile: string,
    AddressTitle: string,
    address: string,
    city: string,
    state: string,
    postCode: string,
    addressType: string,
    isDefault?: boolean
}

export interface reducerParameters {
    type: string,
    payload: any,
}

export interface ProductFilter {
    sort:'lowToHigh'|'highToLow',
    byStock:boolean,
    byFastDelivery:boolean,
    byRating:number,
    byPrice:number,
    searchQuery:string,
    [key: string]: any
}

export interface CartContextType {
    state?:{
        cart?: product[],
        products?: product[]
    },
    dispatch?:(param:reducerParameters)=>void,
    productState?:ProductFilter,
    productDispatch?:(param:reducerParameters)=>void
    addressState?:{ addressList: address[], selectedAddress?: address }, 
    addressDispatch?:(param:reducerParameters)=>void
    uiState?:{ isMobile: boolean }, 
    uiDispatch?:(param:reducerParameters)=>void
};