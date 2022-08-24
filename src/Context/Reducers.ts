import { address, product } from "../Utils/Interface/ContextInterface";

export const cartReducer = (state:any, action:{type:string, payload:any}) => {
    switch (action.type) {
      case "ADD_TO_CART":
        return { ...state, cart: [...state.cart, { ...action.payload, quantity: 1 }] };
      case "REMOVE_FROM_CART":
        return {
          ...state,
          cart: state.cart.filter((c:product) => c.id !== action.payload.id),
        };
      case "CHANGE_CART_QTY":
        return {
          ...state,
          cart: state.cart.filter((c:product) =>
            c.id === action.payload.id ? (c.quantity = action.payload.quantity) : c.quantity
          ),
        };
      case "CLEAR_CART":
        return { ...state, cart: [] };
      default:
        return state;
    }
  };
  
  export const productReducer = (state:any, action:{type:string, payload:any}) => {
    switch (action.type) {
      case "SORT_BY_PRICE":
        return { ...state, sort: action.payload };
      case "FILTER_BY_STOCK":
        return { ...state, byStock: !state.byStock };
      case "FILTER_BY_DELIVERY":
        return { ...state, byFastDelivery: !state.byFastDelivery };
      case "FILTER_BY_RATING":
        return { ...state, byRating: action.payload };
      case "FILTER_BY_SEARCH":
        return { ...state, searchQuery: action.payload };
      case "FILTER_BY_PRICE":
        return { ...state, byPrice: action.payload };
      case "CLEAR_FILTERS":
        return { byStock: false, sort:'', byFastDelivery: false, byRating: 0, byPrice: 0 };
      default:
        return state;
    }
  };
  export const AddressReducer = (state:any, action:{type:string, payload:any}) => {
    console.log({action})
    switch (action.type) {
      case "ADD_NEW_ADDRESS":
        return { ...state, addressList:[...state.addressList, {...action.payload}] };
      case "EDIT_ADDRESS":
        return { ...state, addressList:state.addressList.map((a:address)=>a.id===action.payload.id? {...a, ...action.payload} :a) };
      case "SELECT_ADDRESS":
        return { ...state, selectedAddress: state.addressList.find((a:address)=>a.id===action.payload) };
      case "CLEAR_ADDRESS":
        return { ...state, selectedAddress: undefined };
      case "DELETE_ADDRESS":
        return { ...state, addressList: state.addressList.filter((a:address) => a.id !== action.payload), };
      default:
        return state;
    }
  };
  export const UiReducer = (state:any, action:{type:string, payload:any}) => {
    switch(action.type){
      case "SET_IS_MOBILE":
        return { ...state, isMobile: action.payload };
      default:
        return state;
    }
  };