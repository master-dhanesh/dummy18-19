import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <div className="my-10  flex justify-center gap-10 text-2xl">
            <Link to="/">Home</Link>
            <Link to="/createproduct">Create</Link>
        </div>
    );
};

export default Navigation;
