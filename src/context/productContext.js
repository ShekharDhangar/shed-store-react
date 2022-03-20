import { createContext, useContext, useReducer } from "react";
import { productReducer } from "../Reducer/productReducer";
const ProductContext = createContext();
const contextInitialState = {
    sortBy: "",
    filterBy: { brands: [], color: [] },
    rating: 0,
    wishlist: [],
    cart: [],
    productsList: [],
    userID: "",
}

function ProductProvider({ children }) {
    const [productStates, dispatch] = useReducer(productReducer, contextInitialState)
    return (
        <ProductContext.Provider value={{ productStates, dispatch }}>
            {children}
        </ProductContext.Provider>
    )
}
const useProductContext = () => useContext(ProductContext);

export { useProductContext, ProductProvider, contextInitialState };