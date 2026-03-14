import { useEffect, useState } from "react";
import JournalForm from "./components/journal-form";
import JournalList from "./components/journal-list";
import Insights from "./components/journal-insights";
const API_URL = import.meta.env.VITE_API_URL;

export interface JournalEntry {
  id: string;
  userId: string;
  ambience: string;
  text: string;
  createdAt: string;
}

function App() {
  const [entries, setEntries] = useState<JournalEntry[]>([]);

  const onEntryCreated = (entry: JournalEntry) => {
    setEntries([...entries, entry]);
  };
  function getUserId() {
    let userId = localStorage.getItem("userId");

    if (!userId) {
      userId = crypto.randomUUID();
      localStorage.setItem("userId", userId);
    }

    return userId;
  }
  const userId = getUserId();

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(`${API_URL}/api/journal/${userId}`);
      const data = await res.json();
      setEntries(data);
    };
    getData();
  }, []);

  return (
    <div className="bg-background h-screen w-full">
      <div className="mx-auto lg:max-w-5xl md:max-w-3xl ">
        <h1 className="font-bold text-3xl mt-4">AI-Assisted Journal</h1>
        <JournalForm userId={userId} onEntryCreated={onEntryCreated} />
        <Insights userId={userId} />
        <JournalList journalData={entries} />
      </div>
    </div>
  );
}

export default App;
