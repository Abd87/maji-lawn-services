'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { MapPin, CheckCircle, XCircle, Search, Clock, Truck } from 'lucide-react'
import { cookieUtils } from '@/lib/cookies'
import { cacheUtils } from '@/lib/cache'

// Areas within 2 hours of Port Macquarie
const coveredAreas = [
  'Port Macquarie', 'Wauchope', 'Kempsey', 'Taree', 'Forster', 'Tuncurry',
  'Coffs Harbour', 'Bellingen', 'Dorrigo', 'Nambucca Heads', 'Macksville',
  'Kendall', 'Laurieton', 'North Haven', 'Crescent Head', 'South West Rocks',
  'Crowdy Head', 'Harrington', 'Old Bar', 'Manning Point', 'Wallis Lake',
  'Pacific Palms', 'Bulahdelah', 'Nelson Bay', 'Tea Gardens', 'Hawks Nest'
]

export default function CoverageChecker() {
  const [postcode, setPostcode] = useState('')
  const [suburb, setSuburb] = useState('')
  const [isCovered, setIsCovered] = useState<boolean | null>(null)
  const [isChecking, setIsChecking] = useState(false)
  const [lastCheck, setLastCheck] = useState<any>(null)

  useEffect(() => {
    // Load cached coverage areas
    const cachedAreas = cacheUtils.getCoverageAreas()
    if (!cachedAreas) {
      cacheUtils.setCoverageAreas(coveredAreas)
    }

    // Load last coverage check from cookies
    const lastCheckData = cookieUtils.getCoverageCheck()
    if (lastCheckData) {
      setLastCheck(lastCheckData)
      setSuburb(lastCheckData.suburb)
      setIsCovered(lastCheckData.isCovered)
    }
  }, [])

  const checkCoverage = () => {
    setIsChecking(true)
    
    // Check cache first
    const cachedAreas = cacheUtils.getCoverageAreas()
    const searchTerm = suburb.toLowerCase()
    const covered = cachedAreas.some((area: string) => 
      area.toLowerCase().includes(searchTerm)
    )
    
    // Simulate API call delay
    setTimeout(() => {
      setIsCovered(covered)
      setIsChecking(false)
      
      // Save to cookies
      cookieUtils.setCoverageCheck(suburb, covered)
      setLastCheck({ suburb, isCovered: covered, timestamp: new Date().toISOString() })
      
      // Track user interest
      const prefs = cookieUtils.getUserPreferences() || {}
      const interests = prefs.serviceInterests || []
      if (!interests.includes('coverage_check')) {
        interests.push('coverage_check')
        cookieUtils.setUserPreferences({ ...prefs, serviceInterests: interests })
      }
    }, 1000)
  }

  return (
    <section id="coverage" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-accent-900 mb-6">
            Check Your Coverage
          </h2>
          <p className="text-xl text-accent-600">
            Enter your suburb to see if we provide services in your area. 
            We cover Port Macquarie and surrounding areas within 2 hours.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8 shadow-lg"
        >
          <div className="max-w-md mx-auto">
            <div className="mb-6">
              <label htmlFor="suburb" className="block text-sm font-medium text-accent-700 mb-2">
                Your Suburb
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="suburb"
                  value={suburb}
                  onChange={(e) => setSuburb(e.target.value)}
                  placeholder="e.g., Port Macquarie"
                  className="w-full px-4 py-3 border border-accent-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
                <MapPin className="absolute right-3 top-3 w-5 h-5 text-accent-400" />
              </div>
            </div>

            <button
              onClick={checkCoverage}
              disabled={!suburb.trim() || isChecking}
              className="w-full bg-primary-600 text-white py-3 px-6 rounded-lg hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 flex items-center justify-center"
            >
              {isChecking ? (
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              ) : (
                <>
                  <Search className="w-5 h-5 mr-2" />
                  Check Coverage
                </>
              )}
            </button>

            {isCovered !== null && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-6 p-4 rounded-lg"
              >
                {isCovered ? (
                  <div className="flex items-center space-x-3 text-green-700 bg-green-50 p-4 rounded-lg">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    <div>
                      <h3 className="font-semibold">Great news! We cover your area.</h3>
                      <p className="text-sm">We provide services in {suburb}. Get a quote today!</p>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center space-x-3 text-red-700 bg-red-50 p-4 rounded-lg">
                    <XCircle className="w-6 h-6 text-red-600" />
                    <div>
                      <h3 className="font-semibold">Sorry, we don't cover your area yet.</h3>
                      <p className="text-sm">We're expanding our service areas. Contact us to discuss options.</p>
                    </div>
                  </div>
                )}
              </motion.div>
            )}

            {/* Show last check result */}
            {lastCheck && (
              <div className="mt-4 p-3 bg-accent-50 rounded-lg">
                <p className="text-sm text-accent-600">
                  Last checked: {lastCheck.suburb} ({new Date(lastCheck.timestamp).toLocaleDateString()})
                </p>
              </div>
            )}
          </div>
        </motion.div>

        {/* Service Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-xl font-bold text-accent-900 mb-2">Same Day Service</h3>
            <p className="text-accent-600">Quick response times for urgent lawn care needs</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Truck className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-xl font-bold text-accent-900 mb-2">2-Hour Radius</h3>
            <p className="text-accent-600">Serving Port Macquarie and surrounding areas</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-xl font-bold text-accent-900 mb-2">Quality Guarantee</h3>
            <p className="text-accent-600">Satisfaction guaranteed on every job</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-accent-900 mb-6 text-center">
            Areas We Cover
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {coveredAreas.map((area, index) => (
              <div
                key={area}
                className="bg-white p-3 rounded-lg border border-primary-100 text-center text-sm text-accent-700 hover:bg-primary-50 transition-colors duration-200"
              >
                {area}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
