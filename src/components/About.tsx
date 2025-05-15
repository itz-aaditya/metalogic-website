'use client';
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-12"
    >
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="md:w-1/2"
      >
        <h2 className="text-4xl font-extrabold mb-6 text-gray-900 dark:text-gray-100">
          About Metalogic
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
          Metalogic is dedicated to crafting top-notch digital experiences tailored to
          your business needs. From innovative web applications to scalable cloud
          infrastructures, our team leverages cutting-edge technology and creative
          solutions to empower your growth.
        </p>
      </motion.div>

      <motion.img
        src="/about-illustration.jpg" 
        alt="About Metalogic illustration"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="md:w-1/2 rounded-lg shadow-lg"
      />
    </section>
  );
}
