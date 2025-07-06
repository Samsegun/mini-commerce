'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import CheckoutForm from '../_components/Forms/CheckoutForm';
import ThankYou from '../_components/UI/ThankYou';
import { useAppStore } from '../_store/useStore';

function Checkout() {
    const { cart, clearCart } = useAppStore();
    const [orderId, setOrderId] = useState<string | null>(null);

    const router = useRouter();

    // if the cart is empty, redirect to the home page.
    // prevents users from accessing checkout with nothing to buy.
    useEffect(() => {
        if (cart.length === 0 && !orderId) {
            router.push('/');
        }
    }, [cart, orderId, router]);

    // thank you
    if (orderId) {
        return <ThankYou orderId={orderId} />;
    }

    // main checkout
    return (
        <div className="container mx-auto px-5 py-8 sm:px-7 lg:px-8 lg:w-[54rem]">
            <h1 className="text-2xl md:text-3xl font-bold mb-8 text-blue-600">
                Checkout
            </h1>

            <CheckoutForm
                cart={cart}
                setOrderId={setOrderId}
                clearCart={clearCart}
            />
        </div>
    );
}

export default Checkout;
