import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, address, service, frequency, message, paymentMethod } = body

    // Validate required fields
    if (!name || !phone || !address || !service || !frequency) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Here you would typically:
    // 1. Send email notification
    // 2. Save to database
    // 3. Send confirmation to customer
    
    // For now, we'll just log the data
    console.log('New quote request:', {
      name,
      email,
      phone,
      address,
      service,
      frequency,
      message,
      paymentMethod,
      timestamp: new Date().toISOString()
    })

    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 1000))

    return NextResponse.json(
      { 
        success: true, 
        message: 'Quote request received successfully. We\'ll get back to you within 24 hours.' 
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
