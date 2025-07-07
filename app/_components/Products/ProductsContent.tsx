import { ProductsContentProp } from '@/app/_lib/types';
import ErrorUI from '../UI/ErrorUI';
import Loading from '../UI/Loading';
import ProductCard from './ProductCard';

function ProductsContent({
    filteredProducts,
    isLoading,
    error,
}: ProductsContentProp) {
    if (isLoading) return <Loading />;

    if (error) return <ErrorUI message={'Error loading products'} />;

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center max-w-4xl gap-8 mx-auto">
            {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
}

export default ProductsContent;
