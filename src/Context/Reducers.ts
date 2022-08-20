import { product } from "../Utils/Interface/ContextInterface";

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
      case "CLEAR_FILTERS":
        return { byStock: false, byFastDelivery: false, byRating: 0 };
      default:
        return state;
    }
  };