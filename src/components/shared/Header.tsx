import React, { useState, useRef, useEffect } from 'react';
import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from '../../store/store';
import { Link, NavLink } from 'react-router-dom';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import SearchBar from '../singleComponents/SearchBar';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default function Header() {
  const [animationParent] = useAutoAnimate();

  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const { numberOfProductsInCart } = useAppSelector((state) => state.cart);

  const searchModalRef = useRef<HTMLDivElement>(null);
  const searchButtonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchButtonRef.current &&
        searchModalRef.current &&
        !searchModalRef.current.contains(event.target as Node) &&
        !searchButtonRef.current?.contains(event.target as Node)
      ) {
        setSearchModalOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleSearchModal = () => {
    setSearchModalOpen((prev) => !prev);
  };

  return (
    <>
      <header ref={animationParent} className="sticky top-0 border-b z-50 border-gray-200 bg-white">
        <p className="flex h-10 items-center justify-center bg-gray-900 px-4 text-xs lg:text-sm font-medium text-white sm:px-6 lg:px-8">
          Get free delivery on orders over NOK500
        </p>

        <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="">
            <div className="flex h-16 items-center">
              {/*Logo*/}
              <div className="flex">
                <NavLink to="/">
                  <span className="font-semibold text-xs lg:text-sm">🛍️ Shopphopp </span>
                </NavLink>
              </div>
              <div className="ml-auto flex items-center">
                <div
                  ref={searchButtonRef}
                  onClick={toggleSearchModal}
                  className="mr-4 duration-150 rounded-md hover:scale-105 group p-2 hover:bg-gray-100 cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 stroke-slate-500 group-hover:stroke-slate-900"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <div className="space-x-2 lg:space-x-6 flex flex-1 items-center justify-end">
                  <NavLink to="/test" className="text-xs lg:text-sm font-medium text-gray-700 hover:text-gray-800">
                    All Products
                  </NavLink>
                  <span className="h-6 w-px bg-gray-200" aria-hidden="true"></span>
                  <NavLink to="/test" className="text-xs lg:text-sm font-medium text-gray-700 hover:text-gray-800">
                    Contact Us
                  </NavLink>
                </div>
                {/*Cart*/}
                <div className="ml-4  lg:ml-6">
                  <Link to="/cart" className="-m-2 flex items-center p-2 group">
                    <svg
                      className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>
                    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                      {numberOfProductsInCart}
                    </span>
                    <span className="sr-only">items in cart, view bag</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
        {searchModalOpen && (
          <div ref={searchModalRef}>
            <SearchBar setSearchModalOpen={setSearchModalOpen} />
          </div>
        )}
        {/* {searchModalOpen && } */}
      </header>
      {searchModalOpen && <div className="fixed z-10 bg-slate-900/40 backdrop-blur-md h-full w-full top-0 left-0" />}
    </>
  );
}
