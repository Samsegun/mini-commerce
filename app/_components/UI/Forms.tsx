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

export const FormInput = (props: React.ComponentProps<'input'>) => (
    <input
        {...props}
        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-slate-500 focus:ring-slate-500 sm:text-sm p-2.5 bg-white"
    />
);
