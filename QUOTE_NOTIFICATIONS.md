# Quote Notifications Setup Guide

## How to Receive Quote Requests on Vercel

When customers submit quote requests through your website, you have several options to receive notifications:

### Option 1: Vercel Logs (Default - No Setup Required)
- All quote requests are logged to Vercel's function logs
- Access logs in your Vercel dashboard under Functions > API Routes
- Logs include all quote details with emoji formatting for easy reading

### Option 2: Discord Notifications (Recommended)
1. Create a Discord server or use an existing one
2. Go to Server Settings > Integrations > Webhooks
3. Create a new webhook
4. Copy the webhook URL
5. Add to Vercel environment variables:
   ```
   DISCORD_WEBHOOK_URL=https://discord.com/api/webhooks/your-webhook-url
   ```

### Option 3: Slack Notifications
1. Create a Slack app or use an existing one
2. Set up incoming webhooks
3. Copy the webhook URL
4. Add to Vercel environment variables:
   ```
   SLACK_WEBHOOK_URL=https://hooks.slack.com/services/your-webhook-url
   ```

### Option 4: Generic Webhook
1. Use any webhook service (Zapier, Make.com, etc.)
2. Add to Vercel environment variables:
   ```
   WEBHOOK_URL=https://your-webhook-service.com/webhook
   ```

### Option 5: Email Notifications (Advanced)
1. Sign up for Resend (resend.com) - free tier available
2. Get your API key
3. Add to Vercel environment variables:
   ```
   RESEND_API_KEY=re_your_api_key_here
   NOTIFICATION_EMAIL=your-email@example.com
   ```

## Setting Up Environment Variables in Vercel

1. Go to your Vercel dashboard
2. Select your project
3. Go to Settings > Environment Variables
4. Add the variables you want to use
5. Redeploy your project

## What You'll Receive

Each quote request includes:
- Customer name and contact details
- Service requirements
- Address and frequency
- Payment method preference
- Any additional message
- Unique quote ID for tracking

## Testing Your Setup

1. Submit a test quote through your website
2. Check Vercel logs immediately
3. Verify notifications are working
4. Check your chosen notification method

## Troubleshooting

- If notifications aren't working, check Vercel logs for errors
- Ensure environment variables are correctly set
- Verify webhook URLs are valid
- Check that your notification service is active

## Best Practices

- Set up multiple notification methods for redundancy
- Monitor Vercel logs regularly
- Respond to quotes within 24 hours
- Keep your contact information updated
- Current phone: +61 480 603 040
- Current email: Hello@maji.net.au
