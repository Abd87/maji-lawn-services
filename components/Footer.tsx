'use client'
import { motion } from 'framer-motion'
import { Phone, MessageCircle, Mail, MapPin, Clock, Facebook, Instagram } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-accent-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <span className="text-2xl font-bold">Maji</span>
            </div>
            <p className="text-accent-300 mb-6 max-w-md">
              Professional lawn care services in Port Macquarie and surrounding areas. 
              We're committed to transforming your outdoor space with quality, reliable service.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-accent-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors duration-200">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-accent-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors duration-200">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#services" className="text-accent-300 hover:text-white transition-colors duration-200">
                  Regular Mowing
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-accent-300 hover:text-white transition-colors duration-200">
                  One-Time Service
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-accent-300 hover:text-white transition-colors duration-200">
                  Fertilizing
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-accent-300 hover:text-white transition-colors duration-200">
                  Weed Control
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-accent-300 hover:text-white transition-colors duration-200">
                  Garden Maintenance
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary-400" />
                <span className="text-accent-300">+61 480 603 040</span>
              </li>
              <li className="flex items-center space-x-3">
                <MessageCircle className="w-4 h-4 text-primary-400" />
                <span className="text-accent-300">WhatsApp Available</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-primary-400" />
                <span className="text-accent-300">Port Macquarie & Surrounds</span>
              </li>
              <li className="flex items-center space-x-3">
                <Clock className="w-4 h-4 text-primary-400" />
                <span className="text-accent-300">Mon-Fri: 7AM-6PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-accent-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-accent-400 text-sm mb-4 md:mb-0">
              © 2024 Maji Lawn Services. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="#privacy" className="text-accent-400 hover:text-white transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="#terms" className="text-accent-400 hover:text-white transition-colors duration-200">
                Terms of Service
              </Link>
              <Link href="#contact" className="text-accent-400 hover:text-white transition-colors duration-200">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
