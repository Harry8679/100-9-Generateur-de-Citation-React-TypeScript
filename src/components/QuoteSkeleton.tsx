import type { QuoteSkeletonProps } from '../types';

export const QuoteSkeleton = ({ count = 1 }: QuoteSkeletonProps) => {
  return (
    <>
      {[...Array(count)].map((_, index) => (
        <div
          key={index}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 animate-pulse"
        >
          {/* Quote icon skeleton */}
          <div className="mb-6">
            <div className="w-12 h-12 bg-gray-300 dark:bg-gray-700 rounded-full" />
          </div>

          {/* Quote text skeleton */}
          <div className="space-y-3 mb-6">
            <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-full" />
            <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-5/6" />
            <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-4/6" />
          </div>

          {/* Author skeleton */}
          <div className="flex items-center justify-between mb-6">
            <div className="h-5 bg-gray-300 dark:bg-gray-700 rounded w-1/3" />
            <div className="h-5 bg-gray-300 dark:bg-gray-700 rounded w-20" />
          </div>

          {/* Actions skeleton */}
          <div className="flex gap-3">
            <div className="h-10 bg-gray-300 dark:bg-gray-700 rounded flex-1" />
            <div className="h-10 bg-gray-300 dark:bg-gray-700 rounded flex-1" />
            <div className="h-10 bg-gray-300 dark:bg-gray-700 rounded w-10" />
          </div>
        </div>
      ))}
    </>
  );
};