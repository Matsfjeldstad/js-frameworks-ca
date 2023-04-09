import React, { useState } from 'react';
import { useGetProductsQuery } from '../../store/modules/apiSlice';
import { Product } from '../../store/interfaces';
import { Link } from 'react-router-dom';

export function filterProductsBySearchValue(products: Product[], searchValue: string) {
  if (products) {
    const filteredProducts = products?.filter((product) =>
      product.title.toLowerCase().includes(searchValue.toLowerCase()),
    );
    return filteredProducts;
  }
  return products;
}

type SearchBarProps = {
  setSearchModalOpen: (isOpen: boolean) => void;
};

export default function SearchBar({ setSearchModalOpen }: SearchBarProps) {
  const { data: products } = useGetProductsQuery();
  const [searchState, setSearchState] = useState('');

  return (
    <div
      className="w-full absolute"
    >
      <div className="w-full bg-gray-800 p-4 relative lefo">
        <div className="max-w-lg mx-auto relative">
          <label
            htmlFor="search"
            className="relative shadow-none duration-150 flex items-center w-full h-16 border rounded-lg focus-within:shadow-lg bg-white overflow-hidden"
          >
            <div className="grid place-items-center h-full w-12 text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              className="h-full w-full outline-none text-sm text-gray-700 pr-2"
              type="text"
              id="search"
              onChange={(e) => setSearchState(e.target.value)}
              placeholder="Search something.."
            />
          </label>
          <div className="max-w-lg mx-auto absolute translate-y-2 left-0 w-full bg-gray-100 rounded-lg overflow-hidden">
            {products &&
              searchState &&
              filterProductsBySearchValue(products, searchState).map((product) => (
                <Link
                  to={`/product/${product.id}`}
                  className="border-b p-3 flex justify-between"
                  onClick={() => setSearchModalOpen(false)}
                >
                  <div>{product.title}</div>
                  <div>!</div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
