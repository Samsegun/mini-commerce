'use client';

import { useState } from 'react';
import FilterButton from './FilterButton';
import ProductCard from './ProductCard';

// mock data
const products = [
    {
        id: 1,
        name: 'Classic White T-Shirt',
        price: 29.99,
        category: 'Mens',
        image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
    },
    {
        id: 2,
        name: 'Floral Summer Dress',
        price: 89.99,
        category: 'Womens',
        image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=400&fit=crop',
    },
    {
        id: 3,
        name: 'Denim Jacket',
        price: 119.99,
        category: 'Mens',
        image: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=400&h=400&fit=crop',
    },
    {
        id: 4,
        name: 'Elegant Blouse',
        price: 65.99,
        category: 'Womens',
        image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=400&fit=crop',
    },
];

const Categories = ['All', 'Mens', 'Womens'];

function Products() {
    const [activeFilter, setActiveFilter] = useState('All');

    const filteredProducts =
        activeFilter === 'All'
            ? products
            : products.filter((product) => product.category === activeFilter);

    return (
        <main>
            <div className="app-maxwidth my-10 px-8">
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

                {/* empty state */}
                {filteredProducts.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-gray-500 text-lg">
                            No products found for the selected category.
                        </p>
                    </div>
                )}
            </div>
        </main>
    );
}

export default Products;
