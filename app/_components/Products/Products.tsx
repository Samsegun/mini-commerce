'use client';

import { useState } from 'react';

import { useProducts } from '@/app/_hooks/useProducts';
import ErrorUI from '../UI/ErrorUI';
import Loading from '../UI/Loading';
import FilterButton from './FilterButton';
import ProductCard from './ProductCard';

const Categories = ['all', 'mens', 'womens'];

function Products() {
    const [activeFilter, setActiveFilter] = useState('all');
    const { data: products = [], isLoading, error } = useProducts();

    const filteredProducts =
        activeFilter === 'all'
            ? products
            : products.filter((product) => product.category === activeFilter);

    if (isLoading) return <Loading />;

    if (error) return <ErrorUI message={'Error loading products'} />;

    return (
        <>
            {/* filter buttons */}
            <div className="flex justify-center mb-12">
                <div className="flex space-x-4 bg-white p-2 rounded-full shadow-md">
                    {Categories.map((filter) => (
                        <FilterButton
                            key={filter}
                            filter={filter}
                            isActive={activeFilter === filter}
                            onClick={setActiveFilter}
                        />
                    ))}
                </div>
            </div>

            {/* products */}
            <div className="grid grid-cols-1 sm:grid-cols-2 max-w-4xl gap-8 mx-auto">
                {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </>
    );
}

export default Products;
