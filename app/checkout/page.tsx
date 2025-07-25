import { Metadata } from 'next';
import CheckoutContents from '../_components/Cart/CheckoutContents';

export const metadata: Metadata = {
    title: 'Checkout',
    description: 'Checkout with shipping and payment details',
    keywords: [
        'ecommerce',
        'checkout',
        'cart',
        'shop',
        'products',
        'mini-commerce',
        'ecommerce cart',
        'online store',
    ],
};

function Checkout() {
    // main checkout page
    return (
        <div className="container mx-auto px-5 py-8 sm:px-7 lg:px-8 lg:w-[54rem]">
            <h1 className="text-2xl md:text-3xl font-bold mb-8 text-blue-600">
                Checkout
            </h1>

            <CheckoutContents />
        </div>
    );
}

export default Checkout;
