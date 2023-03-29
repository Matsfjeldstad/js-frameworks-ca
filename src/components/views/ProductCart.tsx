import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeSingleProductFromCart } from '../../store/modules/cartSlice';
import { Link } from 'react-router-dom';
import { getUniqueProductsWithQuantity } from '../../utils/cartUtils';
import { useAutoAnimate } from '@formkit/auto-animate/react';

type Props = {};

export default function ProductCart({}: Props) {
  // AutoAnimate adds automatic animations to your JavaScript applications with a single line of code.
  const [animationParent] = useAutoAnimate();
  const dispatch = useDispatch();
  const { productsInCart } = useSelector((state) => state.cart);

  return (
    <main className="h-fit min-h-[calc(100vh_-_104px)] mx-auto max-w-7xl p-8 flex">
      <div className="border border-gray-200 bg-gray-50 w-4/6 rounded-tl-2xl rounded-bl-2xl p-6 pr-20 flex flex-col gap-10 ">
        <div className="flex justify-between border-b pb-6 border-gray-300">
          <h1 className="font-bold text-2xl">Product Cart</h1>
          <h2 className="font-bold text-2xl">Items {getUniqueProductsWithQuantity(productsInCart).length}</h2>
        </div>
        <table>
          <thead className="p-10 border-b">
            <tr>
              <th className="text-left py-4">Product Info</th>
              <th className="text-left">Quantity</th>
              <th className="text-right">Price</th>
            </tr>
          </thead>
          <tbody ref={animationParent}>
            {getUniqueProductsWithQuantity(productsInCart).map((product) => (
              <tr key={product.id} className="border-b">
                <td className="flex flex-col gap-2 py-10">
                  <img src={product.imageUrl} className="w-24 h-28 bg-gray-400 rounded-md" />
                  <div className="flex flex-col gap-1">
                    <div className="font-medium text-lg">{product.title}</div>
                    <div className="text-gray-400 text-sm">#{product.id}</div>
                    <div
                      onClick={() => dispatch(removeSingleProductFromCart(product.id))}
                      className="underline text-gray-500 cursor-pointer"
                    >
                      Remove item
                    </div>
                  </div>
                </td>
                <td>x{product.quantity}</td>
                <td className="text-right">
                  <div>
                    <div className="text-sm line-through">{product.price}</div>
                    <div className="font-medium">{product.discountedPrice}</div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link to="/" className="underline">
          Continue shopping
        </Link>
      </div>
      <div className="bg-gray-800 text-gray-100 w-2/6 rounded-tr-2xl rounded-br-2xl pt-20 px-9 flex flex-col gap-20 ">
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-bold">Cart Summary</h2>
          <div className="flex gap-2 items-end">
            <h2 className="text">Total Cart: </h2>
            <span className="text-2xl font-medium">44</span>
          </div>
        </div>
        <button className="bg-blue-600 p-4 rounded-lg hover:bg-blue-500 duration-150">Checkout</button>
      </div>
    </main>
  );
}
