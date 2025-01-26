import React from "react";

const Page = () => {
  return (
    <div className="bg-black text-gray-100 overflow-x-hidden">
      {/* Main Content */}
      <div className="md:flex md:space-x-12 px-6 md:px-8 py-10 md:py-24 items-center md:mx-auto max-w-7xl">
        <div className="md:w-1/2">
          <h1 className="font-montserrat text-4xl sm:text-5xl md:text-[56px] my-4 font-bold text-primary">
            The BMC Insights
          </h1>
          <p className="text-lg font-medium sm:text-xl md:text-xl text-gray-300 mb-8 leading-relaxed">
            The BMC Insights is a club under{" "}
            <span className="text-sky-300 font-bold">
              <a
                href="https://www.thebritishcollege.edu.np/pages/the-british-model-college-lalitpur-campus"
                target="_blank"
              >
                British Model College
              </a>
            </span>{" "}
            that provides a platform for students to share knowledge,
            collaborate on projects, and grow together. We focus on academic
            excellence, personal development, and extracurricular activities to
            help students enhance their college experience. Join us to engage
            with like-minded peers, expand your skills, and contribute to the
            college community in meaningful ways.
          </p>
          <div className="flex space-x-6">
            <a
              href="#"
              className="bg-blue-600 hover:bg-blue-700 px-6 py-3 text-base sm:px-8 sm:py-4 sm:text-lg rounded-2xl font-medium text-white shadow-xl transition duration-300 ease-in-out transform hover:scale-105 whitespace-nowrap"
            >
              Join the Club
            </a>
            <a
              href="about"
              className="border border-gray-500 hover:border-gray-300 text-gray-400 hover:text-white px-6 py-3 text-base sm:px-8 sm:py-4 sm:text-lg rounded-2xl font-medium transition duration-300 ease-in-out transform hover:scale-105 whitespace-nowrap"
            >
              Learn More
            </a>
          </div>
        </div>
        <div className="md:w-2/3 mt-12 md:mt-0 relative">
          <div className="relative w-full h-full">
            <div className="absolute top-0 left-0 right-0 bottom-0 md:top-10 md:left-10 md:right-10 sm:top-5 sm:left-5 sm:right-5 w-full h-full bg-gradient-to-br from-blue-600 to-blue-300 rounded-xl blur-3xl z-0"></div>
            <img
              src="/images/bmc.jpg"
              alt="BMC Students"
              className="relative z-10 rounded-xl object-cover shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Our Activities */}
      <section className="bg-[#010a11] py-24 px-6 md:px-12 mt-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-montserrat text-3xl sm:text-4xl md:text-4xl font-bold mb-6 text-primary">
            Our Activities
          </h2>
          <p className="text-lg sm:text-xl md:text-xl text-gray-300 mb-8 leading-relaxed">
            At The BMC Insights, we organize a variety of activities that foster
            both academic growth and social connections. From study sessions,
            workshops, to sports events and social gatherings, we provide a
            space for students to engage and thrive.
          </p>
          <a
            href="#"
            className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-2xl text-lg font-medium text-white shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
          >
            Get Involved
          </a>
        </div>
      </section>
      {/* Some events here. */}
      <section className="bg-black py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-montserrat text-3xl sm:text-4xl md:text-4xl font-bold mb-6 text-primary">
            Upcoming Events
          </h2>
          <p className="text-lg sm:text-xl md:text-xl text-gray-300 mb-8 leading-relaxed">
            Stay updated with latest events happening at British Model College.
          </p>
          <div className="grid gap-10 md:grid-cols-3">
            <div className="bg-[#111827] p-6 rounded-xl shadow-lg">
              <img
                src="/images/mun.jpg"
                alt="Event Two"
                className="w-full h-[256px] sm:h-56 md:h-64 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-bold text-white mb-2 hover:text-blue-400">
                <a href="#">BMC MUN 9.0</a>
              </h3>
              <p className="text-gray-300 font-medium">Feb 7-9, 2025</p>
            </div>
            <div className="bg-[#111827] p-6 rounded-xl shadow-lg">
              <iframe
                width="100%"
                height="258"
                src="https://www.youtube.com/embed/Z3AZCZSdrSg?=0&autoplay=1&mute=1&loop=1&playlist=Z3AZCZSdrSg"
                title="BMC Sports Week 2024 Highlights: A Week of Thrills, Skills &amp; Fun Games"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full mb-4 rounded-md"
              ></iframe>
              <h3 className="text-xl font-bold text-white mb-2 hover:text-blue-400">
                <a href="#">BMC Annual Sports Meet 2025</a>
              </h3>
              <p className="text-gray-300 font-medium">Feb 23 - 28, 2025</p>
            </div>

            <div className="bg-[#111827] p-6 rounded-xl shadow-lg">
              <img
                src="/images/bmcfiesta.jpg"
                alt="Event Three"
                className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-bold text-white mb-2 hover:text-blue-400">
                <a href="#">BMC Fiesta</a>
              </h3>
              <p className="text-gray-300 font-medium">Feb 22, 2025</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#010a11] py-24 px-6 md:px-12 mt-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-montserrat text-3xl sm:text-4xl md:text-4xl font-bold mb-8 text-primary">
            Success Stories from Our Members
          </h2>
          <div className="flex justify-center space-x-6 mb-8">
            {[...Array(6)].map((_, i) => (
              <img
                key={i}
                src="#"
                alt="Testimonial"
                className="w-16 h-16 rounded-full border-2 border-blue-500 shadow-xl"
              />
            ))}
          </div>
          <p className="text-lg sm:text-xl md:text-xl text-gray-300 leading-relaxed">
            Our members have achieved great success by being part of the club,
            from leadership roles to academic advancements and social
            contributions. Hear from them about how joining the club has
            positively impacted their journey.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Page;
