import React from "react";

export default function Blog() {
  return (
    <section className="container mx-auto my-12 px-4">
      <div className="mb-8">
        <h1 className="text-center text-4xl md:text-6xl my-4 font-bold text-heading">
          Blogs
        </h1>
      </div>

      <div className="space-y-8">
        <div className="bg-secondary bg-opacity-30 rounded-xl p-8 text-text text-opacity-60">
          <a href="/blog/posts/bmcalevels">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-text">
              A-Levels in Nepal: An Insider's Guide from a BMC Student
            </h2>
          </a>
          <p className="text-lg sm:text-xl">
            Hey there! Let me guess - you've just finished SEE and everyone's
            throwing advice at you about what to do next. "+2 is safer!"
            "A-Levels will open more doors!" "But what about Nepali subject?"
            Trust me, I know exactly how overwhelming it feels. I'm Manish,
            currently in my second year at British Model College (BMC), and two
            years ago, I was just as confused as you probably are right now. But
            since you're here, let me share the real scoop about A-Levels at BMC
            - everything I wish someone had told me when I was in your shoes.
          </p>
        </div>
        <div className="bg-secondary bg-opacity-30 rounded-xl p-8 text-text text-opacity-60">
          <a href="/blog/posts/floods">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-text">
              Floods - Monsoon Season in Nepal
            </h2>
          </a>
          <p className="text-lg sm:text-xl">
            Nepal, 19 August 2024: It has been a dreadful month of frantic
            searches for umbrellas, and staying in as much as possible. Just
            after a scorching hot summer, the monsoon rain began almost
            immediately. While this has been occurring everyday, how much do we
            actually know about it? Let us go into detail about the inevitable
            monsoon season.
          </p>
        </div>
        <div className="bg-secondary bg-opacity-30 rounded-xl p-8 text-text text-opacity-60">
          <a href="/blog/posts/freshers">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-text">
              Freshers Party 2024
            </h2>
          </a>
          <p className="text-lg sm:text-xl">
            Yala Durbar, August 18 2024: The students at the British Model
            College worked tirelessly to throw a welcome party for the freshly
            incoming batch of students. “BMC Freshers 2024” was a massive
            success, and the students had a night to remember.
          </p>
        </div>
      </div>
    </section>
  );
}
