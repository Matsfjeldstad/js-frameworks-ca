import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getUniqueProductsWithQuantity } from '../../utils/cartUtils';
import { AppDispatch } from '../store';
import { Product } from '../interfaces';

export interface CartState {
  productsInCart: Product[];
  numberOfProductsInCart: number;
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    productsInCart: [],
    numberOfProductsInCart: 0,
  } as CartState,
  reducers: {
    ADD_PRODUCT_TO_CART: (state, action: PayloadAction<Product>) => {
      state.productsInCart = [...state.productsInCart, action.payload];
      state.numberOfProductsInCart = state.productsInCart.length;
    },
    REMOVE_PRODUCT_FROM_CART: (state, action: PayloadAction<string>) => {
      state.productsInCart = state.productsInCart.filter((product) => product.id !== action.payload);
      state.numberOfProductsInCart = state.productsInCart.length;
    },
    REMOVE_LAST_PRODUCT_FROM_CART: (state, action: PayloadAction<string>) => {
      const lastIndex = state.productsInCart.map((product) => product.id).lastIndexOf(action.payload);
      if (lastIndex !== -1) {
        state.productsInCart.splice(lastIndex, 1);
      }
      state.numberOfProductsInCart = state.productsInCart.length;
    },
    CLEAR_CART: (state) => {
      state.productsInCart = [];
      state.numberOfProductsInCart = 0;
    },
  },
});

export default cartSlice.reducer;

// Actions
export const { ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_FROM_CART, CLEAR_CART, REMOVE_LAST_PRODUCT_FROM_CART } =
  cartSlice.actions;

export const addSingleProductToCart = (productData: Product) => (dispatch: AppDispatch) => {
  console.log('productData: ', productData);
  dispatch(ADD_PRODUCT_TO_CART(productData));
  // API CALL TO add product to the user cart in the BE
};

export const removeSingleProductFromCart = (productId: string) => (dispatch: AppDispatch) => {
  console.log('productId', productId);
  dispatch(REMOVE_PRODUCT_FROM_CART(productId));
};
export const removeLastProductFromCart = (productId: string) => (dispatch: AppDispatch) => {
  console.log('productId', productId);
  dispatch(REMOVE_LAST_PRODUCT_FROM_CART(productId));
};
export const clearCart = () => (dispatch: AppDispatch) => {
  dispatch(CLEAR_CART());
};
