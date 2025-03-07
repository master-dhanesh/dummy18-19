import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [
        {
            id: 1,
            title: "Product 1",
            price: 100,
            description: "This is product 1",
            image: "https://via.placeholder.com/150",
        },
        {
            id: 2,
            title: "Product 2",
            price: 200,
            description: "This is product 2",
            image: "https://via.placeholder.com/150",
        },
        {
            id: 3,
            title: "Product 3",
            price: 300,
            description: "This is product 3",
            image: "https://via.placeholder.com/150",
        },
    ],
};

const ProductSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        deleteProduct: (state, action) => {
            state.products = state.products.filter(
                (product, index) => index !== action.payload
            );
        },
    },
});

export default ProductSlice.reducer;
export const { deleteProduct } = ProductSlice.actions;
