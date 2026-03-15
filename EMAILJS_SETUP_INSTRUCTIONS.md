# EmailJS Setup Instructions for Registration Notifications

## Overview
Your registration form is now configured to send email notifications to `galaxycorp23@gmail.com` whenever someone registers. You need to set up a free EmailJS account to make this work.

## Step 1: Create EmailJS Account
1. Go to https://www.emailjs.com/
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Add Email Service
1. Once logged in, go to "Email Services" in the dashboard
2. Click "Add New Service"
3. Choose "Gmail" as your email provider
4. Click "Connect Account" and sign in with `galaxycorp23@gmail.com`
5. Give your service a name (e.g., "Galaxy23 Notifications")
6. Copy the **Service ID** - you'll need this

## Step 3: Create Email Template
1. Go to "Email Templates" in the dashboard
2. Click "Create New Template"
3. Name it "Registration Notification"
4. Use this template content:

### Subject:
```
New Team Registration: {{team_name}}
```

### Body:
```
NEW TEAM REGISTRATION RECEIVED

REGISTRATION DETAILS:
====================

Team Information:
-----------------
Team Name: {{team_name}}
Age Group: {{age_group}}
Number of Players: {{player_count}}
Experience Level: {{experience_level}}

Coach Information:
------------------
Coach Name: {{coach_name}}
Email: {{coach_email}}
Phone: {{coach_phone}}
Date of Birth: {{coach_birthday}}

Emergency Contact:
------------------
Name: {{emergency_name}}
Phone: {{emergency_phone}}

Payment Status:
---------------
{{payment_status}}

Registration Date: {{registration_date}}

====================

This registration was submitted through galaxy23corp.com
```

5. Click "Save"
6. Copy the **Template ID** - you'll need this

## Step 4: Get Your Public Key
1. Go to "Account" in the dashboard
2. Find "API Keys" section
3. Copy your **Public Key** - you'll need this

## Step 5: Update Your Code
Open the file: `src/components/RegistrationForm.js`

Find these lines (around line 107-111):
```javascript
await emailjs.send(
  'YOUR_SERVICE_ID',    // Replace with your Service ID from Step 2
  'YOUR_TEMPLATE_ID',   // Replace with your Template ID from Step 3
  emailParams,
  'YOUR_PUBLIC_KEY'     // Replace with your Public Key from Step 4
);
```

Replace:
- `YOUR_SERVICE_ID` with the Service ID from Step 2
- `YOUR_TEMPLATE_ID` with the Template ID from Step 3
- `YOUR_PUBLIC_KEY` with the Public Key from Step 4

Example:
```javascript
await emailjs.send(
  'service_abc123',
  'template_xyz789',
  emailParams,
  'pk_1234567890abcdef'
);
```

## Step 6: Test It
1. Save your changes
2. Rebuild and deploy your site
3. Submit a test registration
4. Check `galaxycorp23@gmail.com` for the notification email

## What Gets Sent
Every registration will send an email to `galaxycorp23@gmail.com` containing:
- Team name
- Age group
- Number of players
- Experience level
- Coach name, email, phone, birthday
- Emergency contact info
- Payment status (currently shows "AWAITING PAYMENT")
- Registration date/time

## Free Tier Limits
- EmailJS free tier: 200 emails per month
- This should be plenty for your tournament registrations

## Need Help?
If you run into any issues setting this up, contact EmailJS support or let me know!
