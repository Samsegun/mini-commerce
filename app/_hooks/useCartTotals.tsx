'use client';

import { useAppStore } from '../_store/useStore';

export const useCartTotals = () => {
    const cart = useAppStore((state) => state.cart);

    const subtotal = cart.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );

    const shippingFee = subtotal > 0 ? 5.0 : 0;
    const total = subtotal + shippingFee;

    return {
        subtotal,
        shippingFee,
        total,
        itemCount: cart.reduce((acc, item) => acc + item.quantity, 0),
        isCartEmpty: cart.length === 0,
    };
};
