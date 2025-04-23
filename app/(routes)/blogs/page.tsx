'use client'

import { useState } from 'react'
import { blogs } from '@/data/blog'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import Contact from '@/sections/ContactSection'

const categories = ['Tous', 'Biodiversité', 'Mobilité', 'RSE', 'Climat']

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState('Tous')
  const [hoveredCard, setHoveredCard] = useState(null)

  const filteredBlogs = activeCategory === 'Tous' 
    ? blogs 
    : blogs.filter(b => b.category === activeCategory)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - Version améliorée */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#001a72] via-[#0025b5] to-[#0f35f5]">
        {/* Effets de lumière */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white rounded-full filter blur-[80px]"></div>
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-blue-300 rounded-full filter blur-[100px]"></div>
        </div>

        <div className="container mx-auto px-6 py-32 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            
            <motion.h1
              className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="block">Stratégies</span>
              <span className="bg-gradient-to-r from-blue-300 to-white bg-clip-text text-transparent">durables</span>
            </motion.h1>
            
            <motion.p
              className="text-xl text-blue-100 max-w-2xl mx-auto mb-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Expertise et analyses pour des transformations responsables et performantes
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <div className="inline-flex bg-white/10 backdrop-blur-sm p-1 rounded-lg border border-white/20">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      setActiveCategory(cat)
                      document.getElementById('blog-grid')?.scrollIntoView({ behavior: 'smooth' })
                    }}
                    className={`px-6 py-2 text-sm font-medium rounded-md transition-all ${
                      activeCategory === cat
                        ? 'bg-white text-[#001a72] shadow-md'
                        : 'text-white hover:bg-white/20'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
        

        {/* Vague de séparation inversée */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none" 
            className="relative block w-full h-20"
          >
            <path 
              d="M1200,120V73.71c-47.79-22.2-103.59-32.17-158-28-70.36,5.37-136.33,33.31-206.8,37.5C761.36,87.57,687.66,66.33,617,47.95c-69.27-18-138.3-24.88-209.4-13.08-36.15,6-69.85,17.84-104.45,29.34C210.51,95,87-14.29,0,67.53V120Z" 
              fill="#f8fafc" 
              className="fill-current text-gray-50"
            ></path>
          </svg>
        </div>
      </div>

      {/* Grille de blogs */}
      <div id="blog-grid" className="container mx-auto px-6 py-20">
        <AnimatePresence>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((blog) => (
              <motion.div
                key={blog.id}
                layout
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, type: 'spring' }}
                className="relative group"
                onHoverStart={() => setHoveredCard(null)}
                onHoverEnd={() => setHoveredCard(null)}
              >
                <div className="relative h-full bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200">
                  {/* Image */}
                  <div className="relative h-60 overflow-hidden group">

                {/* L’image */}
                <motion.img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                />

                {/* Overlay qui couvre l’image par défaut et slide vers le bas au hover */}
                <div className="absolute inset-0 bg-[#0025b5]/50 group-hover:translate-y-full transition-transform duration-500 z-0" />

                {/* Texte EPBS géant transparent, plus visible au hover */}
                <h2 className="absolute inset-0 flex items-center justify-center text-[5rem] font-black text-white/90 group-hover:text-white transition duration-500 z-10">
                    EPBS
                </h2>

                {/* Le badge catégorie */}
                <span className="absolute top-4 left-4 px-3 py-1 text-xs font-bold text-white bg-[#001a72] rounded-md z-20">
                    {blog.category}
                </span>
                </div>

                  
                  {/* Contenu */}
                  <div className="p-6">
                    <span className="text-xs text-[#0f35f5] font-semibold tracking-wider">{blog.date}</span>
                    <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3 leading-tight group-hover:text-[#0025b5] transition-colors">
                      {blog.title}
                    </h3>
                    <p className="text-gray-600 mb-5">{blog.excerpt}</p>
                    
                    <motion.div whileHover={{ x: 5 }}>
                      <Link
                        href={`/app/(routes)/blogs/${blog.id}`}
                        className="inline-flex items-center font-bold text-[#001a72] hover:text-[#0f35f5] transition-colors"
                      >
                        Lire l'article
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                      </Link>
                    </motion.div>
                  </div>
                </div>

                {/* Effet de survol */}
                {hoveredCard === blog.id && (
                  <motion.div 
                    className="absolute inset-0 border-2 border-[#0f35f5] rounded-xl pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </AnimatePresence>
      </div>

      {/* contact */}
      <Contact />


    </div>
  )
}

export default BlogPage