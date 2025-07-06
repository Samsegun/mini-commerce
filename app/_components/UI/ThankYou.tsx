import { CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

function ThankYou({ orderId }: { orderId: string | null }) {
    return (
        <div className="flex flex-col items-center justify-center min-h-[70vh] text-center">
            <CheckCircle2 className="w-24 h-24 text-green-500" />
            <h1 className="mt-6 text-3xl font-bold text-gray-800">
                Thank You For Your Order!
            </h1>
            <p className="mt-3 text-gray-600">
                Your order has been placed successfully.
            </p>
            <p className="mt-2 text-lg text-gray-800">
                Your Order ID is:{' '}
                <span className="font-semibold text-slate-800">{orderId}</span>
            </p>
            <Link
                href="/"
                className="mt-8 px-6 py-3 text-white bg-blue-700 rounded-md hover:bg-blue-600 transition-colors"
            >
                Continue Shopping
            </Link>
        </div>
    );
}

export default ThankYou;
