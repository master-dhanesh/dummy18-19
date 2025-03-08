import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncaddproducts } from "./store/reducers/productslice";

const App = () => {
    const dispatch = useDispatch();
    const { data: products } = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(asyncaddproducts());
    }, []);

    return (
        <div className="mt-10 m-auto w-[80%]">
            <h1 className="text-4xl text-center">Redux Toolkit</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="bg-gray-100 p-4 rounded-lg"
                    >
                        <img
                            src={product.image}
                            alt={product.title}
                            className="w-full h-40 object-cover"
                        />
                        <h2 className="text-xl font-semibold mt-2">
                            {product.title}
                        </h2>
                        <p className="text-gray-500 mt-2">
                            {product.description}
                        </p>
                        <p className="text-xl font-semibold mt-2">
                            ${product.price}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default App;
