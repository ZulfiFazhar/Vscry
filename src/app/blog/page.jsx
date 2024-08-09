"use client";

import React, { useState, useEffect } from "react";
import LoadingSkeleton from "@/components/blog/LoadingSkeleton";
import BlogCard from "@/components/blog/BlogCard";

export default function Page() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/medium");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setIsLoaded(true);
        setBlogs(data);
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
          {blogs.map((item) => (
            <BlogCard item={item} key={item.guid} />
          ))}
        </div>
      </div>
    );
  }
}
