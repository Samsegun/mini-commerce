import { readFileSync } from 'fs';
import { join } from 'path';
import { Product } from './types';

// i can access files using fs module since this runs on the server
export function getProducts(): Product[] {
    const filePath = join(process.cwd(), 'public', 'products.json');
    const fileContents = readFileSync(filePath, 'utf8');
    const data = JSON.parse(fileContents);

    return data.products;
}

export function getProductById(id: number): Product | undefined {
    const products = getProducts();
    return products.find((p) => p.id === id);
}
