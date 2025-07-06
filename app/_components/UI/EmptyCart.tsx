import { ShoppingBag } from 'lucide-react';
import Link from 'next/link';

function EmptyCart() {
    return (
        <div className="app-maxwidth">
            <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
                <ShoppingBag className="w-24 h-24 text-gray-300" />
                <h1 className="mt-6 text-2xl font-semibold text-blue-600">
                    Your Cart is Empty
                </h1>
                <p className="mt-2 text-gray-500">
                    Looks like you haven&apos;t added anything to your cart yet.
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

export default EmptyCart;
