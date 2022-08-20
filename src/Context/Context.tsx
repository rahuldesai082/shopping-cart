import { createContext, useContext, useReducer } from "react";
import { faker } from '@faker-js/faker'
import { cartReducer, productReducer } from "./Reducers";
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
    inStock: faker.random.numeric(),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.random.numeric(1, { bannedDigits:['6','7','8','9']}),
    quantity: 0
  }));

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });

  const [productState, productDispatch] = useReducer(productReducer, {
    byStock: false,
    byFastDelivery: false,
    byRating: 0,
    searchQuery: "",
  });

  return (
    <Cart.Provider value={{ state, dispatch, productState, productDispatch }}>
      {children}
    </Cart.Provider>
  );
};

export default Context;