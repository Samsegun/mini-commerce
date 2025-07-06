'use client';

import { useAppStore } from '@/app/_store/useStore';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import CheckoutForm from '../Forms/CheckoutForm';
import Loading from '../UI/Loading';
import ThankYou from '../UI/ThankYou';

function CheckoutContents() {
    const { cart, clearCart, hasHydrated } = useAppStore();
    const [orderId, setOrderId] = useState<string | null>(null);
    const router = useRouter();

    useEffect(() => {
        if (hasHydrated && cart.length === 0 && !orderId) {
            router.push('/');
        }
    }, [hasHydrated, cart.length, orderId, router]);

    if (!hasHydrated) {
        return <Loading />;
    }

    if (orderId) {
        return <ThankYou orderId={orderId} />;
    }

    if (cart.length === 0) {
        return (
            <h2 className="font-bold text-xl text-blue-600 text-center italic">
                Redirecting to home...
            </h2>
        );
    }

    return (
        <CheckoutForm
            cart={cart}
            setOrderId={setOrderId}
            clearCart={clearCart}
        />
    );
}

export default CheckoutContents;
