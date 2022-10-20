export type CartItem = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  type: string;
  sizes: number;
  count: number;
  about: string;
};

export interface CartSliceState {
  totalPrice: number;
  items: CartItem[];
}
