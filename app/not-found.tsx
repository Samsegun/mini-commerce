import { EyeOff, Frown } from 'lucide-react';
import Link from 'next/link';

function NotFound() {
    return (
        <div className="container mx-auto px-5 py-8 sm:px-7 lg:px-8 lg:w-[54rem]">
            <h1 className="text-2xl md:text-3xl font-bold mb-8 text-red-700">
                Not Found
            </h1>
            <div className="flex flex-col items-center justify-center min-h-[70vh] text-center">
                <EyeOff className="w-24 h-24 text-red-600" />
                <h1
                    className="mt-6 text-xl sm:text-3xl font-bold flex items-center
                 flex-col sm:flex-row gap-1 text-red-600"
                >
                    Page not found <Frown size={24} />
                </h1>

                <Link
                    href={'/'}
                    className="mt-8 px-6 py-3 text-white bg-blue-700 rounded-md hover:bg-blue-600 transition-colors"
                >
                    Continue Shoppinng
                </Link>
            </div>
        </div>
    );
}

export default NotFound;
