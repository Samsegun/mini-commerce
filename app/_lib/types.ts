export type Product = {
    id: number;
    name: string;
    price: number;
    category: string;
    image: string;
};

export type ProductCardProps = {
    product: Product;
    // onAddToCart: (product: Product) => void;
};

export type CartItem = {
    id: number;
    name: string;
    price: number;
    image: string;
    quantity: number;
};

export interface AppState {
    cart: CartItem[];
    addToCart: (item: Omit<CartItem, 'quantity'>) => void;
    removeFromCart: (id: number) => void;
    clearCart: () => void;
}

export type ButtonProps = {
    label: string;
} & React.ComponentProps<'button'>;
