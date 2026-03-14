import { useState } from "react";
import type { JournalEntry } from "../App";
const API_URL = import.meta.env.VITE_API_URL;


type JournalFormProp = {
  onEntryCreated: (entry:JournalEntry) => void;
  userId: string;
};

export default function JournalForm({
  onEntryCreated,
  userId,
}: JournalFormProp) {
  const [text, setText] = useState("");
  const [ambience, setAmbience] = useState("forest");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e:any) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await fetch(`${API_URL}/api/journal`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId,
          ambience,
          text,
        }),
      });

      const data = await res.json();
      setText("");

      if (onEntryCreated) {
        onEntryCreated(data); // refresh entries
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-xl  mt-4">Write Journal Entry</h2>

      <div className="flex gap-2 mt-2">
        <label>Ambience</label>
        <select
          value={ambience}
          onChange={(e) => setAmbience(e.target.value)}
          className="border"
        >
          <option value="forest">Forest</option>
          <option value="ocean">Ocean</option>
          <option value="mountain">Mountain</option>
        </select>
      </div>

      <div className="flex gap-2 mt-2">
        <label>Journal</label>
        <textarea
          placeholder="Write how you felt during the session..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
          className="px-2 resize-none row-span-1 w-3/5 hover:outline-none border py-1"
          onKeyDown={(e)=>{
            if(e.key=='Enter'){
              handleSubmit(e)
            }
          }}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="border bg-accent px-2 rounded-xs mt-3"
      >
        {loading ? "Saving..." : "Save Entry"}
      </button>
    </form>
  );
}
