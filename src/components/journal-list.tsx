import { useState } from "react";
import type { JournalEntry } from "../App";
const API_URL = import.meta.env.VITE_API_URL;


interface JournalListProp {
  journalData: JournalEntry[];
}

export default function JournalList({ journalData }: JournalListProp) {
  const [analyzing, setAnalyzing] = useState("");
  if (journalData.length === 0) {
    return <p className="mt-4">No journal entries yet.</p>;
  }
  const analyzeJournal = async (journalId: string, text: string) => {
    setAnalyzing(journalId)
    const data = await fetch(
      `${API_URL}/api/journal/anaylze/${journalId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text }),
      },
    );
    setAnalyzing("")
  };
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
          <div className="flex justify-between">
            <p className="text-gray-800">{entry.text}</p>
            <button
              className="mx-4 bg-accent border px-3 rounded-md"
              onClick={() => analyzeJournal(entry.id, entry.text)}
            >
              {analyzing == entry.id ? "Analyzing.." : "Analyze"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
