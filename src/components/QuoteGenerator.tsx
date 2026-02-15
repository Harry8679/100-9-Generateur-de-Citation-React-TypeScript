import { useQuote } from '../hooks/useQuote';
import { useFavorites } from '../hooks/useFavorites';
import { QuoteCard } from './QuoteCard';
import { QuoteSkeleton } from './QuoteSkeleton';
import { CategoryFilter } from './CategoryFilter';
import { FavoritesList } from './FavoritesList';
import { ErrorMessage } from './ErrorMessage';
import type { Category, Quote } from '../types';

const categories: Category[] = ['all', 'wisdom', 'happiness', 'love', 'life', 'success', 'inspiration'];

export const QuoteGenerator = () => {
  const {
    quote,
    loading,
    error,
    category,
    autoRefresh,
    fetchQuote,
    setCategory,
    toggleAutoRefresh,
  } = useQuote();

  const {
    favorites,
    addFavorite,
    removeFavorite,
    isFavorite,
    clearFavorites,
  } = useFavorites();

  const handleCopy = (quote: Quote) => {
    const text = `"${quote.text}" — ${quote.author}`;
    navigator.clipboard.writeText(text);
  };

  const handleShare = (quote: Quote) => {
    const text = `"${quote.text}" — ${quote.author}`;
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  const handleFavoriteToggle = (quote: Quote) => {
    if (isFavorite(quote.id)) {
      removeFavorite(quote.id);
    } else {
      addFavorite(quote);
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
          Générateur de Citations
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Projet 9/100 • Fetch API & Loading States
        </p>
      </div>

      {/* Grid principale */}
      <div className="grid lg:grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="space-y-6">
          <CategoryFilter
            categories={categories}
            selectedCategory={category}
            onSelectCategory={setCategory}
          />

          {/* Controls */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4">
              ⚙️ Contrôles
            </h3>
            
            <button
              onClick={fetchQuote}
              disabled={loading}
              className="w-full mb-3 px-4 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? '⏳ Chargement...' : '🔄 Nouvelle citation'}
            </button>

            <div className="flex items-center justify-between p-3 bg-gray-100 dark:bg-gray-700 rounded-lg">
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                Auto-refresh (10s)
              </span>
              <button
                onClick={toggleAutoRefresh}
                className={`relative w-12 h-6 rounded-full transition-colors ${
                  autoRefresh ? 'bg-green-500' : 'bg-gray-300 dark:bg-gray-600'
                }`}
              >
                <span
                  className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${
                    autoRefresh ? 'translate-x-6' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="lg:col-span-3 space-y-6">
          {/* Error message */}
          {error && !loading && (
            <ErrorMessage message={error} onRetry={fetchQuote} />
          )}

          {/* Quote display */}
          {loading ? (
            <QuoteSkeleton />
          ) : quote ? (
            <QuoteCard
              quote={quote}
              onFavorite={handleFavoriteToggle}
              onCopy={handleCopy}
              onShare={handleShare}
              isFavorite={isFavorite(quote.id)}
              showActions={true}
            />
          ) : null}

          {/* Favorites */}
          <FavoritesList
            favorites={favorites}
            onRemoveFavorite={removeFavorite}
            onClearFavorites={clearFavorites}
          />
        </div>
      </div>
    </div>
  );
};