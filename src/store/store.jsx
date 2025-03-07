import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userslice";
import productReducer from "./reducers/productSlice";

export const store = configureStore({
    reducer: {
        // Add the slice reducers here
        productReducer: productReducer,
        userReducer: userReducer,
    },
});
