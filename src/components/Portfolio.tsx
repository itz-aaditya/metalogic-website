'use client';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A scalable, secure online store with real-time analytics and modern UI.',
    image: '/projects/ecommerce.jpg', 
  },
  {
    title: 'Healthcare App',
    description: 'Patient scheduling, prescriptions, and real-time video consultation system.',
    image: '/projects/health care.jpg',
  },
  {
    title: 'Travel Booking System',
    description: 'Full-featured travel planning and booking platform with multi-language support.',
    image: '/projects/travel.jpg',
  },
];

export default function Portfolio() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20" id="portfolio">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-extrabold mb-12 text-gray-900 dark:text-white text-center"
      >
        Our Projects
      </motion.h2>
      <div className="grid md:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">{project.title}</h3>
              <p className="mt-2 text-gray-700 dark:text-gray-300">{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
