import { CheckoutFormProps } from '@/app/_lib/types';
import { FormInput, FormLabel } from '../UI/Forms';

function PaymentDetails({ register, errors }: CheckoutFormProps) {
    return (
        <section>
            <h2 className="text-xl font-semibold mb-4">Payment Details</h2>
            <div className="p-6 border rounded-lg bg-white shadow-sm">
                <div className="space-y-4">
                    <div>
                        <FormLabel htmlFor="fullName">Full Name</FormLabel>
                        <FormInput
                            id="fullName"
                            type="text"
                            placeholder="Sam Segun"
                            {...register('fullName', {
                                required: 'Full Name is required',
                            })}
                        />
                        {errors.fullName && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.fullName.message}
                            </p>
                        )}
                    </div>

                    <div>
                        <FormLabel htmlFor="email">Email Address</FormLabel>
                        <FormInput
                            id="email"
                            type="email"
                            placeholder="abc@mail.com"
                            {...register('email', {
                                required: 'Email is required',
                            })}
                        />
                    </div>

                    <div>
                        <FormLabel htmlFor="card-number">
                            Card Information
                        </FormLabel>
                        <FormInput
                            id="card-number"
                            type="text"
                            placeholder="Card Number"
                            {...register('cardNumber', {
                                required: 'Card Number is required',
                            })}
                        />
                        <div className="flex gap-4 mt-4">
                            <FormInput
                                type="text"
                                placeholder="MM / YY"
                                {...register('expiryDate', {
                                    required: 'Expiry Date is required',
                                })}
                            />
                            <FormInput
                                type="text"
                                placeholder="CVC"
                                {...register('cvc', {
                                    required: 'CVC is required',
                                })}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PaymentDetails;
