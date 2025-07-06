'use client';

import Link from 'next/link';
import CartList from '../_components/Cart/CartList';
import EmptyCart from '../_components/UI/EmptyCart';
import { useCartTotals } from '../_hooks/useCartTotals';

function CartPage() {
    const { subtotal, shippingFee, total, isCartEmpty } = useCartTotals();

    // if cart state is empty
    if (isCartEmpty) {
        return <EmptyCart />;
    }

    // if cart is not empty
    return (
        <div className="container mx-auto px-5 py-8 sm:px-7 lg:px-8 lg:w-[52rem]">
            <h1 className="text-2xl md:text-3xl text-blue-600 font-bold mb-8">
                Shopping Cart
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* cart items list  */}
                <section className="lg:col-span-2">
                    <CartList />
                </section>

                {/* order summary*/}
                <section className="lg:col-span-1">
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
                </section>
            </div>
        </div>
    );
}

export default CartPage;
