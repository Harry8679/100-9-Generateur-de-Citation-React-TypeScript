import type { FavoritesListProps } from '../types';
import { QuoteCard } from './QuoteCard';

export const FavoritesList = ({ favorites, onRemoveFavorite, onClearFavorites }: FavoritesListProps) => {
  if (favorites.length === 0) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
        <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4">
          ❤️ Citations favorites
        </h3>
        <div className="text-center py-8 text-gray-400">
          <div className="text-4xl mb-2">💭</div>
          <p className="text-sm">Aucune citation favorite</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold text-gray-800 dark:text-white">
          ❤️ Citations favorites ({favorites.length})
        </h3>
        <button
          onClick={onClearFavorites}
          className="text-xs text-red-600 hover:text-red-700 hover:underline"
        >
          Tout effacer
        </button>
      </div>

      <div className="space-y-4 max-h-96 overflow-y-auto">
        {favorites.map((quote) => (
          <div key={quote.id} className="relative">
            <QuoteCard
              quote={quote}
              isFavorite={true}
              onFavorite={() => onRemoveFavorite(quote.id)}
              showActions={true}
            />
          </div>
        ))}
      </div>
    </div>
  );
};