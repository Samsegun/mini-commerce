import Image from 'next/image';

type Product = {
    product: {
        id: number;
        name: string;
        price: number;
        category: string;
        image: string;
    };
};

function ProductCard({ product }: Product) {
    return (
        <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
            <div className="overflow-hidden">
                <Image
                    src={product.image}
                    alt={product.name}
                    width={400}
                    height={300}
                />
            </div>
            <div className="p-4">
                <h3 className="font-semibold text-lg text-gray-800 mb-3">
                    {product.name}
                </h3>
                <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-blue-600">
                        ${product.price}
                    </span>
                </div>
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium">
                    Add to Cart
                </button>
            </div>
        </div>
    );
}

export default ProductCard;
