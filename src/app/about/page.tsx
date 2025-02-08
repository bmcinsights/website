"use client";

const AboutPage = () => {
  return (
    <section className="min-h-screen bg-background text-text">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-12">
          {/* Header Section */}
          <header className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4">
              The BMC Insights
            </h1>
            <p className="text-xl text-text opacity-80 max-w-3xl mx-auto">
              Fostering intellectual discourse and creative expression at
              British Model College
            </p>
          </header>

          {/* About Section */}
          <div className="bg-secondary bg-opacity-30 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-primary mb-6">About Us</h2>
            <p className="text-text opacity-90 text-xl leading-relaxed">
              We are more than just a student publication. BMC Insights is where
              ideas take flight, creativity finds purpose, and students
              transform into thought leaders. As the premier student-led
              platform at British Model College, we blend journalistic
              excellence with creative expression to showcase the extraordinary
              journey of A-Level education.
            </p>
          </div>

          {/* Mission Section */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-secondary bg-opacity-30 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-primary mb-4">
                Our Mission
              </h3>
              <ul className="space-y-4 text-text opacity-90">
                <li className="flex items-start text-lg">
                  <span className="text-primary mr-2">•</span>
                  Uncover and amplify powerful stories from our campus community
                </li>
                <li className="flex items-start text-lg">
                  <span className="text-primary mr-2">•</span>
                  Challenge conventional thinking through thoughtful discourse
                </li>
                <li className="flex items-start text-lg">
                  <span className="text-primary mr-2">•</span>
                  Transform student writers into confident communicators
                </li>
                <li className="flex items-start text-lg">
                  <span className="text-primary mr-2">•</span>
                  Create content that inspires, informs, and ignites change
                </li>
              </ul>
            </div>

            <div className="bg-secondary bg-opacity-30 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-primary mb-4">
                What We Do
              </h3>
              <ul className="space-y-4 text-text opacity-90">
                <li className="flex items-start text-lg">
                  <span className="text-primary mr-2">•</span>
                  Craft compelling stories that matter to our community
                </li>
                <li className="flex items-start text-lg">
                  <span className="text-primary mr-2">•</span>
                  Host writing workshops that turn passion into skill
                </li>
                <li className="flex items-start text-lg">
                  <span className="text-primary mr-2">•</span>
                  Create spaces for literary and artistic expression
                </li>
                <li className="flex items-start text-lg">
                  <span className="text-primary mr-2">•</span>
                  Build bridges through our monthly newsletters
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center bg-secondary bg-opacity-30 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Get Involved
            </h3>
            <p className="text-text opacity-90 text-xl mb-6">
              Interested in becoming a part of The BMC Insights? We're always
              looking for passionate writers, editors, and creative minds!
            </p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfXTUhse5GuFSAQgOyEL6VeKFh8NUtRVx7XcnSSgxJgdW7hyw/viewform?usp=dialog"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <button className="bg-primary hover:bg-opacity-80 text-background px-8 py-3 rounded-xl transition duration-300 transform hover:scale-105">
                Join Now
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;