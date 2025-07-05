'use client';

import { useAppStore } from '@/app/_store/useStore';
import { ShoppingCart } from 'lucide-react';
import Link from 'next/link';

const Header = () => {
    const cart = useAppStore((state) => state.cart);

    return (
        <header className="bg-blue-600 text-white shadow-lg">
            <div className="app-maxwidth">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <h1 className="text-2xl font-bold tracking-tight">
                            <Link href={'/'}>Mini-Commerce</Link>
                        </h1>
                    </div>

                    <Link href={'/cart'}>
                        <button
                            className="relative p-2 flex gap-2 text-white hover:text-blue-200 
                    transition-colors duration-200 hover:bg-blue-700 rounded-lg"
                        >
                            <span>Cart</span>
                            <ShoppingCart size={24} />

                            {cart.length ? (
                                <span
                                    className="absolute -top-1 -right-1 bg-red-500 text-white text-xs
                         rounded-full h-5 w-5 flex items-center justify-center"
                                >
                                    {cart.length}
                                </span>
                            ) : null}
                        </button>
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
