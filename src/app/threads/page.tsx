"use client";
import { useState, useEffect } from "react";
import { notFound } from "next/navigation";
import { Heart as HeartOutline, Heart, Upload } from "lucide-react";
import Link from "next/link";


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
  const [likedPosts, setLikedPosts] = useState<Set<string>>(new Set());
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchData() {
      const data = await getData();
      setNewsData(data);
      setLoading(false); // Set loading to false once data is fetched
    }
    fetchData();
  }, []);

  const handleClick = (news: News) => {
    setSelectedNews(news._id === selectedNews ? null : news._id);
  };

  const toggleLike = (newsId: string, event: React.MouseEvent) => {
    event.stopPropagation();
    setLikedPosts((prevLikedPosts) => {
      const newLikedPosts = new Set(prevLikedPosts);
      if (newLikedPosts.has(newsId)) {
        newLikedPosts.delete(newsId);
      } else {
        newLikedPosts.add(newsId);
      }
      return newLikedPosts;
    });
  };

  return (
    <section className="container mx-auto my-12 px-4 min-h-screen flex flex-col">
      <div className="mb-8">
        <h1 className="text-center text-4xl md:text-6xl my-4 font-bold text-heading">
          Threads
        </h1>
      </div>

      <div className="flex justify-start mb-8" >
        <a href="threads/create" className="">
          <button className="bg-primary hover:bg-heading px-6 py-3 text-background sm:px-8 sm:py-4 sm:text-lg rounded-2xl font-medium text-white whitespace-nowrap">
          <i className="fa-solid fa-arrow-up-from-bracket"></i> Create Thread
          </button>
        </a>
      </div>

      {/* Loading Spinner or Text */}
      {loading ? (
        <div className="flex justify-center items-center py-10 flex-grow">
          <div className="spinner-border animate-spin inline-block w-16 h-16 border-4 border-solid rounded-full border-primary border-t-transparent" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="space-y-8 flex-grow">
          {newsData.map((news) => (
            <div
              key={news._id}
              onClick={() => handleClick(news)}
              className={`bg-secondary bg-opacity-30 rounded-xl p-8 text-text cursor-pointer transition-all ${
                selectedNews === news._id
                  ? "transform scale-[1.02]"
                  : "hover:scale-[1.02]"
              }`}
            >
              <div className="flex flex-col sm:flex-row gap-6 lg:gap-8">
                <div className="w-full sm:w-1/3 h-48 sm:h-64 overflow-hidden rounded-lg">
                  <img
                    className="w-full h-full object-cover rounded-lg"
                    alt={news.title}
                    src={news.imageUrl}
                  />
                </div>

                <div className="w-full sm:w-2/3 space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-bold text-text">
                    {news.title}
                  </h2>
                  <p
                    className={`text-lg sm:text-xl text-text text-opacity-60 ${
                      selectedNews === news._id ? "" : "line-clamp-4"
                    }`}
                  >
                    {news.text}
                  </p>

                  <div className="flex justify-between items-center text-text text-opacity-60 mt-4">
                    <div>
                      <div className="font-medium">{news.username}</div>
                      <div className="opacity-60">Date Added</div>
                    </div>

                    <div
                      className="flex items-center cursor-pointer"
                      onClick={(event) => toggleLike(news._id, event)}
                    >
                      {likedPosts.has(news._id) ? (
                        <Heart className="text-accent" />
                      ) : (
                        <HeartOutline className="text-text text-opacity-60" />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
