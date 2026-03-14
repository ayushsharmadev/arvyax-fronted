import { useEffect, useState } from "react";
const API_URL = import.meta.env.VITE_API_URL

type InsightsData = {
  totalEntries: number;
  topEmotion: string;
  mostUsedAmbience: string;
  recentKeywords: string[];
};
function Insights({ userId }: { userId: string }) {
  const [data, setData] = useState<InsightsData | null>(null);

  useEffect(() => {
    fetch(`${API_URL}/api/journal/insights/${userId}`)
      .then((res) => res.json())
      .then(setData)
      .catch(console.error);
  }, [userId]);

  if (!data) return <div>Loading insights...</div>;
  return (
    <div className="border p-2 my-4">
      <h3>Insights</h3>
      <p>
        <strong>Total Entries:</strong> {data.totalEntries}
      </p>
      <p>
        <strong>Top Emotion:</strong> {data.topEmotion}
      </p>
      <p>
        <strong>Most Used Ambience:</strong> {data.mostUsedAmbience}
      </p>
      <p>
        <strong>Recent Keywords:</strong> {data.recentKeywords.join(", ")}
      </p>
    </div>
  );
}

export default Insights;
