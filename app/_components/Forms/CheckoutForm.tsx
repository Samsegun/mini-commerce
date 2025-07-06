'use client';

import { useCartTotals } from '@/app/_hooks/useCartTotals';
import { FormValues, MainCheckoutProps } from '@/app/_lib/types';
import { SubmitHandler, useForm } from 'react-hook-form';
import PaymentDetails from './PaymentDetails';
import ShippingInfo from './ShippingInfo';

function CheckoutForm({ cart, setOrderId, clearCart }: MainCheckoutProps) {
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm<FormValues>({
        mode: 'onChange',
    });
    const { subtotal, shippingFee, total } = useCartTotals();

    const handlePlaceOrder = () => {
        // generate a random order ID
        const newOrderId = `MC-${Math.random()
            .toString(36)
            .substring(2, 11)
            .toUpperCase()}`;

        // clear cart
        clearCart();

        // set  local state to show the "Thank You" message
        setOrderId(newOrderId);
    };

    // this will only run if validation passes
    const onSubmit: SubmitHandler<FormValues> = (data) => {
        console.log('Submitting order:', data);
        handlePlaceOrder();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* shipping and payment info */}
                <div className="space-y-8">
                    {/* shipping info */}
                    <ShippingInfo register={register} errors={errors} />

                    {/* payment details */}
                    <PaymentDetails register={register} errors={errors} />
                </div>

                {/* order summary */}
                <section>
                    <div className="bg-gray-50 rounded-lg p-6 lg:pt-0">
                        <h2 className="text-xl font-semibold mb-4">Summary</h2>
                        <ul className="divide-y divide-gray-200 mb-4">
                            {cart.map((item) => (
                                <li
                                    key={item.id}
                                    className="flex justify-between py-3"
                                >
                                    <span className="text-gray-600">
                                        {item.name}{' '}
                                        <span className="text-gray-500">
                                            x {item.quantity}
                                        </span>
                                    </span>
                                    <span className="font-medium">
                                        $
                                        {(item.price * item.quantity).toFixed(
                                            2
                                        )}
                                    </span>
                                </li>
                            ))}
                        </ul>
                        <div className="border-t border-gray-200 pt-4 space-y-2">
                            <div className="flex justify-between">
                                <span>Subtotal</span>
                                <span className="font-medium">
                                    ${subtotal.toFixed(2)}
                                </span>
                            </div>
                            <div className="flex justify-between text-gray-600">
                                <span>Shipping</span>
                                <span>${shippingFee.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-lg font-bold pt-2 mt-2 border-t text-blue-600">
                                <span>Total</span>
                                <span>${total.toFixed(2)}</span>
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="w-full mt-6 bg-blue-700 text-white py-3 rounded-md font-semibold
                                     hover:bg-blue-600 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                            disabled={!isValid}
                        >
                            Place Order
                        </button>
                    </div>
                </section>
            </div>
        </form>
    );
}

export default CheckoutForm;
