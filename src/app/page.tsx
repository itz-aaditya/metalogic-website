'use client';

import Hero from '../components/Hero';
import Card from '../components/Card';
import About from '../components/About';
import WhyChooseUs from '../components/WhyChooseUs';
import ProductSpotlight from '../components/ProductSpotlight';
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { FaCode, FaMobileAlt, FaCloud } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function HomePage() {
  const services = [
    {
      title: 'Web Development',
      description: 'Build modern, performant websites with the latest technologies.',
      icon: <FaCode size={40} />,
    },
    {
      title: 'Mobile Apps',
      description: 'Create responsive and smooth mobile applications for all platforms.',
      icon: <FaMobileAlt size={40} />,
    },
    {
      title: 'Cloud Solutions',
      description: 'Deploy scalable cloud infrastructure to power your applications.',
      icon: <FaCloud size={40} />,
    },
  ];

  return (
    <>
      <Hero />

      {}
      <section
        id="services"
        className="w-full py-20 bg-gradient-to-r from-blue-50 to-white dark:from-gray-900 dark:to-gray-800"
      >
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-10 leading-snug text-gray-900 dark:text-gray-100 text-center max-w-3xl mx-auto">
            Our Services
          </h1>

          <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.2 },
              },
            }}
          >
            {services.map(({ title, description, icon }) => (
              <motion.div
                key={title}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <Card title={title} description={description} icon={icon} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {}
      <section className="w-full bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <About />
        </div>
      </section>

      <section className="w-full bg-blue-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <WhyChooseUs />
        </div>
      </section>

      <section className="w-full bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <ProductSpotlight />
        </div>
      </section>

      <section className="w-full bg-blue-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <Portfolio />
        </div>
      </section>

      <section className="w-full bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <Testimonials />
        </div>
      </section>

      <section className="w-full bg-blue-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <Contact />
        </div>
      </section>

      <Footer />
    </>
  );
}
