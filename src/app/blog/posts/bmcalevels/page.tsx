import React from "react";

const BlogPost = () => {
  return (
    <section className="min-h-screen bg-background text-text flex my-8 justify-center p-4 pt-8">
      <article className="max-w-3xl w-full">
        {/* Header Section */}
        <header className="mb-8">
          <h1 className="text-3xl md:text-5xl font-bold text-primary mb-4">
            A-Levels in Nepal: An Insider's Guide from a BMC Student
          </h1>
          <div className="text-text opacity-80 text-lg">
            <span>by </span>
            <span className="font-semibold">Manish Pandeya</span>
          </div>
        </header>

        {/* Featured Image */}
        <div className="mt-4 mb-8 rounded-xl overflow-hidden">
          <img
            src="/images/alevels.jpg"
            alt="BMC A levels"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Introduction */}
        <div className="space-y-8">
          {/* Introduction Paragraph */}
          <p className="text-text opacity-90 text-xl leading-relaxed">
            Hey there! Let me guess - you've just finished SEE and everyone's throwing advice at you about what to do next. "+2 is safer!" "A-Levels will open more doors!" "But what about Nepali subject?" Trust me, I know exactly how overwhelming it feels.
          </p>
          <p className="text-text opacity-90 text-xl leading-relaxed">
            I'm Manish, currently in my second year at British Model College (BMC), and two years ago, I was just as confused as you probably are right now. Let me share what I've learned about A-Levels - everything I wish someone had told me when I was in your shoes.
          </p>

          {/* What are A-Levels Section */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              What Really ARE A-Levels?
            </h2>
            <p className="text-text opacity-90 text-xl leading-relaxed">
              Think of A-Levels (Cambridge International A-Levels) as an alternative to +2, but with a completely different approach to learning. The biggest difference? Freedom of choice. Instead of studying a fixed set of subjects, you get to pick 3-4 subjects you're genuinely passionate about.
            </p>
            <p className="text-text opacity-90 text-xl leading-relaxed">
              The subjects are grouped into streams, but here's the cool part - you're not locked into just one stream. You can choose from:
            </p>
            <ul className="mt-4 space-y-2 text-xl">
              <li className="text-text opacity-90">• Science stream: Physics, Chemistry, Biology, Mathematics</li>
              <li className="text-text opacity-90">• Business stream: Business, Economics, Accounting, Mathematics</li>
              <li className="text-text opacity-90">• Technology stream: Computer Science, Physics, Mathematics</li>
              <li className="text-text opacity-90">• Or create your own combination across streams!</li>
            </ul>
          </section>

          {/* The Learning Experience Section */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              The Learning Experience
            </h2>
            <p className="text-text opacity-90 text-xl leading-relaxed">
              Let's be honest - transitioning from SEE to A-Levels is a jump. Here's what to expect:
            </p>
            <ul className="mt-4 space-y-2 text-xl">
              <li className="text-text opacity-90">• The way of learning is more sophisticated - it's about understanding, not memorizing</li>
              <li className="text-text opacity-90">• You'll need to develop strong time management skills</li>
              <li className="text-text opacity-90">• The exam pattern is different - expect more analytical and application-based questions</li>
              <li className="text-text opacity-90">• Research and extended writing become your new best friends</li>
            </ul>
            <p className="text-text opacity-90 text-xl leading-relaxed mt-4">
              But here's the thing - you adjust faster than you'd think. The key is choosing subjects you actually enjoy. In my case, I went with Physics, Computer Science, and Mathematics because I'm a tech enthusiast (yes, that combination is possible!).
            </p>
          </section>

          {/* My Journey at BMC Section */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              My Journey at BMC
            </h2>
            <p className="text-text opacity-90 text-xl leading-relaxed">
              As a current BMC student, what I value most here is:
            </p>
            <ul className="mt-4 space-y-2 text-xl">
              <li className="text-text opacity-90">• The flexibility to choose subject combinations that match my interests</li>
              <li className="text-text opacity-90">• Small class sizes that ensure personal attention</li>
              <li className="text-text opacity-90">• Practical sessions that bring concepts to life</li>
              <li className="text-text opacity-90">• Flexible schedule that aligns with my needs</li>
            </ul>
            <p className="text-text opacity-90 text-xl leading-relaxed mt-4">
              The co-curricular scene is pretty active too. I actually co-founded The BMC Insights, our student-run web platform. There are tons of other clubs and activities to get involved in - it's not just about studying 24/7.
            </p>
          </section>

          {/* Tips for Future A-Level Students Section */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              Tips for Future A-Level Students
            </h2>
            <p className="text-text opacity-90 text-xl leading-relaxed">
              If you're considering A-Levels, here's what I wish I had known:
            </p>
            <ul className="mt-4 space-y-2 text-xl">
              <li className="text-text opacity-90">• Start preparing for the different learning style early on</li>
              <li className="text-text opacity-90">• Don't just pick subjects because they "look good" - choose what interests you</li>
              <li className="text-text opacity-90">• Take advantage of your teachers' office hours — they're actually willing to help</li>
              <li className="text-text opacity-90">• Get involved in activities beyond academics - universities look at that too</li>
            </ul>
          </section>

          {/* Final Thoughts Section */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              Final Thoughts
            </h2>
            <p className="text-text opacity-90 text-xl leading-relaxed">
              Back when I was finishing SEE, choosing A-Levels felt like a huge leap. I wondered if it would be too difficult, if I could adapt to the new teaching style, and if it would be worth the investment. Now, midway through my second year at BMC, I can confidently say it was worth the risk.
            </p>
            <p className="text-text opacity-90 text-xl leading-relaxed mt-4">
              A-Levels aren’t just about earning another certificate—it’s about transforming how you think, learn, and approach challenges. At BMC, I’ve grown from a student who memorized answers to someone who genuinely enjoys exploring concepts and solving problems. The practical skills, critical thinking, and research abilities you develop here? They’re real game-changers when it comes to university applications and beyond.
            </p>
            <p className="text-text opacity-90 text-xl leading-relaxed mt-4">
              Is it challenging? Absolutely. But that’s what makes it worth it—and with the right support system, you’ll discover capabilities you never knew you had.
            </p>
            <p className="text-text opacity-90 text-xl leading-relaxed mt-4">
              Curious to see what I’m talking about? Come visit us during our open house events or schedule a campus tour. Our admissions team will be happy to guide you through the process and answer any questions you have.
            </p>
            <p className="text-text opacity-90 text-xl leading-relaxed mt-4">
              Visit our website or call our admissions office today to learn more and take the first step toward your A-Level journey!
            </p>
            <p className="text-text opacity-90 text-xl leading-relaxed mt-4">
              So, are you ready to challenge yourself and unlock your full potential? A-Levels at BMC might just be the perfect next step for you!
            </p>
            <p className="text-text opacity-90 text-xl leading-relaxed italic mt-4">
              P.S. Everyone feels a bit nervous about making this switch, and that’s completely normal. But with determination and the right guidance, you’ve got this!
            </p>
          </section>
        </div>
      </article>
    </section>
  );
};

export default BlogPost;
