'use client';

import { useState } from 'react';

import { useProducts } from '@/app/_hooks/useProducts';
import FilterButton from './FilterButton';
import ProductsContent from './ProductsContent';

const Categories = ['all', 'mens', 'womens'];

function Products() {
    const [activeFilter, setActiveFilter] = useState('all');
    const { data: products = [], isLoading, error } = useProducts();

    const filteredProducts =
        activeFilter === 'all'
            ? products
            : products.filter((product) => product.category === activeFilter);

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
            <ProductsContent
                filteredProducts={filteredProducts}
                isLoading={isLoading}
                error={error}
            />
        </>
    );
}

export default Products;
