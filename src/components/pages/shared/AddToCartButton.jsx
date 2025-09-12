import axios from "axios";
import useAuth from "../../../hooks/useAuth"

const AddToCartButton = ({ product }) => {
    const { user } = useAuth();
    const email = user?.email;

    const handleAddToCart = async () => {
        if (!email) {
            alert("Please log in to add items to your cart.");
        }
        try {
            await axios.post("http://localhost:5000/products/cart", {
                email,
                product,
            });
            alert(`${product.name} added to cart`);

        } catch (err) {
            console.error(err);
            alert("Error adding to cart");
        }
    };

    return (
        <div>
            <button
                onClick={handleAddToCart}
                className="px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >Add To Cart</button>
        </div>
    )
}

export default AddToCartButton