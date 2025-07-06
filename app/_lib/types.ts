import React, { Dispatch, ReactNode, SetStateAction } from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';

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
    hasHydrated: boolean;
    setHasHydrated: (state: boolean) => void;
    addToCart: (item: Omit<CartItem, 'quantity'>) => void;
    removeFromCart: (id: number) => void;
    reduceCartItemQty: (id: number) => void;
    clearCart: () => void;
}

export type ButtonProps = {
    children: ReactNode;
} & React.ComponentProps<'button'>;

export type FormValues = {
    address: string;
    city: string;
    email: string;
    fullName: string;
    cardNumber: string;
    expiryDate: string;
    cvc: string;
};

export type CheckoutFormProps = {
    register: UseFormRegister<FormValues>;
    errors: FieldErrors<FormValues>;
};

export type MainCheckoutProps = {
    cart: CartItem[];
    setOrderId: Dispatch<SetStateAction<string | null>>;
    clearCart: () => void;
};
