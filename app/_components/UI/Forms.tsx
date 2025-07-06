import { forwardRef } from 'react';

export const FormLabel = ({
    htmlFor,
    children,
}: {
    htmlFor: string;
    children: React.ReactNode;
}) => (
    <label
        htmlFor={htmlFor}
        className="block text-sm font-medium text-gray-700 mb-1"
    >
        {children}
    </label>
);

export const FormInput = forwardRef<
    HTMLInputElement,
    React.ComponentProps<'input'>
>((props, ref) => (
    <input
        {...props}
        ref={ref}
        className="block w-full mt-2 rounded-md border-gray-700  
        shadow-sm focus:border-slate-500 focus:ring-slate-500 sm:text-sm p-2.5 bg-white"
    />
));

FormInput.displayName = 'FormInput';
