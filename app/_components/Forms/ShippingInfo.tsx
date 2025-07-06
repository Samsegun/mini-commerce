import { CheckoutFormProps } from '@/app/_lib/types';
import { FormInput, FormLabel } from '../UI/Forms';

function ShippingInfo({ register, errors }: CheckoutFormProps) {
    return (
        <section>
            <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
            <div className="p-6 border rounded-lg bg-white shadow-sm">
                <div className="space-y-4">
                    <div>
                        <FormLabel htmlFor="address">Address</FormLabel>
                        <FormInput
                            id="address"
                            type="text"
                            placeholder="1234 Lagos st"
                            {...register('address', {
                                required: 'Address is required',
                            })}
                        />
                        {errors.address && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.address.message}
                            </p>
                        )}
                    </div>
                    <div>
                        <FormLabel htmlFor="city">City</FormLabel>
                        <FormInput
                            id="city"
                            type="text"
                            placeholder="Lagos"
                            {...register('city', {
                                required: 'City is required',
                            })}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ShippingInfo;
