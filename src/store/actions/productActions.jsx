import axios from "../../utils/axiosconfig";
import { setProducts } from "../reducers/productSlice";

export const asyncgetproducts = () => async (dispatch, getState) => {
    try {
        const { data } = await axios.get("/");
        dispatch(setProducts(data));
    } catch (error) {
        console.log(error);
    }
};

export const asynccreateproduct = (product) => async (dispatch, getState) => {
    try {
        const response = await axios.post("/", product);
        console.log(response);
        dispatch(asyncgetproducts());
    } catch (error) {
        console.log(error);
    }
};
