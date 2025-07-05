'use client';

import { CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FormInput, FormLabel } from '../_components/UI/Forms';
import { useAppStore } from '../_store/useStore';

function Checkout() {
    const { cart, clearCart } = useAppStore();
    const router = useRouter();

    const [orderId, setOrderId] = useState<string | null>(null);

    const subtotal = cart.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );
    const shippingFee = 5.0;
    const total = subtotal + shippingFee;

    // if the cart is empty, redirect to the home page.
    // prevents users from accessing checkout with nothing to buy.
    useEffect(() => {
        if (cart.length === 0 && !orderId) {
            router.push('/');
        }
    }, [cart, orderId, router]);

    const handlePlaceOrder = () => {
        // generate a random order ID
        const newOrderId = `MC-${Math.random()
            .toString(36)
            .substring(2, 11)
            .toUpperCase()}`;

        // clear cart
        clearCart();

        // set  local state to show the "Thank You" message
        setOrderId(newOrderId);
    };

    // thank you
    if (orderId) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[70vh] text-center">
                <CheckCircle2 className="w-24 h-24 text-green-500" />
                <h1 className="mt-6 text-3xl font-bold text-gray-800">
                    Thank You For Your Order!
                </h1>
                <p className="mt-3 text-gray-600">
                    Your order has been placed successfully.
                </p>
                <p className="mt-2 text-lg text-gray-800">
                    Your Order ID is:{' '}
                    <span className="font-semibold text-slate-800">
                        {orderId}
                    </span>
                </p>
                <Link
                    href="/"
                    className="mt-8 px-6 py-3 text-white bg-slate-800 rounded-md hover:bg-slate-700 transition-colors"
                >
                    Continue Shopping
                </Link>
            </div>
        );
    }

    // main checkout
    return (
        <div className="container mx-auto px-5 py-8 sm:px-7 lg:px-8 lg:w-[54rem]">
            <h1 className="text-2xl md:text-3xl font-bold mb-8 text-blue-600">
                Checkout
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* shipping and payment info */}
                <div className="space-y-8">
                    {/* shipping info */}
                    <div>
                        <h2 className="text-xl font-semibold mb-4">
                            Shipping Information
                        </h2>
                        <div className="p-6 border rounded-lg bg-white shadow-sm">
                            <form className="space-y-4">
                                <div>
                                    <FormLabel htmlFor="address">
                                        Address
                                    </FormLabel>
                                    <FormInput
                                        id="address"
                                        name="address"
                                        type="text"
                                        placeholder="1234 Main St"
                                        required
                                    />
                                </div>
                                <div>
                                    <FormLabel htmlFor="city">City</FormLabel>
                                    <FormInput
                                        id="city"
                                        name="city"
                                        type="text"
                                        placeholder="San Francisco"
                                    />
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* payment details */}
                    <div>
                        <h2 className="text-xl font-semibold mb-4">
                            Payment Details
                        </h2>
                        <div className="p-6 border rounded-lg bg-white shadow-sm">
                            <form className="space-y-4">
                                <div>
                                    <FormLabel htmlFor="email">
                                        Email Address
                                    </FormLabel>
                                    <FormInput
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="abc@mail.com"
                                    />
                                </div>
                                <div>
                                    <FormLabel htmlFor="fullName">
                                        Full Name
                                    </FormLabel>
                                    <FormInput
                                        id="fullName"
                                        name="fullName"
                                        type="text"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <FormLabel htmlFor="card-number">
                                        Card Information
                                    </FormLabel>
                                    <FormInput
                                        id="card-number"
                                        name="card-number"
                                        type="text"
                                        placeholder="Card Number"
                                    />
                                    <div className="flex gap-4 mt-4">
                                        <FormInput
                                            name="expiry-date"
                                            type="text"
                                            placeholder="MM / YY"
                                        />
                                        <FormInput
                                            name="cvc"
                                            type="text"
                                            placeholder="CVC"
                                        />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                {/* order summary */}
                <div>
                    <div className="bg-gray-50 rounded-lg p-6 lg:pt-0">
                        <h2 className="text-xl font-semibold mb-4">Summary</h2>
                        <ul className="divide-y divide-gray-200 mb-4">
                            {cart.map((item) => (
                                <li
                                    key={item.id}
                                    className="flex justify-between py-3"
                                >
                                    <span className="text-gray-600">
                                        {item.name}{' '}
                                        <span className="text-gray-500">
                                            x {item.quantity}
                                        </span>
                                    </span>
                                    <span className="font-medium">
                                        $
                                        {(item.price * item.quantity).toFixed(
                                            2
                                        )}
                                    </span>
                                </li>
                            ))}
                        </ul>
                        <div className="border-t border-gray-200 pt-4 space-y-2">
                            <div className="flex justify-between">
                                <span>Subtotal</span>
                                <span className="font-medium">
                                    ${subtotal.toFixed(2)}
                                </span>
                            </div>
                            <div className="flex justify-between text-gray-600">
                                <span>Shipping</span>
                                <span>${shippingFee.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-lg font-bold pt-2 mt-2 border-t text-blue-600">
                                <span>Total</span>
                                <span>${total.toFixed(2)}</span>
                            </div>
                        </div>
                        <button
                            onClick={handlePlaceOrder}
                            className="w-full mt-6 bg-blue-700 text-white py-3 rounded-md font-semibold
                             hover:bg-blue-600 transition-colors disabled:bg-gray-400"
                            disabled={cart.length === 0}
                        >
                            Place Order
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Checkout;
