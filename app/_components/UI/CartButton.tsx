'use client';

import { ButtonProps, Product } from '@/app/_lib/types';
import { useAppStore } from '@/app/_store/useStore';
import { ShoppingCart } from 'lucide-react';

function Button({ label, ...rest }: ButtonProps) {
    return (
        <button
            className="flex items-center gap-2 justify-center rounded-md bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white
        hover:bg-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-300"
            {...rest}
        >
            <ShoppingCart size={24} />
            {label}
        </button>
    );
}

export default function CartButton({ product }: { product: Product }) {
    const { cart } = useAppStore((state) => state);

    const productIncart = cart.find((item) => item.id === product.id);

    return (
        <Button
            label={productIncart ? 'Remove from Cart' : 'Add to Cart'}
            onClick={(e) => {
                e.preventDefault();
                console.log(product);
            }}
        />
    );
}
