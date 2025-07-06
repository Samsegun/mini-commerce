'use client';

import { useCartTotals } from '@/app/_hooks/useCartTotals';
import { useAppStore } from '@/app/_store/useStore';
import Link from 'next/link';
import EmptyCart from '../UI/EmptyCart';
import Loading from '../UI/Loading';
import CartList from './CartList';

function CartContents() {
    const { subtotal, shippingFee, total, isCartEmpty } = useCartTotals();
    const hasHydrated = useAppStore((state) => state.hasHydrated);

    if (!hasHydrated) {
        return <Loading />;
    }

    // if cart state is empty
    if (isCartEmpty) {
        return <EmptyCart />;
    }

    return (
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
    );
}

export default CartContents;
