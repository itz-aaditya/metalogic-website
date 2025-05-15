'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const products = [
  {
    name: 'Gurukul School ERP',
    description: 'A complete digital solution for managing schools, students, and staff efficiently.',
    image: '/products/gurukul.jpg', 
  },
  {
    name: 'HR Management System',
    description: 'Streamline your employee data, payroll, attendance, and more.',
    image: '/products/hrms.jpg', 
  },
  {
    name: 'Smart Accounting',
    description: 'An intuitive, cloud-based accounting platform for businesses of all sizes.',
    image: '/products/accounting.jpg', 
  },
];

export default function ProductSpotlight() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-12 text-center">
        Featured Products
      </h2>
      <div className="grid md:grid-cols-3 gap-10">
        {products.map((product, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
          >
            <div className="relative w-full h-48">
              <Image
                src={product.image}
                alt={product.name}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">{product.name}</h3>
              <p className="text-gray-700 dark:text-gray-300">{product.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
