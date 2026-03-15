# Resend Email Setup Instructions for Registration Notifications

## Overview
Your registration form will send email notifications to `galaxycorp23@gmail.com` using your Resend account.

## Prerequisites
- You have a Resend account (https://resend.com)
- You have your Resend API key

## Deployment Options

### Option 1: Deploy to Vercel (Recommended - Easiest)

#### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

#### Step 2: Login to Vercel
```bash
vercel login
```

#### Step 3: Deploy from your project directory
```bash
cd /Users/G23/Desktop/Galaxy23/galaxy
vercel
```

Follow the prompts:
- Set up and deploy: Yes
- Which scope: Your personal account
- Link to existing project: No
- Project name: galaxy23-api (or whatever you prefer)
- Directory: ./
- Override settings: No

#### Step 4: Add Environment Variable
After deployment, add your Resend API key:
```bash
vercel env add RESEND_API_KEY
```
Paste your Resend API key when prompted.
Select "Production", "Preview", and "Development"

#### Step 5: Redeploy with Environment Variable
```bash
vercel --prod
```

#### Step 6: Update Your Code
You'll get a URL like `https://galaxy23-api.vercel.app`

Open `src/components/RegistrationForm.js` and find this line (around line 116):
```javascript
const response = await fetch('https://YOUR_WEBHOOK_URL/send-registration-email', {
```

Replace it with your Vercel URL:
```javascript
const response = await fetch('https://galaxy23-api.vercel.app/api/send-registration-email', {
```

### Option 2: Deploy to Netlify

#### Step 1: Create netlify.toml
Create a file `netlify.toml` in your project root:
```toml
[build]
  functions = "api"

[[redirects]]
  from = "/api/*"
  to = "/.netlify/functions/:splat"
  status = 200
```

#### Step 2: Install Netlify CLI
```bash
npm install -g netlify-cli
```

#### Step 3: Deploy
```bash
netlify deploy --prod
```

#### Step 4: Add Environment Variable
In Netlify dashboard:
1. Go to Site settings > Environment variables
2. Add `RESEND_API_KEY` with your Resend API key

---

## Resend Domain Verification (Required)

In the serverless function, you'll see:
```javascript
from: 'Galaxy23 Registration <noreply@galaxy23corp.com>'
```

### You need to verify your domain in Resend:

1. Go to https://resend.com/domains
2. Click "Add Domain"
3. Enter `galaxy23corp.com`
4. Follow the DNS verification steps
5. Add the required DNS records to your domain registrar

**OR** use Resend's test domain for now:
Change the `from` field to:
```javascript
from: 'Galaxy23 Registration <onboarding@resend.dev>'
```

This will work immediately but emails might go to spam.

---

## What Gets Sent

Every registration will send an email to `galaxycorp23@gmail.com` containing:
- Team name
- Age group
- Number of players
- Experience level
- Coach name, email, phone, birthday
- Emergency contact info
- **Payment status: "AWAITING PAYMENT"**
- Registration date/time

---

## Testing

After deploying:
1. Rebuild and deploy your frontend
2. Submit a test registration
3. Check `galaxycorp23@gmail.com` for the notification email
4. Check Vercel/Netlify logs if emails aren't arriving

---

## Troubleshooting

**Emails not arriving:**
1. Check Vercel/Netlify function logs
2. Verify RESEND_API_KEY environment variable is set
3. Check Resend dashboard for failed sends
4. Verify domain or use `onboarding@resend.dev`

**CORS errors:**
The API function allows requests from `galaxy23corp.com`. If testing locally, temporarily add:
```javascript
res.setHeader('Access-Control-Allow-Origin', '*');
```

---

## Quick Start (If you want to skip deployment for now)

You can temporarily use a service like **webhook.site**:

1. Go to https://webhook.site
2. Copy your unique URL
3. Update the fetch URL in `RegistrationForm.js` to that URL
4. Test a registration
5. See the data in webhook.site
6. Later, deploy the proper Resend function

This won't send emails but lets you verify the data is being sent correctly.
