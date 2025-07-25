import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { AppState } from '../_lib/types';

export const useAppStore = create<AppState>()(
    persist(
        (set, get) => ({
            cart: [],

            hasHydrated: false,

            setHasHydrated: (state) => set({ hasHydrated: state }),

            addToCart: (item) => {
                const existing = get().cart.find(
                    (cartItem) => cartItem.id === item.id
                );

                if (existing) {
                    set({
                        cart: get().cart.map((i) =>
                            i.id === item.id
                                ? { ...i, quantity: i.quantity + 1 }
                                : i
                        ),
                    });
                } else {
                    set({ cart: [...get().cart, { ...item, quantity: 1 }] });
                }
            },

            removeFromCart: (id) => {
                set({
                    cart: get().cart.filter((item) => item.id !== id),
                });
            },

            reduceCartItemQty: (id) => {
                set({
                    cart: get().cart.map((i) =>
                        i.id === id ? { ...i, quantity: i.quantity - 1 } : i
                    ),
                });
            },

            clearCart: () => set({ cart: [] }),
        }),
        {
            name: 'minicommerce-storage',
            onRehydrateStorage: () => (state) => {
                state?.setHasHydrated(true);
            },
        }
    )
);
