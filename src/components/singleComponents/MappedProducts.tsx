import React from 'react';
import { Link } from 'react-router-dom';
import { useGetProductsQuery } from '../../store/modules/apiSlice';

const MappedProducts = () => {
  const { data: products, error, isLoading } = useGetProductsQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error:</div>;

  return (
    <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      {products?.map((product) => (
        <div key={product.id} className="group relative flex flex-col gap-y-3">
          <Link
            to={`product/${product.id}`}
            className="min-h-80 duration-150 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80"
          >
            <img
              src={product.imageUrl}
              alt={product.title}
              className="h-full w-full object-contain object-center lg:h-full lg:w-full"
              loading="lazy"
            />
          </Link>
          <div className="mt-4 flex justify-between">
            <div>
              <h3 className="text-md text-gray-700 relative">
                <Link to={`product/${product.id}`}>
                  <span aria-hidden="true" className="absolute inset-0" />
                  {product.title}
                </Link>
              </h3>
              <p className="mt-1 text-sm text-gray-500">{product.description}</p>
            </div>
            <p className="text-sm font-medium text-gray-900">NOK{product.discountedPrice}</p>
          </div>
          <Link
            to={`product/${product.id}`}
            className="mt-4 py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 text-center"
          >
            View
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MappedProducts;
