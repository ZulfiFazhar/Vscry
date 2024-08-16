"use client";

import React, { useState, useEffect } from "react";
import LoadingSkeleton from "@/components/blog/LoadingSkeleton";
import PrestasiCard from "@/components/prestasi/PrestasiCard";

export default function Page() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [prestasi, setPrestasi] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/prestasi");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setIsLoaded(true);
        setPrestasi(data);
      } catch (error) {
        setIsLoaded(true);
        setError(error);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <LoadingSkeleton />;
  } else {
    return (
      <div className="w-full min-h-screen flex justify-center">
        <div className="w-4/5 p-2 md:p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 sm:gap-4">
          {prestasi.map((item) => (
            <PrestasiCard item={item} key={item.namaKompetisi} />
          ))}
        </div>
      </div>
    );
  }
}
