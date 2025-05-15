"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"  
      className="min-h-[80vh] bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center"
    >
      <div className="max-w-7xl mx-auto px-6 text-center w-full">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl sm:text-6xl font-extrabold text-gray-900 dark:text-white mb-6"
        >
          Empowering Ideas through Code
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg text-gray-700 dark:text-gray-300 max-w-xl mx-auto mb-8"
        >
          Metalogic helps you build, scale, and transform your business with cutting-edge digital solutions.
        </motion.p>

        <motion.a
          href="#services"
          whileHover={{ scale: 1.1, boxShadow: "0 8px 15px rgba(59,130,246,0.4)" }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-blue-600 text-white rounded-full font-semibold shadow-md hover:bg-blue-700 transition"
        >
          Explore Services
        </motion.a>
      </div>
    </section>
  );
}
