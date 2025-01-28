"use client";
import { useState, useEffect } from "react";
import { notFound } from "next/navigation";
import { Heart as HeartOutline, Heart, Upload } from "lucide-react"; // Import the filled and outline heart icons
import Link from "next/link";
import { Button } from "@/components/ui/button";

// Define the News type
interface News {
  _id: string;
  title: string;
  text: string;
  imageUrl: string;
  username: string;
}

async function getData() {
  const res = await fetch("http://localhost:3000/api/news", { cache: "no-store" });
  if (!res.ok) return notFound();

  return res.json();
}

export default function News() {
  const [newsData, setNewsData] = useState<News[]>([]);
  const [selectedNews, setSelectedNews] = useState<string | null>(null);

  // Manage liked state for each news post
  const [likedPosts, setLikedPosts] = useState<Set<string>>(new Set());  // Use a Set to track liked posts by their _id

  useEffect(() => {
    async function fetchData() {
      const data = await getData();
      setNewsData(data);
    }

    fetchData();
  }, []);

  const handleClick = (news: News) => {
    // Toggle the expansion of the news item
    setSelectedNews(news._id === selectedNews ? null : news._id);
  };

  const toggleLike = (newsId: string, event: React.MouseEvent) => {
    // Prevent the heart click from triggering the expansion click
    event.stopPropagation(); 

    setLikedPosts((prevLikedPosts) => {
      const newLikedPosts = new Set(prevLikedPosts);
      if (newLikedPosts.has(newsId)) {
        newLikedPosts.delete(newsId); // Remove the post from liked if already liked
      } else {
        newLikedPosts.add(newsId); // Add the post to liked
      }
      return newLikedPosts;
    });
  };

  return (
    <div className="">
      <section className="container mx-auto my-16 md:my-16 bg-black text-white px-4 sm:px-8">
        <div className="text-center">
          <h1 className="font-bold text-5xl sm:text-6xl mb-6 text-primary">Threads</h1>
        </div>

        <div className="space-y-12">
          <div className="col-span-full flex justify-center sm:justify-start mb-6">
            <Link href="threads/create">
              <Button variant="outline" className="border-2 border-gray-500 text-gray-500 bg-transparent hover:bg-gray-800 hover:text-white transition-all ease-in-out duration-300">
                <Upload className="mr-2" /> Create Thread
              </Button>
            </Link>
          </div>

          {newsData.map((news) => (
            <div
              key={news._id}
              onClick={() => handleClick(news)}
              className={`flex flex-col sm:flex-row gap-6 lg:gap-8 items-center sm:items-start bg-[#010b13] rounded-lg p-6 transition-all transform cursor-pointer ${
                selectedNews === news._id
                  ? "z-10 scale-105 bg-[#020f1a]"
                  : "hover:bg-[#020f1a] hover:scale-105"
              }`}
            >
              <div className="w-full sm:w-1/3 h-48 sm:h-64 overflow-hidden rounded-lg">
                <img className="w-full h-full object-cover rounded-lg" alt="newsImage" src={news.imageUrl} />
              </div>

              <div className="w-full sm:w-2/3 space-y-4">
                <h2 className="text-2xl font-semibold text-white">{news.title}</h2>
                <p className={`line-clamp-4 text-sm text-gray-300 leading-relaxed ${selectedNews === news._id ? "line-clamp-none" : ""}`}>
                  {news.text}
                </p>

                <div className="flex justify-between items-center text-xs text-gray-400 mt-4">
                  <div>
                    <div className="font-medium">{news.username}</div>
                    <div className="opacity-60">Date Added</div>
                  </div>

                  {/* Toggle the heart icon based on whether it's liked or not */}
                  <div
                    className="flex items-center cursor-pointer"
                    onClick={(event) => toggleLike(news._id, event)} // Prevent click propagation
                  >
                    {likedPosts.has(news._id) ? (
                      <Heart className="text-red-500" /> // Solid red heart when liked
                    ) : (
                      <HeartOutline className="text-gray-500" /> // Outline heart when not liked
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
