import { createSignal } from 'solid-js';
import SearchForm from './components/SearchForm';
import Definition from './components/Definition';

export default function App() {
  const [word, setWord] = createSignal('');
  const [definition, setDefinition] = createSignal(null);
  const [loading, setLoading] = createSignal(false);
  const [error, setError] = createSignal(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!word()) return;
    setLoading(true);
    setError(null);
    setDefinition(null);
    try {
      const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word()}`);
      if (!response.ok) throw new Error('Word not found.');
      const data = await response.json();
      setDefinition(data[0]);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Dictionary App</h1>
      <SearchForm
        word={word}
        setWord={setWord}
        loading={loading}
        handleSubmit={handleSubmit}
      />
      {error() && <p className="text-red-500 mb-4">{error()}</p>}
      {definition() && <Definition definition={definition} />}
      <div className="mt-8">
        <p>
          Made on{' '}
          <a
            href="https://www.zapt.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            ZAPT
          </a>
        </p>
      </div>
    </div>
  );
}