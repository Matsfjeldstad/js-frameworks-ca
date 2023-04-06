import React from 'react';
import { addSingleProductToCart } from '../../store/modules/cartSlice';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useGetProductByIdQuery } from '../../store/modules/apiSlice';
import { AppDispatch } from '../../store/store';

export const ProductDetails = ({ id }: { id: string }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { data: product, error, isLoading } = useGetProductByIdQuery(id);

  let discount: number = 0;

  if (isLoading) return <div>Loading...</div>;

  if (error) {
    return <div>Error:</div>;
  }

  if (!product) {
    return (
      <main className="flex flex-col sm:flex-row h-fit min-h-[calc(100vh_-_104px)] mx-auto max-w-2xl py-4 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        sorry...
      </main>
    );
  }

  discount = product.discountedPrice - product.price;
  return (
    <main className="flex flex-col sm:flex-row h-fit min-h-[calc(100vh_-_104px)] mx-auto max-w-2xl py-4 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <img src={product.imageUrl} className="bg-gray-100 h-[400px] w-full max-w-3xl object-contain rounded-xl "></img>
      <div className="p-6 h-fit flex flex-col gap-8">
        <h1 className="text-5xl font-bold">{product.title}</h1>
        <div className="flex gap-4">
          <span className="bg-blue-200 text-blue-900 p-4  w-fit rounded-2xl font-bold relative">
            <span className="text-2xl">{product.discountedPrice}</span> kr
          </span>
          {discount < 0 && (
            <div>
              <div className=" line-through"> {product.price} kr</div>
              <div className=" text-green-600 text-1xl font-bold rounded-full ">Save {discount}kr</div>
            </div>
          )}
        </div>
        <button
          onClick={() => dispatch(addSingleProductToCart(product))}
          className="py-4 duration-200 px-6 bg-blue-700 hover:bg-blue-500 text-white rounded-xl group flex justify-center gap-2 w-fit"
        >
          add to cart{' '}
          <svg
            className="h-6 w-6 flex-shrink-0 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
          </svg>
        </button>
        <p>{product.description}</p>
        <div>
          rating <span>{product.rating}</span>
        </div>
      </div>
    </main>
  );
};

export default function SpesificProduct() {
  let { id } = useParams();
  if (id) return <ProductDetails id={id}></ProductDetails>;
  return <main>404</main>;
}
