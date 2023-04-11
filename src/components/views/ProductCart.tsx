import React from 'react';
import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux';
import { removeSingleProductFromCart } from '../../store/modules/cartSlice';
import { Link } from 'react-router-dom';
import { getUniqueProductsWithQuantity } from '../../utils/cartUtils';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { RootState, AppDispatch } from '../../store/store';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default function ProductCart() {
  // AutoAnimate adds automatic animations to your JavaScript applications with a single line of code.
  const [animationParent] = useAutoAnimate();
  const dispatch = useDispatch<AppDispatch>();
  const { productsInCart, numberOfProductsInCart } = useAppSelector((state) => state.cart);

  const sumOfPriceOfAllProducts = getUniqueProductsWithQuantity(productsInCart).reduce(
    (accumulator, product) => accumulator + product.discountedPrice * product.quantity,
    0,
  );

  return (
    <main className="h-fit min-h-[calc(100vh_-_104px)] mx-auto max-w-7xl p-4 flex flex-col lg:flex-row">
      <div className="lg:w-4/6 p-6 lg:mr-20 flex flex-col gap-10 ">
        <div className="flex justify-between border-b pb-6 border-gray-300">
          <h1 className="font-bold text-2xl">Product Cart</h1>
          <h2 className="font-bold text-2xl">Items {getUniqueProductsWithQuantity(productsInCart).length}</h2>
        </div>
        <section ref={animationParent}>
          {!numberOfProductsInCart ? (
            <div>No Products added to cart...</div>
          ) : (
            getUniqueProductsWithQuantity(productsInCart).map((product) => (
              <div key={product.id} className="flex justify-between border-b py-6">
                <div className="flex gap-6">
                  <Link to={'/product/' + product.id}>
                    <img src={product.imageUrl} className="w-40 h-44 object-cover rounded-md"></img>
                  </Link>
                  <div className="flex flex-col gap-2">
                    <Link to={'/product/' + product.id}>
                      <h2 className="text-lg font-medium">{product.title}</h2>
                    </Link>
                    <div className="text-gray-500 text-xs">{product.tags[0]}</div>
                    <div className="text-lg font-medium">{product.price}kr</div>
                    <div className="lg:hidden">Qty: {product.quantity}</div>
                  </div>
                </div>
                <div className="hidden lg:flex">Qty: {product.quantity}</div>
                <svg
                  width="29"
                  height="29"
                  viewBox="0 0 29 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 cursor-pointer"
                  onClick={() => dispatch(removeSingleProductFromCart(product.id))}
                >
                  <path
                    d="M1.33817 1.22374C1.71322 0.848794 2.22184 0.638163 2.75217 0.638163C3.2825 0.638163 3.79111 0.848794 4.16617 1.22374L14.7522 11.8097L25.3382 1.22374C25.5227 1.03272 25.7434 0.880351 25.9874 0.775533C26.2314 0.670715 26.4938 0.615542 26.7594 0.613235C27.0249 0.610927 27.2883 0.66153 27.5341 0.762092C27.7799 0.862654 28.0032 1.01116 28.191 1.19895C28.3787 1.38673 28.5272 1.61003 28.6278 1.85583C28.7284 2.10162 28.779 2.36498 28.7767 2.63054C28.7744 2.8961 28.7192 3.15854 28.6144 3.40254C28.5096 3.64655 28.3572 3.86724 28.1662 4.05174L17.5802 14.6377L28.1662 25.2237C28.5305 25.6009 28.7321 26.1061 28.7275 26.6305C28.723 27.1549 28.5126 27.6566 28.1418 28.0274C27.771 28.3982 27.2694 28.6085 26.745 28.6131C26.2206 28.6176 25.7154 28.4161 25.3382 28.0517L14.7522 17.4657L4.16617 28.0517C3.78896 28.4161 3.28376 28.6176 2.75936 28.6131C2.23497 28.6085 1.73335 28.3982 1.36253 28.0274C0.991714 27.6566 0.781375 27.1549 0.776818 26.6305C0.772261 26.1061 0.973851 25.6009 1.33817 25.2237L11.9242 14.6377L1.33817 4.05174C0.963225 3.67668 0.752594 3.16806 0.752594 2.63774C0.752594 2.10741 0.963225 1.59879 1.33817 1.22374Z"
                    fill="#0D0D0D"
                  />
                </svg>
              </div>
            ))
          )}
        </section>
        <Link to="/" className="underline">
          Continue shopping
        </Link>
      </div>
      <div className=" border-l p-6 h-fit sticky top-32 text-gray-900 lg:w-2/6 flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-bold">Order Summary</h2>
          <div className="flex justify-between border-b py-2 opacity-80">
            <h2 className="">Subtotal</h2>
            <div className="font-medium">{sumOfPriceOfAllProducts.toFixed(2)}kr</div>
          </div>
          <div className="flex justify-between border-b py-2 opacity-80">
            <h2 className="">Shipping Fees</h2>
            <div className="font-medium">
              {sumOfPriceOfAllProducts > 500 || !numberOfProductsInCart ? <> 0.00kr </> : <> 149.00kr </>}
            </div>
          </div>
          <div className="flex justify-between border-b py-2 font-bold text-lg">
            <h2 className="">Order Total</h2>
            <div className="">
              {sumOfPriceOfAllProducts > 500 ? (
                <> {sumOfPriceOfAllProducts.toFixed(2)} </>
              ) : (
                <> {!numberOfProductsInCart ? 0 : (Number(sumOfPriceOfAllProducts) + 149).toFixed(2)}kr</>
              )}
            </div>
          </div>
        </div>
        <Link to="/order-success">
          <button
            disabled={!numberOfProductsInCart}
            className="text-white bg-blue-600 px-8 py-4 rounded-lg w-full h-fit hover:bg-blue-500 duration-150 disabled:bg-slate-400"
          >
            Checkout
          </button>
        </Link>
      </div>
    </main>
  );
}
