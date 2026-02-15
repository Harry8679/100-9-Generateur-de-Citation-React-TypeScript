// Types pour le générateur de citations

export interface Quote {
  id: string;
  text: string;
  author: string;
  category: string;
  addedAt?: Date;
}

export interface ApiQuote {
  _id?: string;
  content: string;
  author: string;
  tags?: string[];
}

export type Category = 'all' | 'wisdom' | 'happiness' | 'love' | 'life' | 'success' | 'inspiration';

export interface QuoteCardProps {
  quote: Quote;
  onFavorite?: (quote: Quote) => void;
  onCopy?: (quote: Quote) => void;
  onShare?: (quote: Quote) => void;
  isFavorite?: boolean;
  showActions?: boolean;
}

export interface QuoteSkeletonProps {
  count?: number;
}

export interface CategoryFilterProps {
  categories: Category[];
  selectedCategory: Category;
  onSelectCategory: (category: Category) => void;
}

export interface FavoritesListProps {
  favorites: Quote[];
  onRemoveFavorite: (id: string) => void;
  onClearFavorites: () => void;
}

export interface ErrorMessageProps {
  message: string;
  onRetry?: () => void;
}