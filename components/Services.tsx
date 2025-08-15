'use client'
import { motion } from 'framer-motion'
import { Scissors, Leaf, Droplets, Shield, Clock, Star, Zap, CheckCircle } from 'lucide-react'

const services = [
  {
    icon: Scissors,
    title: 'Regular Lawn Mowing',
    description: 'Weekly, fortnightly, or monthly maintenance to keep your lawn looking perfect year-round.',
    price: 'From $40',
    features: ['Professional equipment', 'Edging included', 'Clean up after service'],
    popular: false
  },
  {
    icon: Leaf,
    title: 'One-Time Mowing',
    description: 'Perfect for special occasions or when you need a quick lawn refresh.',
    price: 'From $50',
    features: ['Same day service available', 'Full cleanup', 'Quality guarantee'],
    popular: false
  },
  {
    icon: Droplets,
    title: 'Fertilizing & Treatment',
    description: 'Keep your lawn healthy and green with our professional fertilizing services.',
    price: 'From $30',
    features: ['Premium fertilizers', 'Seasonal treatment', 'Growth promotion'],
    popular: false
  },
  {
    icon: Shield,
    title: 'Weed Control',
    description: 'Eliminate weeds and prevent future growth with our effective treatment programs.',
    price: 'From $25',
    features: ['Safe for pets', 'Long-lasting results', 'Prevention included'],
    popular: false
  },
  {
    icon: Clock,
    title: 'Garden Maintenance',
    description: 'Complete garden care including hedge trimming, edging, and cleanup.',
    price: 'From $35',
    features: ['Hedge trimming', 'Garden bed maintenance', 'Seasonal cleanup'],
    popular: false
  },
  {
    icon: Star,
    title: 'Premium Package',
    description: 'Comprehensive lawn care packages for the ultimate outdoor space.',
    price: 'From $80',
    features: ['All services included', 'Priority scheduling', 'Monthly maintenance'],
    popular: true
  }
]

const pricing = [
  {
    service: 'Small Lawn (up to 200m²)',
    regular: '$40',
    oneTime: '$50'
  },
  {
    service: 'Medium Lawn (200-500m²)',
    regular: '$60',
    oneTime: '$75'
  },
  {
    service: 'Large Lawn (500-1000m²)',
    regular: '$80',
    oneTime: '$100'
  },
  {
    service: 'Extra Large (1000m²+)',
    regular: '$100+',
    oneTime: '$125+'
  }
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-accent-900 mb-6">
            Our Services
          </h2>
          <p className="text-xl text-accent-600 max-w-3xl mx-auto">
            Professional lawn care services tailored to your needs. From regular maintenance to complete garden transformation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border ${
                service.popular 
                  ? 'border-primary-300 ring-2 ring-primary-100' 
                  : 'border-primary-100 hover:border-primary-200'
              }`}
            >
              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8 text-primary-600" />
              </div>
              
              <h3 className="text-2xl font-bold text-accent-900 mb-3">
                {service.title}
              </h3>
              
              <p className="text-accent-600 mb-4">
                {service.description}
              </p>
              
              <div className="text-2xl font-bold text-primary-600 mb-4">
                {service.price}
              </div>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-accent-600">
                    <CheckCircle className="w-4 h-4 text-primary-500 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Pricing Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8"
        >
          <h3 className="text-3xl font-bold text-accent-900 mb-8 text-center">
            Transparent Pricing
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-primary-200">
                  <th className="text-left py-4 px-6 font-semibold text-accent-700">Lawn Size</th>
                  <th className="text-center py-4 px-6 font-semibold text-accent-700">Regular Service</th>
                  <th className="text-center py-4 px-6 font-semibold text-accent-700">One-Time Service</th>
                </tr>
              </thead>
              <tbody>
                {pricing.map((item, index) => (
                  <tr key={index} className="border-b border-primary-100">
                    <td className="py-4 px-6 font-medium text-accent-800">{item.service}</td>
                    <td className="py-4 px-6 text-center text-primary-600 font-bold">{item.regular}</td>
                    <td className="py-4 px-6 text-center text-accent-600 font-bold">{item.oneTime}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 text-center text-sm text-accent-600">
            * Prices may vary based on lawn condition, accessibility, and additional services required
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="#quote"
            className="inline-flex items-center px-8 py-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-all duration-200 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <Zap className="w-5 h-5 mr-2" />
            Get Custom Quote
          </a>
        </motion.div>
      </div>
    </section>
  )
}
