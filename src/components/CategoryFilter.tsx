import type { CategoryFilterProps, Category } from '../types';

const categoryLabels: Record<Category, string> = {
  all: 'Toutes',
  wisdom: 'Sagesse',
  happiness: 'Bonheur',
  love: 'Amour',
  life: 'Vie',
  success: 'Succès',
  inspiration: 'Inspiration',
};

const categoryEmojis: Record<Category, string> = {
  all: '🌟',
  wisdom: '🦉',
  happiness: '😊',
  love: '❤️',
  life: '🌱',
  success: '🏆',
  inspiration: '💡',
};

export const CategoryFilter = ({
  categories,
  selectedCategory,
  onSelectCategory,
}: CategoryFilterProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4">
        📂 Catégories
      </h3>
      <div className="space-y-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-semibold transition-all duration-300 ${
              selectedCategory === category
                ? 'bg-blue-500 text-white shadow-lg scale-105'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            <span className="text-2xl">{categoryEmojis[category]}</span>
            <span>{categoryLabels[category]}</span>
          </button>
        ))}
      </div>
    </div>
  );
};