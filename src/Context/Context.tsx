import { createContext, useContext, useReducer } from "react";
import { faker } from '@faker-js/faker'
import { cartReducer, productReducer, AddressReducer, UiReducer } from "./Reducers";
import { CartContextType } from "../Utils/Interface/ContextInterface";

const Cart = createContext<CartContextType>({});

export const CartState = () => useContext(Cart);

faker.seed(99);

interface ContextProp { children: React.ReactNode };

const Context = ({ children }: ContextProp) => {
  const products = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.image(),
    inStock: faker.random.numeric(1,{bannedDigits:['3','4','5','6','7','8','9'], allowLeadingZeros:true}),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.random.numeric(1, {bannedDigits:['6','7','8','9']}),
    quantity: 0
  }));

  const addressType = ['office', 'home'];
  const addressList = [...Array(4)].map(() => ({
    id: faker.datatype.uuid(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    mobile: faker.phone.number(),
    AddressTitle: faker.name.findName(),
    address: faker.address.streetAddress(),
    city: faker.address.city(),
    state: faker.address.state(),
    postCode: faker.address.zipCode(),
    addressType: addressType[+faker.random.numeric(1, { bannedDigits:['2','3','4','5','6','7','8','9']})],
  }));

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });
  const [addressState, addressDispatch] = useReducer(AddressReducer,{
    addressList
  });

  const [productState, productDispatch] = useReducer(productReducer, {
    byStock: false,
    byFastDelivery: false,
    byRating: 0,
    searchQuery: "",
    byPrice:0,
  });

  const [uiState, uiDispatch] = useReducer(UiReducer, { isMobile: false });

  return (
    <Cart.Provider value={{ state, dispatch, productState, productDispatch, addressState, addressDispatch, uiState, uiDispatch }}>
      {children}
    </Cart.Provider>
  );
};

export default Context;