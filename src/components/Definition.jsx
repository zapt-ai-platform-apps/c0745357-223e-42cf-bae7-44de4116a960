import { For } from 'solid-js';

export default function Definition(props) {
  const { definition } = props;

  return (
    <div className="w-full max-w-md bg-white rounded p-4 shadow">
      <h2 className="text-2xl font-bold mb-2">{definition().word}</h2>
      <p className="italic mb-2">{definition().phonetic}</p>
      <ul>
        <For each={definition().meanings}>
          {(meaning) => (
            <li className="mb-2">
              <p className="font-semibold">{meaning.partOfSpeech}</p>
              <ul className="list-disc list-inside">
                <For each={meaning.definitions}>
                  {(def) => (
                    <li>{def.definition}</li>
                  )}
                </For>
              </ul>
            </li>
          )}
        </For>
      </ul>
    </div>
  );
}