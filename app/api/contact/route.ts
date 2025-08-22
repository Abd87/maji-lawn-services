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

    // Create quote data
    const quoteData = {
      name,
      email: email || 'Not provided',
      phone,
      address,
      service,
      frequency,
      message: message || 'No additional message',
      paymentMethod: paymentMethod || 'Not specified',
      timestamp: new Date().toISOString(),
      id: `quote_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    }

    // Log the quote request (this will appear in Vercel logs)
    console.log('🚨 NEW QUOTE REQUEST RECEIVED 🚨')
    console.log('=====================================')
    console.log('Quote ID:', quoteData.id)
    console.log('Name:', quoteData.name)
    console.log('Phone:', quoteData.phone)
    console.log('Email:', quoteData.email)
    console.log('Address:', quoteData.address)
    console.log('Service:', quoteData.service)
    console.log('Frequency:', quoteData.frequency)
    console.log('Payment Method:', quoteData.paymentMethod)
    console.log('Message:', quoteData.message)
    console.log('Timestamp:', quoteData.timestamp)
    console.log('=====================================')

    // Option 1: Send to webhook (if configured)
    if (process.env.WEBHOOK_URL) {
      try {
        await fetch(process.env.WEBHOOK_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            text: `🚨 New Quote Request from ${name}!\n\n📞 Phone: ${phone}\n📍 Address: ${address}\n🔧 Service: ${service}\n⏰ Frequency: ${frequency}\n\nView in Vercel logs for full details.`
          })
        })
      } catch (webhookError) {
        console.error('Webhook notification failed:', webhookError)
      }
    }

    // Option 2: Send to Discord webhook (if configured)
    if (process.env.DISCORD_WEBHOOK_URL) {
      try {
        await fetch(process.env.DISCORD_WEBHOOK_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            embeds: [{
              title: '🚨 New Quote Request',
              color: 0x00ff00,
              fields: [
                { name: 'Name', value: name, inline: true },
                { name: 'Phone', value: phone, inline: true },
                { name: 'Email', value: email || 'Not provided', inline: true },
                { name: 'Address', value: address, inline: false },
                { name: 'Service', value: service, inline: true },
                { name: 'Frequency', value: frequency, inline: true },
                { name: 'Payment Method', value: paymentMethod || 'Not specified', inline: true },
                { name: 'Message', value: message || 'No additional message', inline: false }
              ],
              timestamp: new Date().toISOString()
            }]
          })
        })
      } catch (discordError) {
        console.error('Discord notification failed:', discordError)
      }
    }

    // Option 3: Send to Slack webhook (if configured)
    if (process.env.SLACK_WEBHOOK_URL) {
      try {
        await fetch(process.env.SLACK_WEBHOOK_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            text: `🚨 New Quote Request from ${name}!\n\n📞 Phone: ${phone}\n📍 Address: ${address}\n🔧 Service: ${service}\n⏰ Frequency: ${frequency}\n\nView in Vercel logs for full details.`
          })
        })
      } catch (slackError) {
        console.error('Slack notification failed:', slackError)
      }
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Quote request received successfully. We\'ll get back to you within 24 hours.',
        quoteId: quoteData.id
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
