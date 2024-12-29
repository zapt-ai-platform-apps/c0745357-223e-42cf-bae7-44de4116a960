export default function SearchForm(props) {
  const { word, setWord, loading, handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mb-8">
      <div className="flex items-center border-b border-teal-500 py-2">
        <input
          className="appearance-none bg-transparent border-none box-border w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="text"
          placeholder="Type a word"
          aria-label="Word"
          value={word()}
          onInput={(e) => setWord(e.currentTarget.value)}
        />
        <button
          type="submit"
          class="flex-shrink-0 bg-teal-500 hover:bg-teal-600 border-teal-500 hover:border-teal-600 text-sm border-4 text-white py-1 px-2 rounded cursor-pointer"
          classList={{
            'opacity-50 cursor-not-allowed': loading()
          }}
          disabled={loading()}
        >
          {loading() ? 'Loading...' : 'Search'}
        </button>
      </div>
    </form>
  );
}