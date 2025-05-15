'use client';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Amit Sharma',
    role: 'CEO, TechCorp',
    feedback:
      'Metalogic delivered a seamless web platform that transformed our digital presence. Highly recommended!',
  },
  {
    name: 'Sneha Adhikari',
    role: 'Product Manager, Finverse',
    feedback:
      'Professional, innovative, and extremely reliable. Working with Metalogic was a great experience.',
  },
  {
    name: 'John Lee',
    role: 'Founder, Startly',
    feedback:
      'They understood our goals and delivered faster than expected. The team was proactive and skilled.',
  },
];

export default function Testimonials() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20" id="testimonials">
      <motion.h2
        className="text-4xl font-extrabold mb-12 text-center text-gray-900 dark:text-white"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        What Our Clients Say
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map(({ name, role, feedback }, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <p className="text-gray-700 dark:text-gray-300 mb-4 italic">“{feedback}”</p>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{name}</h4>
            <p className="text-sm text-blue-600 dark:text-blue-400">{role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
