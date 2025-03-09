import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Products = () => {
    const { data: products } = useSelector((state) => state.products);
    return (
        <div>
            <h1 className="text-5xl text-center">All Product</h1>
            <div className="grid grid-cols-3 gap-4">
                {products.length != 0 ? (
                    products.map((product) => (
                        <Link
                            to={`/update/${product.id}`}
                            key={product.id}
                            className="bg-gray-100 p-4"
                        >
                            <img src={product.images[0]} alt={product.title} />
                            <h2 className="text-xl font-bold">
                                {product.title}
                            </h2>
                            <p className="text-sm">{product.description}</p>
                            <p className="text-xl font-bold">
                                ${product.price}
                            </p>
                        </Link>
                    ))
                ) : (
                    <h1 className="text-2xl text-red-300">No Product Found</h1>
                )}
            </div>
        </div>
    );
};

export default Products;
