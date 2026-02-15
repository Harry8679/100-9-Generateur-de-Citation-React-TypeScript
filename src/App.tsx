import { QuoteGenerator } from './components/QuoteGenerator';

function App() {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 dark:text-white mb-4">
            💬 Générateur de Citations
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg mb-2">
            Projet 9/100 • React + TypeScript + Fetch API
          </p>
          <p className="text-gray-500 dark:text-gray-500 text-sm">
            Appels API, loading states et gestion d'erreurs
          </p>
        </div>

        {/* Quote Generator */}
        <QuoteGenerator />

        {/* Section explicative */}
        <div className="mt-12 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
            📚 Concepts React abordés
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Fetch API */}
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
              <h3 className="font-semibold text-blue-700 dark:text-blue-300 mb-3 flex items-center gap-2">
                <span>🌐</span>
                Fetch API
              </h3>
              <div className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
                <div>• Appels HTTP asynchrones</div>
                <div>• async/await syntax</div>
                <div>• Response handling</div>
                <div>• JSON parsing</div>
              </div>
              <div className="mt-3 bg-white dark:bg-gray-700 rounded p-2 font-mono text-xs">
                const res = await fetch(url)
              </div>
            </div>

            {/* Loading States */}
            <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
              <h3 className="font-semibold text-green-700 dark:text-green-300 mb-3 flex items-center gap-2">
                <span>⏳</span>
                Loading States
              </h3>
              <div className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
                <div>• Skeleton loaders</div>
                <div>• Conditional rendering</div>
                <div>• UX optimisée</div>
                <div>• Feedback visuel</div>
              </div>
              <div className="mt-3 bg-white dark:bg-gray-700 rounded p-2 font-mono text-xs">
                {'{'}loading ? &lt;Skeleton /&gt; : &lt;Content /&gt;{'}'}
              </div>
            </div>

            {/* Error Handling */}
            <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4">
              <h3 className="font-semibold text-red-700 dark:text-red-300 mb-3 flex items-center gap-2">
                <span>⚠️</span>
                Error Handling
              </h3>
              <div className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
                <div>• try/catch blocks</div>
                <div>• Error states</div>
                <div>• Fallback content</div>
                <div>• Retry mechanism</div>
              </div>
              <div className="mt-3 bg-white dark:bg-gray-700 rounded p-2 font-mono text-xs">
                try &#123;...&#125; catch (err) &#123;...&#125;
              </div>
            </div>

            {/* useEffect */}
            <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4">
              <h3 className="font-semibold text-purple-700 dark:text-purple-300 mb-3 flex items-center gap-2">
                <span>⚡</span>
                useEffect & API
              </h3>
              <div className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
                <div>• Fetch on mount</div>
                <div>• Dependencies array</div>
                <div>• Cleanup functions</div>
                <div>• Auto-refresh pattern</div>
              </div>
              <div className="mt-3 bg-white dark:bg-gray-700 rounded p-2 font-mono text-xs">
                useEffect(() =&gt; fetch(), [deps])
              </div>
            </div>
          </div>
        </div>

        {/* Code Examples */}
        <div className="mt-8 bg-gray-900 rounded-xl shadow-lg p-6 text-white">
          <h3 className="text-xl font-bold mb-4">💻 Exemples de code</h3>

          <div className="space-y-4">
            {/* Example 1 */}
            <div>
              <div className="text-sm text-gray-400 mb-2">1. Fetch API avec async/await</div>
              <pre className="bg-gray-800 rounded p-3 overflow-x-auto text-sm">
                <code>{`const fetchQuote = async () => {
  try {
    const response = await fetch('https://api.quotable.io/random');
    
    if (!response.ok) {
      throw new Error(\`HTTP error: \${response.status}\`);
    }
    
    const data = await response.json();
    setQuote(data);
  } catch (error) {
    setError(error.message);
  }
};`}</code>
              </pre>
            </div>

            {/* Example 2 */}
            <div>
              <div className="text-sm text-gray-400 mb-2">2. Loading states avec conditional rendering</div>
              <pre className="bg-gray-800 rounded p-3 overflow-x-auto text-sm">
                <code>{`const [loading, setLoading] = useState(true);

const fetchData = async () => {
  setLoading(true); // Début du chargement
  
  try {
    const data = await fetchQuote();
    setQuote(data);
  } finally {
    setLoading(false); // Fin du chargement
  }
};

// Dans le JSX
{loading ? <Skeleton /> : <QuoteCard quote={quote} />}`}</code>
              </pre>
            </div>

            {/* Example 3 */}
            <div>
              <div className="text-sm text-gray-400 mb-2">3. Error handling avec retry</div>
              <pre className="bg-gray-800 rounded p-3 overflow-x-auto text-sm">
                <code>{`const [error, setError] = useState<string | null>(null);

try {
  const response = await fetch(url);
  if (!response.ok) throw new Error('Erreur réseau');
  const data = await response.json();
  setQuote(data);
  setError(null); // Reset l'erreur si succès
} catch (err) {
  setError(err.message);
  // Citation de secours
  setQuote(fallbackQuote);
}

// Affichage de l'erreur
{error && <ErrorMessage message={error} onRetry={fetchQuote} />}`}</code>
              </pre>
            </div>

            {/* Example 4 */}
            <div>
              <div className="text-sm text-gray-400 mb-2">4. Auto-refresh avec useEffect</div>
              <pre className="bg-gray-800 rounded p-3 overflow-x-auto text-sm">
                <code>{`const [autoRefresh, setAutoRefresh] = useState(false);
const intervalRef = useRef<number | null>(null);

useEffect(() => {
  if (autoRefresh) {
    intervalRef.current = setInterval(() => {
      fetchQuote();
    }, 10000); // Toutes les 10 secondes
  } else {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  }
  
  return () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };
}, [autoRefresh, fetchQuote]);`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* Next Project */}
        <div className="mt-8 bg-linear-to-r from-green-500 to-teal-500 rounded-xl shadow-lg p-6 text-white">
          <h3 className="text-xl font-bold mb-2">🚀 Prochaine étape</h3>
          <p className="mb-4">
            Projet 10 : Accordéon FAQ (Multiple states, composition)
          </p>
          <button className="px-6 py-2 bg-white text-green-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Voir le projet suivant →
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;