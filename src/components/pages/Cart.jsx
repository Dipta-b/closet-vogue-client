import React, { useEffect, useState } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import { Trash2, Plus, Minus } from "lucide-react";
import CheckoutFormWrapper from "./CheckOutFormWrapper";
const Cart = () => {
    const { user } = useAuth();
    const userEmail = user?.email;
    const [cart, setCart] = useState([]);

    // Fetch cart items
    useEffect(() => {
        if (!userEmail) return;

        axios
            .get(`http://localhost:5000/products/cart?email=${userEmail}`)
            .then((res) => {
                const dataWithQty = res.data.map((item) => ({
                    ...item,
                    quantity: item.quantity || 1,
                }));
                setCart(dataWithQty);
            })
            .catch((err) => console.log(err.message));
    }, [userEmail]);

    // Update quantity
    const updateQuantity = (id, newQty) => {
        if (newQty < 1) return;

        axios
            .patch(`http://localhost:5000/products/cart/${id}`, { qty: newQty })
            .then(() => {
                setCart((prev) =>
                    prev.map((item) =>
                        item._id === id ? { ...item, quantity: newQty } : item
                    )
                );
            })
            .catch((err) => console.log(err.message));
    };

    // Remove item
    const removeItem = (id) => {
        axios
            .delete(`http://localhost:5000/products/cart/${id}`)
            .then(() => {
                setCart((prev) => prev.filter((item) => item._id !== id));
            })
            .catch((err) => console.log(err.message));
    };

    // Calculate subtotal
    const subtotal = cart.reduce(
        (total, item) => total + item.product.price * item.quantity,
        0
    );

    // Show empty cart message
    if (cart.length === 0)
        return <div className="p-8 text-center">Your cart is empty</div>;

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg p-4">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th className="px-16 py-3"><span className="sr-only">Image</span></th>
                        <th className="px-6 py-3">Product</th>
                        <th className="px-6 py-3">Qty</th>
                        <th className="px-6 py-3">Price</th>
                        <th className="px-6 py-3">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((item) => (
                        <tr key={item._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td className="p-4">
                                <img
                                    src={item.product.imageUrl || "/placeholder.png"}
                                    className="w-16 md:w-32 max-w-full max-h-full"
                                    alt={item.product.name}
                                />
                            </td>
                            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                {item.product.name}
                            </td>
                            <td className="px-6 py-4">
                                <div className="flex items-center">
                                    <button
                                        onClick={() => updateQuantity(item._id, item.quantity - 1)}
                                        className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full hover:bg-gray-100"
                                    >
                                        <Minus size={12} />
                                    </button>
                                    <input
                                        type="number"
                                        value={item.quantity}
                                        onChange={(e) => updateQuantity(item._id, parseInt(e.target.value))}
                                        className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg px-2.5 py-1"
                                    />
                                    <button
                                        onClick={() => updateQuantity(item._id, item.quantity + 1)}
                                        className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full hover:bg-gray-100"
                                    >
                                        <Plus size={12} />
                                    </button>
                                </div>
                            </td>
                            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                ${(item.product.price * item.quantity).toFixed(2)}
                            </td>
                            <td className="px-6 py-4">
                                <button
                                    className="font-medium text-red-600 hover:underline"
                                    onClick={() => removeItem(item._id)}
                                >
                                    <Trash2 size={16} />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Subtotal & Checkout */}
            <div className="mt-6 flex justify-end">
                <div className="w-full  bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                    <div className="flex justify-between mb-3">
                        <span className="text-gray-700 dark:text-gray-300 font-medium">Subtotal</span>
                        <span className="text-gray-900 dark:text-white font-bold">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="border-t border-gray-200 dark:border-gray-700 my-3"></div>
                    <h2 className="font-semibold mb-3">Checkout</h2>

                    {/* Stripe Payment */}
                    <CheckoutFormWrapper price={subtotal} />
                </div>
            </div>
        </div>
    );
};

export default Cart;
