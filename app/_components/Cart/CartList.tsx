'use client';

import { useAppStore } from '@/app/_store/useStore';
import { Minus, Plus, Trash2 } from 'lucide-react';
import Image from 'next/image';

function CartList() {
    const { cart, addToCart, removeFromCart, reduceCartItemQty } = useAppStore(
        (state) => state
    );

    return (
        <ul className="divide-y divide-gray-200">
            {cart.map((item) => (
                <li key={item.id} className="flex items-center py-6 gap-4">
                    <div className="w-24 h-24 relative flex-shrink-0">
                        <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="rounded-md object-cover"
                            loading="lazy"
                            placeholder="blur"
                            blurDataURL="https://placehold.co/96x96.png"
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
                                    onClick={() => reduceCartItemQty(item.id)}
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
                                    ${(item.price * item.quantity).toFixed(2)}
                                </p>
                                <button
                                    onClick={() => removeFromCart(item.id)}
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
    );
}

export default CartList;
