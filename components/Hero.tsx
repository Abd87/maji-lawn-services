'use client'
import { motion } from 'framer-motion'
import { ChevronDown, Phone, MessageCircle, Star } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-secondary-300 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center shadow-2xl">
              <span className="text-white font-bold text-4xl">M</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-accent-900 mb-6">
            Professional
            <span className="text-primary-600 block">Lawn Care</span>
            <span className="text-accent-700 text-3xl md:text-4xl">Port Macquarie & Surrounds</span>
          </h1>

          <p className="text-xl md:text-2xl text-accent-600 mb-8 max-w-3xl mx-auto">
            Transform your outdoor space with our expert lawn mowing services. 
            Serving Port Macquarie and surrounding areas within 2 hours.
          </p>

          {/* Trust Indicators */}
          <div className="flex justify-center items-center space-x-6 mb-8 text-sm text-accent-500">
            <div className="flex items-center space-x-2">
              <div className="flex" role="img" aria-label="5 star rating">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <span>5.0 Rating</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
              <span>500+ Happy Customers</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
              <span>Same Day Service</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="#quote"
              className="inline-flex items-center px-8 py-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-all duration-200 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Get Free Quote
            </a>
            <a
              href="#coverage"
              className="inline-flex items-center px-8 py-4 bg-white text-primary-600 border-2 border-primary-600 rounded-lg hover:bg-primary-50 transition-all duration-200 text-lg font-semibold"
            >
              Check Coverage
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-accent-600">
                         <div className="flex items-center space-x-2">
               <Phone className="w-5 h-5 text-primary-600" />
               <a href="tel:+61480603040" className="hover:text-primary-700 transition-colors duration-200">
                 +61 480 603 040
               </a>
             </div>
            <div className="flex items-center space-x-2">
              <MessageCircle className="w-5 h-5 text-primary-600" />
              <span>WhatsApp Available</span>
            </div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="w-6 h-6 text-accent-400 animate-bounce" />
        </motion.div>
      </div>
    </section>
  )
}
