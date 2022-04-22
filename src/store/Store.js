import React, {useReducer} from "react";
import productReducer from "./reducer/productReducer";

export const StoreProvider = React.createContext();

export const MyStore = ({children}) => {
    const [state, dispatch] = useReducer(productReducer, {});
    return (
        <StoreProvider.Provider value={[state,dispatch]}>
            {children}
        </StoreProvider.Provider>
    )
}