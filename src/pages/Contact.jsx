import  { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_maybxf5",
        "template_ighfddf", 
        form.current,
        "8zP_rMHkZpiyDTNP0" 
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          form.current.reset(); // Reset the form after submission
        },
        (error) => {
          alert("Failed to send the message. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center bg-white py-16">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto px-4"
      >
        <h2 className="text-4xl font-bold text-center mb-8 text-violet-600">Contact Me</h2>
        <form ref={form} onSubmit={sendEmail} className="bg-gray-100 p-8 rounded-lg">
          {/* Name Field */}
          <div className="mb-6">
            <label htmlFor="from_name" className="block text-lg font-medium text-violet-600 mb-2">
              Name
            </label>
            <input
              type="text"
              id="from_name"
              name="from_name"
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
          </div>

          {/* Email Field */}
          <div className="mb-6">
            <label htmlFor="reply_to" className="block text-lg font-medium text-violet-600 mb-2">
              Email
            </label>
            <input
              type="email"
              id="reply_to"
              name="reply_to"
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
          </div>

          {/* Subject Field */}
          <div className="mb-6">
            <label htmlFor="subject" className="block text-lg font-medium text-violet-600 mb-2">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
          </div>

          {/* Message Field */}
          <div className="mb-6">
            <label htmlFor="message" className="block text-lg font-medium text-violet-600 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-500"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-violet-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-violet-700 transition-colors"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;