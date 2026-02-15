import { useState, useCallback, useEffect, useRef } from 'react';
import { quoteApi } from '../services/quoteApi';
import type { Quote, Category } from '../types';

export const useQuote = (initialCategory: Category = 'all') => {
  const [quote, setQuote] = useState<Quote | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [category, setCategory] = useState<Category>(initialCategory);
  const [autoRefresh, setAutoRefresh] = useState(false);
  
  const intervalRef = useRef<number | null>(null);

  const fetchQuote = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const newQuote = await quoteApi.getRandomQuote(category);
      setQuote(newQuote);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Une erreur est survenue';
      setError(errorMessage);
      
      // Utiliser une citation de secours
      const fallbackQuote = quoteApi.getFallbackQuote();
      setQuote(fallbackQuote);
    } finally {
      setLoading(false);
    }
  }, [category]);

  // Récupérer la première citation
  useEffect(() => {
    fetchQuote();
  }, [fetchQuote]);

  // Auto-refresh
  useEffect(() => {
    if (autoRefresh) {
      intervalRef.current = window.setInterval(() => {
        fetchQuote();
      }, 10000); // 10 secondes
    } else {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }

    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
      }
    };
  }, [autoRefresh, fetchQuote]);

  const handleCategoryChange = useCallback((newCategory: Category) => {
    setCategory(newCategory);
  }, []);

  const toggleAutoRefresh = useCallback(() => {
    setAutoRefresh(prev => !prev);
  }, []);

  return {
    quote,
    loading,
    error,
    category,
    autoRefresh,
    fetchQuote,
    setCategory: handleCategoryChange,
    toggleAutoRefresh,
  };
};