import React from 'react';

type Props = {};

export default function SkeletonLoaderGrid({}: Props) {
  return (
    <div className="mt-6 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      <div className="min-h-80 w-full h-80 animate-pulse overflow-hidden rounded-md bg-gray-300" />
      <div className="min-h-80 w-full h-80 animate-pulse overflow-hidden rounded-md bg-gray-300" />
      <div className="min-h-80 w-full h-80 animate-pulse overflow-hidden rounded-md bg-gray-300" />
      <div className="min-h-80 w-full h-80 animate-pulse overflow-hidden rounded-md bg-gray-300" />
      <div className="min-h-80 w-full h-80 animate-pulse overflow-hidden rounded-md bg-gray-300" />
      <div className="min-h-80 w-full h-80 animate-pulse overflow-hidden rounded-md bg-gray-300" />
      <div className="min-h-80 w-full h-80 animate-pulse overflow-hidden rounded-md bg-gray-300" />
      <div className="min-h-80 w-full h-80 animate-pulse overflow-hidden rounded-md bg-gray-300" />
    </div>
  );
}
