import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from 'react-hot-toast'
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Maji - Professional Lawn Mowing Services | Port Macquarie & Surrounds',
  description: 'Professional lawn mowing services in Port Macquarie and surrounding areas. Get a free quote today for all your lawn care needs.',
  keywords: 'lawn mowing, Port Macquarie, garden maintenance, lawn care, mowing services',
  openGraph: {
    title: 'Maji - Professional Lawn Mowing Services',
    description: 'Professional lawn mowing services in Port Macquarie and surrounding areas.',
    type: 'website',
    locale: 'en_AU',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Cache Control Headers */}
        <meta httpEquiv="Cache-Control" content="public, max-age=31536000, immutable" />
        <meta httpEquiv="Expires" content="31536000" />
        
        {/* Preload critical resources */}
        <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Maji Lawn Services",
              "description": "Professional lawn mowing services in Port Macquarie and surrounding areas",
              "url": "https://maji-lawn-services.com",
              "telephone": "+61416574047",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Port Macquarie",
                "addressRegion": "NSW",
                "addressCountry": "AU"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": -31.4316,
                "longitude": 152.9089
              },
              "openingHours": "Mo-Fr 07:00-18:00, Sa 08:00-16:00",
              "priceRange": "$$",
              "serviceArea": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": -31.4316,
                  "longitude": 152.9089
                },
                "geoRadius": "120000"
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
        <Toaster position="top-right" />
        <Analytics />
      </body>
    </html>
  )
}
