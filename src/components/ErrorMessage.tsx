import type { ErrorMessageProps } from '../types';

export const ErrorMessage = ({ message, onRetry }: ErrorMessageProps) => {
  return (
    <div className="bg-red-50 dark:bg-red-900/20 border-2 border-red-500 rounded-xl p-6">
      <div className="flex items-start gap-4">
        <div className="shrink-0">
          <svg className="w-8 h-8 text-red-500" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-bold text-red-800 dark:text-red-300 mb-2">
            Erreur
          </h3>
          <p className="text-sm text-red-700 dark:text-red-400 mb-4">
            {message}
          </p>
          {onRetry && (
            <button
              onClick={onRetry}
              className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold transition-colors"
            >
              Réessayer
            </button>
          )}
        </div>
      </div>
    </div>
  );
};