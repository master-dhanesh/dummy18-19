import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./reducers/productSlice";

export const store = configureStore({
    reducer: {
        products: ProductSlice,
    },
});
