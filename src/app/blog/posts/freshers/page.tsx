import React from "react";

const BlogPost = () => {
  return (
    <section className="min-h-screen bg-background text-text flex my-8 justify-center p-4 pt-8">
      <article className="max-w-3xl w-full">
        {/* Header Section */}
        <header className="mb-8">
          <h1 className="text-3xl md:text-5xl font-bold text-primary mb-4">
            Freshers Party 2024
          </h1>
          <div className="text-text opacity-80 text-lg">
            <span>by </span>
            <span className="font-semibold">Tenzing Sherpa</span>
          </div>
        </header>

        {/* Featured Image */}
        <div className="mt-4 mb-8">
          <img 
            src="/images/freshers.png" 
            alt="BMC Freshers Party 2024"
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* Article Content */}
        <div className="space-y-6">
          <p className="text-text text-xl leading-relaxed">
            <span className="font-semibold">Yala Durbar, August 18 2024:</span>{" "}
            The students at the British Model College worked tirelessly to throw a
            welcome party for the freshly incoming batch of students. "BMC
            Freshers 2024" was a massive success, and the students had a night to
            remember. It was a party organized by the A2 students, welcoming the
            new batch of AS students to the school at a party venue right next to
            the school.
          </p>

          <p className="text-text text-xl leading-relaxed">
            Mr. Rajan Kumar Rai started off the ceremony with a heartwarming speech,
            kicking the party off. This was followed by the opening dance, keeping
            the energy of the students high. Following that, more of the talented A2
            students put up an impeccable line of items. Songs from "Thamel Bazar"
            to "One of the girls" flowed into the surroundings, making everyone sway
            with excitement. The atmosphere was lively, the crowd singing along and
            clapping, displaying the audience's enthusiasm in getting involved with
            the performances.
          </p>

          <p className="text-text text-xl leading-relaxed">
            Traditional food was served at the party for snacks, and dinner was a
            flavourful combination of naan and butter chicken. Ice cream shortly
            followed after for dessert. However, the highlight of the night was
            the open dance floor towards the end of the event. Being somewhat a
            moshpit, with the sound system bursting with boisterous upbeat music,
            everybody jumped up and down, full of life. The party ended on a high,
            with all of the students feeling euphoric and talking to one another
            about the memorable night they had.
          </p>

          {/* Quote Section */}
          <blockquote className="text-text text-xl leading-relaxed italic border-l-4 border-primary pl-4 my-8">
            So many adventures couldn't happen today<br />
            So many songs we forgot to play<br />
            So many dreams swinging out of the blue<br />
            We'll let em come true<br />
            Forever young,<br />
            I want to be forever young<br />
            <span className="text-lg mt-2 block">- Alphaville</span>
          </blockquote>
        </div>
      </article>
    </section>
  );
};

export default BlogPost;