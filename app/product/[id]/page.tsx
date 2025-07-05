import CartButton from '@/app/_components/UI/CartButton';
import { getProductById, getProducts } from '@/app/_lib/data-service';
// import { Minus, Plus, ShoppingCart } from 'lucide-react';
import Image from 'next/image';

export async function generateStaticParams() {
    const products = getProducts();
    return products.map((product) => ({
        id: product.id.toString(),
    }));
}

async function ProductDetailPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const product = getProductById(parseInt(id));
    if (!product) {
        return <div>Product not found.</div>;
    }

    return (
        <div className="app-maxwidth">
            <div className="flex justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className=" w-full rounded-lg shadow-xl overflow-hidden md:flex">
                    <div className="md:flex-shrink-0 md:w-1/2 p-6 flex items-center justify-center relative">
                        <Image
                            src={product.image}
                            alt={`an image of ${product.name}`}
                            width={600}
                            height={400}
                            className="rounded-lg shadow-md"
                            priority={true}
                        />
                    </div>

                    <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-between">
                        <div>
                            <h1 className="text-2xl lg:text-3xl font-extrabold text-blue-600 capitalize">
                                {product.name}
                            </h1>

                            <div className="my-4 space-y-3">
                                <div className="flex justify-between">
                                    <span className="text-gray-600">
                                        Product ID:
                                    </span>
                                    <span className="font-medium">
                                        {product.id}
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">
                                        Product Category:
                                    </span>
                                    <span className="font-medium capitalize">
                                        {product.category}
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">
                                        Price:
                                    </span>
                                    <span className="font-medium">
                                        ${product.price.toLocaleString()}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <CartButton product={product} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetailPage;
