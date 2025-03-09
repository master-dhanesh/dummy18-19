import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { asynccreateproduct } from "../store/actions/productActions";

const Create = () => {
    const dispatch = useDispatch();
    const [product, setproduct] = useState({
        title: "New Product 1",
        price: 1023,
        description: "A description is",
        categoryId: 12,
        images: ["https://placeimg.com/640/480/any"],
    });

    return (
        <div>
            <h1 className="text-5xl text-center">Create Product</h1>
            <button
                onClick={() => dispatch(asynccreateproduct(product))}
                className="py-2 px-5 bg-green-300 rounded"
            >
                Create Product Button
            </button>
        </div>
    );
};

export default Create;
