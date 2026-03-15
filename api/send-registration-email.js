// Vercel Serverless Function to send registration emails via Resend
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Enable CORS for your domain
  res.setHeader('Access-Control-Allow-Origin', 'https://galaxy23corp.com');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  try {
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
      paymentStatus,
      registrationDate,
    } = req.body;

    // Send email via Resend
    const data = await resend.emails.send({
      from: 'Galaxy23 Registration <noreply@galaxy23corp.com>', // You'll need to verify this domain in Resend
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
        
        <h3>Payment Status</h3>
        <p><strong style="color: orange;">${paymentStatus}</strong></p>
        
        <hr>
        <p><em>Registration Date: ${registrationDate}</em></p>
        <p><em>Submitted via galaxy23corp.com</em></p>
      `,
    });

    return res.status(200).json({ success: true, data });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}
