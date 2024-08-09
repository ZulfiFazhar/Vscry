// pages/index.js
"use client";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [achievements, setAchievements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAchievements = async () => {
      try {
        const response = await axios.get("/api/prestasi");
        setAchievements(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAchievements();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="flex flex-wrap gap-4">
      {achievements.length > 0 ? (
        achievements.map((item, index) => (
          <div key={index} className="card">
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <img src={item.imgSrc} alt={item.title} width="80" />
              <h4>{item.title}</h4>
              <p>
                {item.category} - {item.year}
              </p>
            </a>
          </div>
        ))
      ) : (
        <div>No achievements found</div>
      )}
    </div>
  );
}
