// src/lib/cart-store.ts
import { create } from "zustand";

export type CartItem = {
  variantId: string;
  title: string;
  price: number;
  quantity: number;
  image?: string;
};

type CartState = {
  items: CartItem[];
  showCart: boolean;
  setShowCart: (visible: boolean) => void;
  addItem: (item: CartItem) => void;
  removeItem: (variantId: string) => void;
  clearCart: () => void;
};

export const useCart = create<CartState>((set) => ({
  items: [],
  showCart: false,

  setShowCart: (visible: boolean) => set({ showCart: visible }),

  addItem: (item: CartItem) =>
    set((state) => {
      const existing = state.items.find((i) => i.variantId === item.variantId);
      const updatedItems = existing
        ? state.items.map((i) =>
          i.variantId === item.variantId
            ? { ...i, quantity: i.quantity + item.quantity }
            : i
        )
        : [...state.items, item];
      return { items: updatedItems, showCart: true };
    }),

  removeItem: (variantId: string) =>
    set((state) => ({
      items: state.items.filter((i) => i.variantId !== variantId),
      showCart: state.showCart, // ✅ jangan ketimpa jadi undefined
    })),

  clearCart: () => set({ items: [] }),
}));
