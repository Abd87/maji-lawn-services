'use client'
import { motion } from 'framer-motion'
import { Home, Leaf, Heart, TrendingUp, Users, Shield } from 'lucide-react'

const benefits = [
  {
    icon: Home,
    title: 'Increase Property Value',
    description: 'Well-maintained lawns can increase your property value by 5-15%, making it a smart investment for homeowners.',
    stat: '5-15%'
  },
  {
    icon: Leaf,
    title: 'Environmental Benefits',
    description: 'Grass absorbs CO2, produces oxygen, prevents soil erosion, and helps maintain a healthy ecosystem.',
  },
  {
    icon: Heart,
    title: 'Health & Safety',
    description: 'Regular lawn care reduces the risk of accidents and injuries, especially for children and the elderly.',
  },
  {
    icon: TrendingUp,
    title: 'Increased Property Value',
    description: 'Well-maintained lawns can increase your property value by 5-15%, making it a smart investment for homeowners.',
  },
  {
    icon: Users,
    title: 'Community Benefits',
    description: 'A well-kept lawn contributes to a better community environment and fosters a sense of pride.',
  },
  {
    icon: Shield,
    title: 'Protection Against Pests',
    description: 'Regular lawn care helps prevent pest infestations and reduces the need for chemical treatments.',
  }
]

export default function WhyLawnCare() {
  return (
    <section id="why-lawn-care" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-accent-900 mb-6">
            Why Choose Lawn Care?
          </h2>
          <p className="text-xl text-accent-600 max-w-3xl mx-auto">
            Discover the numerous benefits of professional lawn care and why it's essential for your property.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-primary-100 hover:border-primary-200"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                <benefit.icon className="w-8 h-8 text-primary-600" />
              </div>
              
              <h3 className="text-2xl font-bold text-accent-900 mb-3">
                {benefit.title}
              </h3>
              
              <p className="text-accent-600 mb-4">
                {benefit.description}
              </p>
              
              {benefit.stat && (
                <div className="text-2xl font-bold text-primary-600 mb-4">
                  {benefit.stat}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

