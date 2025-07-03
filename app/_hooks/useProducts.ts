import { useQuery } from '@tanstack/react-query';

type Product = {
    id: number;
    name: string;
    price: number;
    category: string;
    image: string;
};

const fetchProducts = async (): Promise<Product[]> => {
    const response = await fetch('./products.json');
    if (!response.ok) {
        throw new Error('Failed to fetch products');
    }
    const data = await response.json();

    // Seed to localStorage
    localStorage.setItem('products', JSON.stringify(data.products));

    return data.products;
};

export const useProducts = () => {
    return useQuery<Product[]>({
        queryKey: ['products'],
        queryFn: fetchProducts,
        staleTime: Infinity, // infinity because assets are static
    });
};
