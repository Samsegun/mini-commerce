import { Product } from '@/app/_lib/types';
import { ShoppingCart } from 'lucide-react';
import Image from 'next/image';

function ProductCard({ product }: { product: Product }) {
    return (
        <div className="relative flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-lg max-h-[500px] transition-transform duration-300 ease-in-out hover:scale-105">
            <div className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl">
                <Image
                    src={product.image}
                    alt={`an image of ${product.name}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>

            <div className="mt-4 px-5 pb-5 flex flex-col flex-grow">
                <h3 className="text-xl font-bold tracking-tight text-blue-600 truncate">
                    {product.name}
                </h3>

                <div className="mt-2 mb-5 flex items-center justify-between">
                    <p>
                        <span className="text-2xl font-bold text-blue-600">
                            {product.price.toFixed(2)}
                        </span>
                    </p>
                </div>

                {/* spacer to push the button to the bottom */}
                <div className="flex-grow" />

                <button
                    // onClick={onAddToCart}
                    className="flex items-center gap-2 justify-center rounded-md bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white
                     hover:bg-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-300"
                >
                    <ShoppingCart size={24} />
                    <span>Add to cart</span>
                </button>
            </div>
        </div>
    );
}

export default ProductCard;
