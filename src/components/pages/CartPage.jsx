import { useState } from "react";
import { Trash2, Plus, Minus } from "lucide-react";

export default function CartPage() {
    const [cart, setCart] = useState([
        { id: 1, name: "Wireless Headphones", price: 120, qty: 1, img: "https://via.placeholder.com/80" },
        { id: 2, name: "Smart Watch", price: 90, qty: 2, img: "https://via.placeholder.com/80" },
    ]);

    const updateQty = (id, type) => {
        setCart((prev) =>
            prev.map((item) =>
                item.id === id
                    ? {
                        ...item,
                        qty: type === "inc" ? item.qty + 1 : Math.max(1, item.qty - 1),
                    }
                    : item
            )
        );
    };

    const removeItem = (id) => {
        setCart((prev) => prev.filter((item) => item.id !== id));
    };

    const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <h1 className="text-2xl font-semibold mb-6">Your Cart</h1>
            <div className="grid lg:grid-cols-3 gap-6">
                {/* Cart Items */}
                <div className="lg:col-span-2 space-y-4">
                    {cart.map((item) => (
                        <div
                            key={item.id}
                            className="flex items-center justify-between bg-white p-4 rounded-2xl shadow-sm"
                        >
                            <div className="flex items-center gap-4">
                                <img
                                    src={item.img}
                                    alt={item.name}
                                    className="w-20 h-20 object-cover rounded-xl"
                                />
                                <div>
                                    <h2 className="text-lg font-medium">{item.name}</h2>
                                    <p className="text-gray-500">${item.price}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <button
                                    onClick={() => updateQty(item.id, "dec")}
                                    className="p-1 border rounded-lg"
                                >
                                    <Minus size={16} />
                                </button>
                                <span className="px-3">{item.qty}</span>
                                <button
                                    onClick={() => updateQty(item.id, "inc")}
                                    className="p-1 border rounded-lg"
                                >
                                    <Plus size={16} />
                                </button>
                                <button
                                    onClick={() => removeItem(item.id)}
                                    className="ml-4 text-red-500 hover:text-red-700"
                                >
                                    <Trash2 size={18} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Summary */}
                <div className="bg-white p-6 rounded-2xl shadow-md">
                    <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
                    <div className="flex justify-between text-gray-600 mb-2">
                        <span>Subtotal</span>
                        <span>${subtotal}</span>
                    </div>
                    <div className="flex justify-between text-gray-600 mb-4">
                        <span>Shipping</span>
                        <span>$10</span>
                    </div>
                    <hr className="my-2" />
                    <div className="flex justify-between font-semibold text-lg">
                        <span>Total</span>
                        <span>${subtotal + 10}</span>
                    </div>
                    <button className="w-full mt-6 bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition">
                        Proceed to Checkout
                    </button>
                </div>
            </div>
        </div>
    );
}
