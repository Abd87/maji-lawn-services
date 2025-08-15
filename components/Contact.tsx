'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Phone, MessageCircle, Mail, MapPin, Clock, Send, Calendar, CreditCard } from 'lucide-react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { cookieUtils } from '@/lib/cookies'

interface QuoteForm {
  name: string
  email: string
  phone: string
  address: string
  service: string
  frequency: string
  message: string
  paymentMethod: string
}

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { register, handleSubmit, reset, formState: { errors }, setValue } = useForm<QuoteForm>()

  useEffect(() => {
    // Load saved quote data from cookies
    const savedQuote = cookieUtils.getQuoteData()
    if (savedQuote) {
      Object.entries(savedQuote).forEach(([key, value]) => {
        if (value && key !== 'timestamp') {
          setValue(key as keyof QuoteForm, value)
        }
      })
    }
  }, [setValue])

  const onSubmit = async (data: QuoteForm) => {
    setIsSubmitting(true)
    
    try {
      // Save quote data to cookies
      cookieUtils.setQuoteData({
        ...data,
        timestamp: new Date().toISOString()
      })

      // Track user interest
      const prefs = cookieUtils.getUserPreferences() || {}
      const interests = prefs.serviceInterests || []
      if (!interests.includes('quote_request')) {
        interests.push('quote_request')
        cookieUtils.setUserPreferences({ ...prefs, serviceInterests: interests })
      }
      
      // Submit to API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (response.ok) {
        toast.success(result.message || 'Thank you! We\'ll get back to you within 24 hours.')
        reset()
      } else {
        toast.error(result.error || 'Something went wrong. Please try again.')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      toast.error('Network error. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="quote" className="py-20 bg-white">
      <div id="contact"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-accent-900 mb-6">
            Get Your Free Quote
          </h2>
          <p className="text-xl text-accent-600 max-w-3xl mx-auto">
            Ready to transform your lawn? Fill out the form below and we'll get back to you with a personalized quote.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-accent-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    {...register('name', { required: 'Name is required' })}
                    className="w-full px-4 py-3 border border-accent-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Your full name"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-accent-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    {...register('phone', { 
                      required: 'Phone number is required',
                      pattern: {
                        value: /^[\+]?[0-9\s\-\(\)]{8,}$/,
                        message: 'Please enter a valid phone number'
                      }
                    })}
                    className="w-full px-4 py-3 border border-accent-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Your phone number"
                    type="tel"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-accent-700 mb-2">
                  Email Address
                </label>
                <input
                  {...register('email', { 
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address'
                    }
                  })}
                  className="w-full px-4 py-3 border border-accent-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-accent-700 mb-2">
                  Property Address *
                </label>
                <input
                  {...register('address', { required: 'Address is required' })}
                  className="w-full px-4 py-3 border border-accent-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Your property address"
                />
                {errors.address && (
                  <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-accent-700 mb-2">
                    Service Type *
                  </label>
                  <select
                    {...register('service', { required: 'Please select a service' })}
                    className="w-full px-4 py-3 border border-accent-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    <option value="regular-mowing">Regular Lawn Mowing</option>
                    <option value="one-time">One-Time Mowing</option>
                    <option value="fertilizing">Fertilizing & Treatment</option>
                    <option value="weed-control">Weed Control</option>
                    <option value="garden-maintenance">Garden Maintenance</option>
                    <option value="premium-package">Premium Package</option>
                  </select>
                  {errors.service && (
                    <p className="text-red-500 text-sm mt-1">{errors.service.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-accent-700 mb-2">
                    Frequency *
                  </label>
                  <select
                    {...register('frequency', { required: 'Please select frequency' })}
                    className="w-full px-4 py-3 border border-accent-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="">Select frequency</option>
                    <option value="weekly">Weekly</option>
                    <option value="fortnightly">Fortnightly</option>
                    <option value="monthly">Monthly</option>
                    <option value="one-time">One-time</option>
                    <option value="custom">Custom schedule</option>
                  </select>
                  {errors.frequency && (
                    <p className="text-red-500 text-sm mt-1">{errors.frequency.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-accent-700 mb-2">
                  Preferred Payment Method
                </label>
                <select
                  {...register('paymentMethod')}
                  className="w-full px-4 py-3 border border-accent-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="">Select payment method</option>
                  <option value="cash">Cash</option>
                  <option value="bank-transfer">Bank Transfer</option>
                  <option value="card">Credit/Debit Card</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-accent-700 mb-2">
                  Additional Details
                </label>
                <textarea
                  {...register('message')}
                  rows={4}
                  className="w-full px-4 py-3 border border-accent-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Tell us about your lawn care needs, property size, special requirements..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary-600 text-white py-4 px-6 rounded-lg hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 flex items-center justify-center text-lg font-semibold"
              >
                {isSubmitting ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Send Quote Request
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-accent-900 mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-accent-900">Phone</h4>
                    <p className="text-accent-600">+61 416 574 047</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-accent-900">WhatsApp</h4>
                    <p className="text-accent-600">Available 24/7</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-accent-900">Service Area</h4>
                    <p className="text-accent-600">Port Macquarie & 2-hour radius</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-accent-900">Business Hours</h4>
                    <p className="text-accent-600">Mon-Fri: 7AM-6PM<br/>Sat: 8AM-4PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-accent-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-accent-900 mb-6">
                Payment Options
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CreditCard className="w-5 h-5 text-primary-600" />
                  <span className="text-accent-700">Cash on completion</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CreditCard className="w-5 h-5 text-primary-600" />
                  <span className="text-accent-700">Bank transfer</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CreditCard className="w-5 h-5 text-primary-600" />
                  <span className="text-accent-700">Credit/Debit card</span>
                </div>
              </div>
            </div>

            <div className="bg-primary-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Why Choose Maji?
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Professional & reliable service</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Competitive pricing</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Same day service available</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Fully insured & licensed</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
