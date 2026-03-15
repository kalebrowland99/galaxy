# Firebase Cloud Functions Setup

## Steps to Deploy

1. **Login to Firebase:**
   ```bash
   npx firebase login
   ```

2. **Initialize Firebase (if not already done):**
   ```bash
   npx firebase init functions
   ```
   - Select your existing Firebase project
   - Choose JavaScript
   - Do NOT overwrite existing files
   - Say YES to install dependencies

3. **Set the Resend API Key:**
   ```bash
   npx firebase functions:config:set resend.api_key="re_4ww15fSc_FZNEGFEKKRq32f6q4WY7th59"
   ```

4. **Deploy the function:**
   ```bash
   npx firebase deploy --only functions
   ```

5. **Test it:**
   - Go to your website and submit a test registration
   - Check that 2 emails are sent (one to coach, one to you)

## What This Does

When someone submits a registration on your website:
1. Data is saved to Firebase Firestore (already working)
2. Firebase Cloud Function automatically triggers
3. Function sends 2 emails via Resend:
   - Email to coach with Stripe payment link
   - Email to you with all registration details

## Upgrade Firebase Plan

Make sure your Firebase project is on the **Blaze (Pay as you go)** plan:
1. Go to https://console.firebase.google.com
2. Select your project
3. Click "Upgrade" if you're on the Spark plan
4. Choose "Blaze" plan

Don't worry - with your traffic, it will likely be free or just a few cents per month!
