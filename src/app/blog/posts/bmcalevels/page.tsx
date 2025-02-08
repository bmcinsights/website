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
            Hey there! Let me guess - you've just finished SEE and everyone's throwing 
            advice at you about what to do next. "+2 is safer!" "A-Levels will open 
            more doors!" "But what about Nepali subject?" Trust me, I know exactly how 
            overwhelming it feels. I'm Manish, currently in my second year at British 
            Model College (BMC), and two years ago, I was just as confused as you 
            probably are right now. But since you're here, let me share the real scoop 
            about A-Levels at BMC - everything I wish someone had told me when I was 
            in your shoes.
          </p>

          {/* What are A-Levels Section */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              What Actually ARE A-Levels?
            </h2>
            <p className="text-text opacity-90 text-xl leading-relaxed">
              Let's cut through the confusion. A-Levels (or Cambridge International 
              A-Levels, if we're being fancy) is basically the British equivalent 
              of +2, but with some major perks. Here's what makes it different:
            </p>
          </section>

          {/* Course Options */}
          <section className="bg-secondary bg-opacity-30 rounded-xl p-6">
            <p className="text-text opacity-90 text-xl leading-relaxed">
              Remember all those subjects you had to study in SEE whether you liked 
              them or not? A-Levels lets you pick just 3-4 subjects you're actually 
              interested in. At BMC, we've got plenty to choose from:
            </p>
            <ul className="mt-4 space-y-2 text-xl">
              <li className="text-text opacity-90">• Science stream: Physics, Chemistry, Biology, Mathematics</li>
              <li className="text-text opacity-90">• Business stream: Business, Economics, Accounting, Mathematics</li>
              <li className="text-text opacity-90">• Technology stream: Computer Science, Physics, Mathematics</li>
              <li className="text-text opacity-90">• Mixed combinations are totally possible too! (yes, really!)</li>
            </ul>
          </section>

          {/* Life at BMC Section */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              Life at BMC: What to Actually Expect
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-secondary bg-opacity-30 rounded-xl p-6">
                <h3 className="text-xl font-bold text-primary mb-3">
                  The Academic Scene
                </h3>
                <ul className="space-y-2">
                  <li className="text-text opacity-90">• Classes from 10:00 AM to 4:00 PM</li>
                  <li className="text-text opacity-90">• Small classes (max 25 students)</li>
                  <li className="text-text opacity-90">• Practical work and experiments</li>
                  <li className="text-text opacity-90">• Mentor-like teachers</li>
                  <li className="text-text opacity-90">• Regular assessments</li>
                </ul>
              </div>

              <div className="bg-secondary bg-opacity-30 rounded-xl p-6">
                <h3 className="text-xl font-bold text-primary mb-3">
                  Beyond the Books
                </h3>
                <ul className="space-y-2">
                  <li className="text-text opacity-90">• BMC Insights team member</li>
                  <li className="text-text opacity-90">• Various clubs (Debate, MUN, Sports)</li>
                  <li className="text-text opacity-90">• Science Fair and Workshops</li>
                  <li className="text-text opacity-90">• Sports competitions</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Remaining sections follow the same pattern... */}
          <section className="bg-secondary bg-opacity-30 rounded-xl p-6">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              The Bottom Line
            </h2>
            <p className="text-text opacity-90 text-xl leading-relaxed">
              If you're looking for more than just another two years of school - if
              you want an education that challenges you, prepares you for university
              anywhere in the world, and helps you grow as a person - then BMC might
              be your place.
            </p>
            <p className="text-text opacity-90 text-xl leading-relaxed mt-4">
              Still got questions? Drop by BMC or reach out through our website.
              We'd love to show you around!
            </p>
          </section>

          <p className="text-text opacity-90 text-xl leading-relaxed italic">
            P.S. - If you're worried about the switch from SEE to A-Levels, trust me
            - if I could do it, so can you! :)
          </p>
        </div>
      </article>
    </section>
  );
};

export default BlogPost;