'use client';
import { motion } from 'framer-motion';

export default function WhyChooseUs() {
  const points = [
    {
      title: "Innovation at the Core",
      description: "We constantly explore emerging technologies to build cutting-edge, future-ready solutions.",
    },
    {
      title: "Collaboration is Key",
      description: "We work closely with you to deeply understand your goals and challenges.",
    },
    {
      title: "Your Success, Our Purpose",
      description: "We’re driven by your growth—our solutions are tailored to boost your ROI and efficiency.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-12 text-center">
        Why Choose Metalogic?
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {points.map((point, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className="bg-white dark:bg-gray-800 shadow-md p-6 rounded-xl"
          >
            <h3 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
              {point.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300">{point.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
