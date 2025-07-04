import { useQuery } from '@tanstack/react-query';
import { Product } from '../_lib/types';

// to be used on the client
export const fetchProducts = async (): Promise<Product[]> => {
    const products = localStorage.getItem('products');

    // check if products is already in localStprage and return it
    if (products) {
        console.log('fetching from storage');
        return JSON.parse(products);
    }

    //   if not fetch from public folder and store in localStorage
    const response = await fetch('./products.json');
    if (!response.ok) {
        throw new Error('Failed to fetch products');
    }

    const data = await response.json();
    localStorage.setItem('products', JSON.stringify(data.products));
    return data.products;
};

export const useProducts = () => {
    return useQuery<Product[]>({
        queryKey: ['products'],
        queryFn: fetchProducts,
        staleTime: Infinity, // i chose infinity because assets are static
    });
};
