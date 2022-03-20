import { createContext, useContext, useReducer } from "react";
import { productReducer } from "../Reducer/productReducer";
const ReducerContext = createContext();
const contextInitialState = {
    sortBy: "",
    filterBy: { brands: [], color: [] },
    price: 0,
    productsList: [],
}

function ReducerContextProvider({ children }) {
    const [productStates, dispatch] = useReducer(productReducer, contextInitialState)
    return (
        <ReducerContext.Provider value={{ productStates, dispatch }}>
            {children}
        </ReducerContext.Provider>
    )
}
const useReducerContext = () => useContext(ReducerContext);

export { useReducerContext, ReducerContextProvider, contextInitialState };