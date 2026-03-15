const functions = require('firebase-functions');
const admin = require('firebase-admin');
const { Resend } = require('resend');

admin.initializeApp();

// Initialize Resend with API key from environment variable
const resend = new Resend(functions.config().resend.api_key);

// This function triggers when a new registration is added to Firestore
exports.sendRegistrationEmails = functions.firestore
  .document('registrations/{registrationId}')
  .onCreate(async (snap, context) => {
    try {
      const registration = snap.data();
      
      // Extract registration data
      const {
        teamName,
        ageGroup,
        playerCount,
        experienceLevel,
        coachName,
        coachEmail,
        coachPhone,
        coachBirthday,
        emergencyName,
        emergencyPhone,
      } = registration;

      // Determine which Stripe link to use based on current date
      const currentDate = new Date();
      const april1st2026 = new Date('2026-04-01');
      const stripeLink = currentDate < april1st2026 
        ? 'https://buy.stripe.com/bJe6oH81275XcR84Owa7C09' // Before April 1st
        : 'https://buy.stripe.com/7sYcN5dlm61T7wOa8Qa7C00'; // After April 1st
      
      const pricingText = currentDate < april1st2026
        ? '$150 deposit (Early Bird - Before April 1st)'
        : '$250 deposit (After April 1st)';

      const registrationDate = new Date().toLocaleString();

      // Email 1: Send payment link to the coach/team
      await resend.emails.send({
        from: 'Galaxy23 Registration <onboarding@resend.dev>',
        to: [coachEmail],
        subject: `Registration Confirmed - ${teamName} - Payment Required`,
        html: `
          <h1>Thank You for Registering!</h1>
          
          <p>Hi ${coachName},</p>
          
          <p>Your team <strong>${teamName}</strong> has been successfully registered for the Galaxy23 7v7 Football Tournament!</p>
          
          <h2>Next Step: Complete Your Payment</h2>
          
          <p>To secure your team's spot, please complete the payment:</p>
          
          <p><strong>${pricingText}</strong></p>
          
          <p style="margin: 30px 0;">
            <a href="${stripeLink}" 
               style="background-color: #0070f3; 
                      color: white; 
                      padding: 15px 30px; 
                      text-decoration: none; 
                      border-radius: 5px;
                      display: inline-block;
                      font-weight: bold;">
              Complete Payment Now
            </a>
          </p>
          
          <p>Or copy and paste this link into your browser:<br>
          <a href="${stripeLink}">${stripeLink}</a></p>
          
          <h3>Registration Details</h3>
          <p><strong>Team Name:</strong> ${teamName}</p>
          <p><strong>Age Group:</strong> ${ageGroup}</p>
          <p><strong>Number of Players:</strong> ${playerCount}</p>
          <p><strong>Experience Level:</strong> ${experienceLevel}</p>
          
          <hr>
          
          <p><strong>Important:</strong></p>
          <ul>
            <li>Full payment is due 3 weeks prior to the event</li>
            <li>All dates are subject to change</li>
            <li>Check-in begins 1 hour before your first game</li>
          </ul>
          
          <p>If you have any questions, contact us at <a href="mailto:galaxycorp23@gmail.com">galaxycorp23@gmail.com</a></p>
          
          <p>See you on the field!</p>
          <p><em>- Galaxy23 Team</em></p>
        `,
      });

      // Email 2: Send registration details to owner
      await resend.emails.send({
        from: 'Galaxy23 Registration <onboarding@resend.dev>',
        to: ['galaxycorp23@gmail.com'],
        subject: `New Team Registration: ${teamName}`,
        html: `
          <h1>NEW TEAM REGISTRATION RECEIVED</h1>
          
          <h2>REGISTRATION DETAILS</h2>
          
          <h3>Team Information</h3>
          <p><strong>Team Name:</strong> ${teamName}</p>
          <p><strong>Age Group:</strong> ${ageGroup}</p>
          <p><strong>Number of Players:</strong> ${playerCount}</p>
          <p><strong>Experience Level:</strong> ${experienceLevel}</p>
          
          <h3>Coach Information</h3>
          <p><strong>Coach Name:</strong> ${coachName}</p>
          <p><strong>Email:</strong> ${coachEmail}</p>
          <p><strong>Phone:</strong> ${coachPhone}</p>
          <p><strong>Date of Birth:</strong> ${coachBirthday}</p>
          
          <h3>Emergency Contact</h3>
          <p><strong>Name:</strong> ${emergencyName}</p>
          <p><strong>Phone:</strong> ${emergencyPhone}</p>
          
          <h3>Payment Details</h3>
          <p><strong>Payment Status:</strong> <span style="color: orange; font-weight: bold;">AWAITING PAYMENT</span></p>
          <p><strong>Stripe Link Sent:</strong> <a href="${stripeLink}">${pricingText}</a></p>
          
          <hr>
          <p><em>Registration Date: ${registrationDate}</em></p>
          <p><em>Submitted via galaxy23corp.com</em></p>
          
          <p style="margin-top: 30px; padding: 15px; background-color: #f0f0f0; border-radius: 5px;">
            <strong>Action Required:</strong> Monitor Stripe for payment confirmation from ${coachEmail}
          </p>
        `,
      });

      console.log(`Emails sent successfully for registration: ${teamName}`);
      return null;
    } catch (error) {
      console.error('Error sending registration emails:', error);
      throw error;
    }
  });
