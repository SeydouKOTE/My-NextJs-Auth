"use client";
import { motion } from 'framer-motion';
import QASection from '@/sections/QASection';
import { BriefcaseBusiness, Users, Globe, BarChart3 } from 'lucide-react';
import { BlogSection } from "@/sections/Blogs";
import ContactBar from '@/sections/ContactSection';

export default function AboutPage() {
  return (
    <div className="bg-[#f9fafe] text-gray-800">
      {/* Hero Section */}
      <section className="relative py-24 px-6 md:px-16 bg-gradient-to-br from-[#00289e] to-[#0052cc] text-white overflow-hidden">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
            Empowering Your Growth
          </h1>
          <p className="text-lg md:text-xl text-gray-100 max-w-2xl mx-auto">
            EPBS Consulting helps companies evolve through smart prospecting,
            business strategy, and customer-centric solutions.
          </p>
        </motion.div>
      </section>

      {/* What We Do */}
      <section className="py-20 px-6 md:px-16">
        <motion.h2
          className="text-4xl font-bold text-center text-[#00289e] mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          What We Do
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: <BriefcaseBusiness className="w-10 h-10 text-[#00289e]" />, 
              title: 'Business Strategy',
              desc: 'Tailored strategies to boost your company performance.'
            },
            {
              icon: <Users className="w-10 h-10 text-[#00289e]" />,
              title: 'Customer Prospecting',
              desc: 'Connecting you with the right audience, efficiently.'
            },
            {
              icon: <Globe className="w-10 h-10 text-[#00289e]" />,
              title: 'Global Outreach',
              desc: 'Expand your reach with multilingual support and global campaigns.'
            },
            {
              icon: <BarChart3 className="w-10 h-10 text-[#00289e]" />,
              title: 'Market Analysis',
              desc: 'Data-driven insights that drive meaningful decisions.'
            }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-[#00289e]">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20 bg-[#eef2ff] px-6 md:px-16">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2
            className="text-4xl font-bold text-[#00289e] mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Our Mission
          </motion.h2>
          <motion.p
            className="text-lg text-gray-700"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            At EPBS Consulting, our mission is to support businesses at all stages of development,
            using a blend of human insight and data-driven methodologies. We stand for excellence,
            personalization, and lasting impact.
          </motion.p>
        </div>
      </section>

      {/* FAQ Section */}
      <QASection />
      <ContactBar/>
      <BlogSection/>

    </div>
  );
}