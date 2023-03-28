import { createSlice } from '@reduxjs/toolkit';

interface Review {
  id: string;
  username: string;
  rating: number;
  description: string;
}

interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  discountedPrice: number;
  imageUrl: string;
  rating: number;
  tags: string[];
  reviews: Review[];
}

interface CartState {
  productsInCart: Product[];
  numberOfProductsInCart: Number;
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    productsInCart: [],
    numberOfProductsInCart: 0,
  } as CartState,
  reducers: {
    // here we write the functions which will update the state
    ADD_PRODUCT_TO_CART: (state, action) => {
      // Check if the product is already in the cart                          is my product id available in the productsInCart []
      const isProductInCart =
        state.productsInCart && state.productsInCart.some((product) => product.id === action.payload.id);

      if (isProductInCart) {
        // If the product is already in the cart, don't add it again
      } else {
        // If the product is not in the cart, add it to the cart
        state.productsInCart = [...state.productsInCart, action.payload];
        state.numberOfProductsInCart = state.productsInCart.length;
      }
    },
    REMOVE_PRODUCT_FROM_CART: (state, action) => {
      state.productsInCart = state.productsInCart.filter((product) => product.id !== action.payload);
      state.numberOfProductsInCart = state.productsInCart.length;
    },
  },
});

export default cartSlice.reducer;

// Actions
const { ADD_PRODUCT_TO_CART } = cartSlice.actions;
const { REMOVE_PRODUCT_FROM_CART } = cartSlice.actions;

export const addSingleProductToCart = (productData: Object) => (dispatch: Function) => {
  console.log('productData: ', productData);
  dispatch(ADD_PRODUCT_TO_CART(productData));
  // API CALL TO add product to the user cart in the BE
};

export const removeSingleProductFromCart = (productId: String) => (dispatch: Function) => {
  console.log('productId', productId);
  dispatch(REMOVE_PRODUCT_FROM_CART(productId));
};
