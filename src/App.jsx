import { useDispatch, useSelector } from "react-redux";
import { deleteProduct } from "./store/reducers/productslice";

const App = () => {
    const dispatch = useDispatch();
    const { products } = useSelector((state) => state.productReducer);
    console.log(products);

    const DeleteHandler = (index) => {
        // console.log("Delete -> ", index);
        dispatch(deleteProduct(index)); // -> dispatch(actions())
    };

    return (
        <div className="text-5xl">
            {products.map((product, index) => (
                <div key={product.id}>
                    <h1 onClick={() => DeleteHandler(index)}>
                        {product.title}
                    </h1>
                </div>
            ))}
        </div>
    );
};

export default App;
