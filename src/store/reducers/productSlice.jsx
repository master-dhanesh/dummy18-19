import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    data: [],
};

const ProductSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        addproducts: (state, action) => {
            state.data = action.payload;
        },
    },
});

export default ProductSlice.reducer;
export const { addproducts } = ProductSlice.actions;

export const asyncaddproducts = () => async (dispatch, getState) => {
    const { data } = await axios.get("https://fakestoreapi.com/products");
    dispatch(addproducts(data));
};
