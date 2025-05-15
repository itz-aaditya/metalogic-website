'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); 

    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="max-w-4xl mx-auto px-6 py-20">
      <motion.h2
        className="text-4xl font-extrabold mb-10 text-center text-gray-900 dark:text-white"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contact Us
      </motion.h2>

      <motion.form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 gap-6 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <input
          name="name"
          type="text"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="p-3 rounded border border-gray-300 dark:border-gray-600 bg-transparent text-gray-900 dark:text-white"
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="p-3 rounded border border-gray-300 dark:border-gray-600 bg-transparent text-gray-900 dark:text-white"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="p-3 rounded border border-gray-300 dark:border-gray-600 bg-transparent text-gray-900 dark:text-white"
          required
        ></textarea>
        <button
          type="submit"
          className="w-fit px-6 py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </motion.form>
    </section>
  );
}
