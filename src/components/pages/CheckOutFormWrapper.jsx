import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
    Elements,
    PaymentElement,
    useStripe,
    useElements,
} from "@stripe/react-stripe-js";
import axios from "axios";

// Your Stripe publishable key
const stripePromise = loadStripe(
    "pk_test_51S5nG2EPkiGkY9aR6xsBXFVVpx2SyQX2M4403YGZsh3lkBFhRLks09g6zWTmlqKeoSIhPMTRZVce7JYuHaXFsjgX00tA7wYBi1"
);

const CheckoutFormWrapper = ({ price }) => {
    const [clientSecret, setClientSecret] = useState("");

    useEffect(() => {
        axios
            .post("https://closet-vogue-server.vercel.app/create-payment-intent", { price })
            .then((res) => {

                setClientSecret(res.data.clientSecret);
            })
            .catch((err) => console.error(err));
    }, [price]);

    if (!clientSecret) return <div>Loading payment form...</div>;

    return (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
            <CheckoutForm />
        </Elements>
    );
};

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [isReady, setIsReady] = useState(false);


    useEffect(() => {
        if (elements?.getElement(PaymentElement)) {
            setIsReady(true);
        }
    }, [elements]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements || !isReady) {
            alert("Payment form is not ready yet.");
            return;
        }

        const { error, paymentIntent } = await stripe.confirmPayment({
            elements,
            confirmParams: {
                return_url: "http://localhost:3000/success",
            },
            redirect: "if_required",
        });

        if (error) {
            alert(error.message);
        } else if (paymentIntent && paymentIntent.status === "succeeded") {
            alert("Payment successful 🎉");
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-md mx-auto mt-8 p-4 border rounded-lg"
        >
            <PaymentElement
                onReady={() => {
                    setIsReady(true); // PaymentElement is mounted
                }}
            />
            <button
                type="submit"
                disabled={!stripe || !isReady}
                className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg"
            >
                Pay Now
            </button>
        </form>
    );
};

export default CheckoutFormWrapper;
