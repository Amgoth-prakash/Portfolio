import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 px-8 bg-secondary text-gray-900">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-center">Contact</h2>
        <form
          className="max-w-lg mx-auto bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4"
          action="https://formspree.io/f/{prakashprince003@gmail.com}"
          method="POST"
        >
          <div className="mb-4">
            <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="w-full bg-gray-200 text-gray-900 border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:bg-white"
              id="name"
              type="text"
              name="name"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="w-full bg-gray-200 text-gray-900 border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:bg-white"
              id="email"
              type="email"
              name="_replyto"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="w-full bg-gray-200 text-gray-900 border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:bg-white"
              id="message"
              name="message"
              placeholder="Your Message"
              rows="6"
              required
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button
              className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
