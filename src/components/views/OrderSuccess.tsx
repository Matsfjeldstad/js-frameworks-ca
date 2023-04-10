import React from 'react';
import { clearCart } from '../../store/modules/cartSlice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { Link } from 'react-router-dom';

type Props = {};

export default function OrderSuccess({}: Props) {
  const dispatch = useDispatch<AppDispatch>();

  dispatch(clearCart());
  return (
    <div className="p-20 h-screen bg-gray-300">
      <div className="bg-white max-w-lg mx-auto p-10 flex flex-col items-center gap-6 text-center rounded-lg shadow-md">
        <div className="bg-green-400 h-12 w-12 relative border-4 border-white rounded-full flex justify-center items-center">
          <svg
            width="26"
            height="19"
            viewBox="0 0 26 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 fill-white"
          >
            <path d="M25.1869 2.70143L9.18694 18.7014C9.09407 18.7944 8.98378 18.8682 8.86238 18.9185C8.74098 18.9688 8.61085 18.9947 8.47944 18.9947C8.34802 18.9947 8.2179 18.9688 8.0965 18.9185C7.9751 18.8682 7.86481 18.7944 7.77194 18.7014L0.771938 11.7014C0.584297 11.5138 0.478882 11.2593 0.478882 10.9939C0.478882 10.7286 0.584297 10.4741 0.771938 10.2864C0.959579 10.0988 1.21407 9.99337 1.47944 9.99337C1.7448 9.99337 1.9993 10.0988 2.18694 10.2864L8.47944 16.5802L23.7719 1.28643C23.9596 1.09878 24.2141 0.99337 24.4794 0.99337C24.7448 0.99337 24.9993 1.09878 25.1869 1.28643C25.3746 1.47407 25.48 1.72856 25.48 1.99393C25.48 2.25929 25.3746 2.51379 25.1869 2.70143Z" />
          </svg>
        </div>
        <div className="flex flex-col gap-4">
          <div className="text-2xl font-bold">Thank you for your order</div>
          <div className="text-gray-700">
            WOHOO! Your Payment was a success! Your order are now being packed.It will be on the way home to you soon
          </div>
        </div>
        <Link to="/">
          <button className="p-3 duration-150 w-fit font-medium bg-green-400 rounded hover:scale-[1.02] hover:bg-green-300">
            Go Back Shopping
          </button>
        </Link>
      </div>
    </div>
  );
}
