"use client";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";

const ContactUs = () => {
  const [state, handleSubmit] = useForm("mpwqqjrw"); // Replace "mpwqqjrw" with your Formspree form ID

  if (state.succeeded) {
    return (
      <div className="bg-black md:my-8 text-white h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center text-primary">
          Thank You!
        </h1>
        <p className="text-lg sm:text-xl text-center font-medium">
          Your message has been sent successfully. We will get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-black md:my-8 text-white h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center text-primary">
        Contact Us
      </h1>
      <p className="text-lg sm:text-xl mb-8 text-center font-medium">
        Either mail us at{" "}
        <a
          href="mailto:theinsights@britishmodelcollege.edu.np"
          className="text-blue-400 hover:underline"
        >
          theinsights@britishmodelcollege.edu.np
        </a>{" "}
        or fill up the form below.
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-[#010a11] p-8 sm:p-10 lg:p-12 rounded-2xl shadow-lg w-full max-w-lg"
      >
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-300 mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            className="w-full p-3 rounded-lg bg-gray-800 text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-300 mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            className="w-full p-3 rounded-lg bg-gray-800 text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-300 mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Enter your message"
            rows={4}
            required
            className="w-full p-3 rounded-lg bg-gray-800 text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          ></textarea>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>

        <button
          type="submit"
          disabled={state.submitting}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition focus:ring-2 focus:ring-blue-500 focus:outline-none"
        >
          Send Message
        </button>
      </form>

      <footer className="mt-12 text-center">
        <p className="text-gray-500 text-sm">
          We aim to respond within 24-48 hours. Thank you for reaching out!
        </p>
      </footer>
    </div>
  );
};

export default ContactUs;
