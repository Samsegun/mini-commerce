import { ProductCardProps } from '@/app/_lib/types';
// import { ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import CartButton from '../UI/CartButton';

function ProductCard({ product }: ProductCardProps) {
    return (
        <div className="relative flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-lg max-h-[500px] transition-transform duration-300 ease-in-out hover:scale-105">
            <Link href={`/product/${product.id}`}>
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
                                ${product.price.toFixed(2)}
                            </span>
                        </p>
                    </div>

                    {/* spacer to push the button to the bottom */}
                    <div className="flex-grow" />

                    <CartButton product={product} />
                </div>
            </Link>
        </div>
    );
}

export default ProductCard;
