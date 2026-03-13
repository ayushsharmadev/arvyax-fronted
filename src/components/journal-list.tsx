import type { JournalEntry } from "../App";

interface JournalListProp {
  journalData: JournalEntry[];
}

export default function JournalList({ journalData }: JournalListProp) {
  console.log(journalData);

  if (journalData.length === 0) {
    return <p className="mt-4">No journal entries yet.</p>;
  }

  return (
    <div className="mt-6 space-y-4">
      {journalData.map((entry) => (
        <div
          key={entry.id}
          className="border p-4 rounded-lg shadow-sm bg-white"
        >
          <div className="flex justify-between text-sm text-gray-500 mb-2">
            <span>Ambience: {entry.ambience}</span>
            <span>{new Date(entry.createdAt).toLocaleString()}</span>
          </div>
          <p className="text-gray-800">{entry.text}</p>
        </div>
      ))}
    </div>
  );
}
