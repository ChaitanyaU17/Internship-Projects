import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white px-6">
      <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
      <form className="max-w-xl mx-auto bg-gray-100 p-6 rounded-lg shadow">
        <input type="text" placeholder="Your Name" className="w-full p-2 mb-4 rounded" />
        <input type="email" placeholder="Your Email" className="w-full p-2 mb-4 rounded" />
        <textarea placeholder="Your Message" className="w-full p-2 mb-4 rounded" rows="4"></textarea>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Send</button>
      </form>
    </section>
  );
};

export default Contact;
