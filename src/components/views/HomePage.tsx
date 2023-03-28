import React from 'react';

import MappedProducts from '../MappedProducts';

export default function HomePage() {
  return (
    <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900">Products</h2>
      <MappedProducts></MappedProducts>
    </div>
  );
}
