'use client';

import { Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useAppStore } from '../_store/useStore';

function CartPage() {
    const { cart, addToCart, removeFromCart, reduceCartItemQty } = useAppStore(
        (state) => state
    );

    const subtotal = cart.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );
    const shippingFee = subtotal > 0 ? 5.0 : 0;
    const total = subtotal + shippingFee;

    // if cart state is empty
    if (cart.length === 0) {
        return (
            <div className="app-maxwidth">
                <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
                    <ShoppingBag className="w-24 h-24 text-gray-300" />
                    <h1 className="mt-6 text-2xl font-semibold text-blue-600">
                        Your Cart is Empty
                    </h1>
                    <p className="mt-2 text-gray-500">
                        Looks like you haven&apos;t added anything to your cart
                        yet.
                    </p>
                    <Link
                        href="/"
                        className="mt-6 px-6 py-3 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
                    >
                        Start Shopping
                    </Link>
                </div>
            </div>
        );
    }

    // if cart is not empty
    return (
        <div className="container mx-auto px-5 py-8 sm:px-7 lg:px-8 lg:w-[52rem]">
            <h1 className="text-2xl md:text-3xl text-blue-600 font-bold mb-8">
                Shopping Cart
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* cart items list  */}
                <div className="lg:col-span-2">
                    <ul className="divide-y divide-gray-200">
                        {cart.map((item) => (
                            <li
                                key={item.id}
                                className="flex items-center py-6 gap-4"
                            >
                                <div className="w-24 h-24 relative flex-shrink-0">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        fill
                                        priority
                                        className="rounded-md object-cover"
                                    />
                                </div>
                                <div className="flex-1 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                                    <div className="">
                                        <h3 className="font-semibold text-lg">
                                            {item.name}
                                        </h3>
                                        <p className="text-gray-500">
                                            ${item.price.toFixed(2)}
                                        </p>
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-4">
                                        {/* quantity selector */}
                                        <div className="inline-flex items-center w-8/12 sm:w-auto border border-gray-300 rounded-md">
                                            <button
                                                disabled={item.quantity <= 1}
                                                onClick={() =>
                                                    reduceCartItemQty(item.id)
                                                }
                                                className="p-2 disabled:opacity-50"
                                            >
                                                <Minus size={16} />
                                            </button>
                                            <span className="px-3 text-center w-12">
                                                {item.quantity}
                                            </span>
                                            <button
                                                onClick={() => addToCart(item)}
                                                className="p-2"
                                            >
                                                <Plus size={16} />
                                            </button>
                                        </div>
                                        {/* Item Total */}
                                        <div className="flex items-center justify-between">
                                            <p className="font-semibold w-20 text-right">
                                                $
                                                {(
                                                    item.price * item.quantity
                                                ).toFixed(2)}
                                            </p>
                                            <button
                                                onClick={() =>
                                                    removeFromCart(item.id)
                                                }
                                                className="text-gray-400 hover:text-red-500 transition-colors p-2"
                                            >
                                                <Trash2 size={20} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* order summary*/}
                <div className="lg:col-span-1">
                    <div className="bg-gray-50 rounded-lg p-6 sticky top-24">
                        <h2 className="text-xl font-semibold mb-4">
                            Order Summary
                        </h2>
                        <div className="space-y-4">
                            <div className="flex justify-between">
                                <span>Subtotal</span>
                                <span>${subtotal.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Shipping</span>
                                <span>${shippingFee.toFixed(2)}</span>
                            </div>
                            <div className="border-t border-gray-200 my-4"></div>
                            <div className="flex justify-between text-lg font-bold">
                                <span>Total</span>
                                <span>${total.toFixed(2)}</span>
                            </div>
                        </div>

                        <Link href={'/checkout'}>
                            <button className="w-full mt-6 bg-blue-700 text-white py-3 rounded-md hover:bg-blue-700 transition-colors">
                                Proceed to Checkout
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        // </div>
    );
}

export default CartPage;
