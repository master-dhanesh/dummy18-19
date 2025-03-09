import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import Details from "./components/Details";
import Create from "./components/Create";
import Update from "./components/Update";
import { useDispatch } from "react-redux";
import { asyncgetproducts } from "./store/actions/productActions";

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(asyncgetproducts());
    }, []);

    return (
        <div className="my-5 w-[80%] m-auto">
            <Navigation />
            <Routes>
                <Route path="/" element={<Products />}>
                    <Route path="/detail/:id" element={<Details />} />
                </Route>
                <Route path="/createproduct" element={<Create />} />
                <Route path="/updateproduct/:id" element={<Update />} />
            </Routes>
        </div>
    );
};

export default App;
