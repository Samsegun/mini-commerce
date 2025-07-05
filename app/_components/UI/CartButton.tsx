'use client';

import { ButtonProps, Product } from '@/app/_lib/types';
import { useAppStore } from '@/app/_store/useStore';
import { ShoppingCart, Trash2Icon } from 'lucide-react';

function Button({ children, ...rest }: ButtonProps) {
    return (
        <button
            className="flex items-center gap-2 justify-center rounded-md bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white
        hover:bg-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-300"
            {...rest}
        >
            {children}
        </button>
    );
}

export default function CartButton({ product }: { product: Product }) {
    const { cart, addToCart, removeFromCart } = useAppStore((state) => state);

    const productIncart = cart.find((item) => item.id === product.id);

    if (productIncart) {
        return (
            <Button
                onClick={(e) => {
                    e.preventDefault();
                    console.log('removed', product.name);

                    removeFromCart(product.id);
                }}
            >
                <Trash2Icon size={24} />
                <span>Remove from Cart</span>
            </Button>
        );
    }

    return (
        <Button
            onClick={(e) => {
                e.preventDefault();
                console.log('added', product.name);

                addToCart(product);
            }}
        >
            <ShoppingCart size={24} />
            <span>Add to Cart</span>
        </Button>
    );
}
