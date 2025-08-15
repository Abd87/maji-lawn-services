'use client'
import { motion } from 'framer-motion'
import { Star, Quote, Calendar, MapPin } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Johnson',
    location: 'Port Macquarie',
    rating: 5,
    text: 'Maji transformed our neglected lawn into a beautiful outdoor space. Professional, reliable, and excellent quality work. Highly recommend!',
    service: 'Regular Maintenance',
    date: '2 weeks ago'
  },
  {
    name: 'Michael Chen',
    location: 'Wauchope',
    rating: 5,
    text: 'Outstanding service! The team is punctual, thorough, and our lawn has never looked better. Great value for money.',
    service: 'Complete Lawn Care',
    date: '1 month ago'
  },
  {
    name: 'Emma Thompson',
    location: 'Taree',
    rating: 5,
    text: 'Reliable and professional service. They always do an amazing job and leave our property spotless. Very happy customer!',
    service: 'Weekly Mowing',
    date: '3 weeks ago'
  },
  {
    name: 'David Wilson',
    location: 'Forster',
    rating: 5,
    text: 'Excellent communication and quality work. Our lawn is now the envy of the neighborhood. Thank you Maji!',
    service: 'Premium Package',
    date: '1 week ago'
  },
  {
    name: 'Lisa Brown',
    location: 'Kempsey',
    rating: 5,
    text: 'Professional, friendly, and affordable. They go above and beyond to ensure customer satisfaction. Highly recommended!',
    service: 'One-time Service',
    date: '2 months ago'
  },
  {
    name: 'Robert Davis',
    location: 'Coffs Harbour',
    rating: 5,
    text: 'Consistent quality and great service. Our lawn maintenance is now hassle-free thanks to Maji. Excellent team!',
    service: 'Monthly Maintenance',
    date: '1 month ago'
  }
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-br from-accent-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-accent-900 mb-6">
            What Our Customers Say
          </h2>
          <p className="text-xl text-accent-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about our services.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <Quote className="w-8 h-8 text-primary-200 mb-4" />
              
              <p className="text-accent-600 mb-6 italic">
                "{testimonial.text}"
              </p>
              
              <div className="border-t border-accent-100 pt-4">
                <div className="font-semibold text-accent-900">
                  {testimonial.name}
                </div>
                <div className="flex items-center text-sm text-accent-500 mb-1">
                  <MapPin className="w-4 h-4 mr-1" />
                  {testimonial.location}
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-xs text-primary-600 font-medium">
                    {testimonial.service}
                  </div>
                  <div className="flex items-center text-xs text-accent-400">
                    <Calendar className="w-3 h-3 mr-1" />
                    {testimonial.date}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-primary-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Join Our Happy Customers
            </h3>
            <p className="text-primary-100 mb-6">
              Experience the difference professional lawn care can make. Get started with a free quote today.
            </p>
            <a
              href="#quote"
              className="inline-flex items-center px-8 py-4 bg-white text-primary-600 rounded-lg hover:bg-primary-50 transition-all duration-200 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Get Your Free Quote
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
