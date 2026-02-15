import { useState } from 'react';
import type { QuoteCardProps } from '../types';

export const QuoteCard = ({
  quote,
  onFavorite,
  onCopy,
  onShare,
  isFavorite = false,
  showActions = true,
}: QuoteCardProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (onCopy) {
      onCopy(quote);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleShare = () => {
    if (onShare) {
      onShare(quote);
    }
  };

  const handleFavorite = () => {
    if (onFavorite) {
      onFavorite(quote);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 transform transition-all duration-300 hover:scale-105">
      {/* Quote icon */}
      <div className="mb-6">
        <svg
          className="w-12 h-12 text-blue-500 dark:text-blue-400"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>

      {/* Quote text */}
      <p className="text-2xl font-serif text-gray-800 dark:text-white leading-relaxed mb-6">
        "{quote.text}"
      </p>

      {/* Author & Category */}
      <div className="flex items-center justify-between mb-6">
        <p className="text-lg font-semibold text-gray-600 dark:text-gray-300">
          — {quote.author}
        </p>
        <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm font-semibold">
          {quote.category}
        </span>
      </div>

      {/* Actions */}
      {showActions && (
        <div className="flex gap-3">
          <button
            onClick={handleFavorite}
            className={`flex-1 px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
              isFavorite
                ? 'bg-red-500 hover:bg-red-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white'
            }`}
          >
            {isFavorite ? '❤️ Favori' : '🤍 Ajouter'}
          </button>
          
          <button
            onClick={handleCopy}
            className="flex-1 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold transition-colors"
          >
            {copied ? '✓ Copié' : '📋 Copier'}
          </button>
          
          <button
            onClick={handleShare}
            className="w-12 h-10 bg-green-500 hover:bg-green-600 text-white rounded-lg font-semibold transition-colors flex items-center justify-center"
            title="Partager"
          >
            📤
          </button>
        </div>
      )}
    </div>
  );
};