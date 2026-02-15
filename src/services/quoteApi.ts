import type { ApiQuote, Quote, Category } from '../types';

const API_BASE_URL = 'https://api.quotable.io';

// Mapping des catégories vers les tags de l'API
const categoryTagMap: Record<Category, string[]> = {
  all: [],
  wisdom: ['wisdom'],
  happiness: ['happiness'],
  love: ['love'],
  life: ['life'],
  success: ['success'],
  inspiration: ['inspirational', 'motivational'],
};

export const quoteApi = {
  // Récupérer une citation aléatoire
  async getRandomQuote(category: Category = 'all'): Promise<Quote> {
    try {
      const tags = categoryTagMap[category];
      const tagsParam = tags.length > 0 ? `?tags=${tags.join('|')}` : '';
      
      const response = await fetch(`${API_BASE_URL}/random${tagsParam}`);
      
      if (!response.ok) {
        throw new Error(`Erreur HTTP: ${response.status}`);
      }
      
      const data: ApiQuote = await response.json();
      
      return {
        id: data._id || Date.now().toString(),
        text: data.content,
        author: data.author,
        category: tags[0] || 'general',
      };
    } catch (error) {
      console.error('Erreur lors de la récupération de la citation:', error);
      throw new Error('Impossible de récupérer une citation. Veuillez réessayer.');
    }
  },

  // Rechercher des citations par mot-clé
  async searchQuotes(query: string): Promise<Quote[]> {
    try {
      const response = await fetch(`${API_BASE_URL}/search/quotes?query=${encodeURIComponent(query)}`);
      
      if (!response.ok) {
        throw new Error(`Erreur HTTP: ${response.status}`);
      }
      
      const data = await response.json();
      
      return data.results.map((quote: ApiQuote) => ({
        id: quote._id || Date.now().toString(),
        text: quote.content,
        author: quote.author,
        category: quote.tags?.[0] || 'general',
      }));
    } catch (error) {
      console.error('Erreur lors de la recherche:', error);
      throw new Error('Impossible de rechercher des citations.');
    }
  },

  // Citation de secours si l'API échoue
  getFallbackQuote(): Quote {
    const fallbackQuotes: Quote[] = [
      {
        id: 'fallback-1',
        text: 'La seule façon de faire du bon travail est d\'aimer ce que vous faites.',
        author: 'Steve Jobs',
        category: 'inspiration',
      },
      {
        id: 'fallback-2',
        text: 'Le succès n\'est pas final, l\'échec n\'est pas fatal : c\'est le courage de continuer qui compte.',
        author: 'Winston Churchill',
        category: 'success',
      },
      {
        id: 'fallback-3',
        text: 'La vie est ce qui arrive quand vous êtes occupé à faire d\'autres plans.',
        author: 'John Lennon',
        category: 'life',
      },
    ];
    
    return fallbackQuotes[Math.floor(Math.random() * fallbackQuotes.length)];
  },
};