# Galaxy23 Flag Football Tournament Website

A modern, responsive website for the Galaxy23 Flag Football Tournament featuring team registration, live streaming, tournament scheduling, and sponsorship opportunities.

## Features

- 🏈 **Team Registration**: Multi-step form with Stripe payment integration
- 📅 **Tournament Schedule**: Interactive schedule with filtering and game details
- 📺 **Live Streaming**: Watch live games with real-time updates
- 💰 **Sponsorship Management**: Showcase sponsors and sponsorship opportunities
- 📱 **Responsive Design**: Mobile-first design that works on all devices
- 🎨 **Modern UI**: Beautiful animations and Galaxy23 branding
- 🔥 **Firebase Integration**: Backend for data management and authentication
- 💳 **Stripe Payments**: Secure payment processing for registration fees

## Tech Stack

- **Frontend**: React 18, Tailwind CSS, Framer Motion
- **Backend**: Firebase (Firestore, Authentication, Storage)
- **Payments**: Stripe
- **Routing**: React Router DOM
- **Forms**: React Hook Form
- **Notifications**: React Hot Toast
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Firebase account
- Stripe account (for payments)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd galaxy23-tournament
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Firebase**
   - Create a new Firebase project
   - Enable Firestore, Authentication, and Storage
   - Copy your Firebase config to `src/firebase/config.js`

4. **Set up Stripe**
   - Create a Stripe account
   - Get your publishable key
   - Add it to your environment variables

5. **Environment Variables**
   Create a `.env` file in the root directory:
   ```env
   REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
   REACT_APP_FIREBASE_PROJECT_ID=your_firebase_project_id
   REACT_APP_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
   REACT_APP_FIREBASE_APP_ID=your_firebase_app_id
   REACT_APP_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
   ```

6. **Start the development server**
   ```bash
   npm start
   ```

The application will be available at `http://localhost:3000`

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── Navbar.js       # Navigation component
│   ├── Hero.js         # Hero section component
│   └── RegistrationForm.js # Team registration form
├── pages/              # Page components
│   ├── Home.js         # Home page
│   ├── Register.js     # Registration page
│   ├── Schedule.js     # Tournament schedule
│   ├── WatchLive.js    # Live streaming page
│   ├── Sponsors.js     # Sponsors page
│   └── About.js        # About page
├── firebase/           # Firebase configuration
│   └── config.js       # Firebase setup
├── App.js              # Main app component
├── index.js            # App entry point
└── index.css           # Global styles
```

## Key Features Explained

### Team Registration
- Multi-step form with validation
- Coach and emergency contact information
- Liability waiver agreement
- Stripe payment integration
- Email receipt generation

### Tournament Schedule
- Filter by day and division
- Expandable game details
- Real-time status updates
- Mobile-responsive design

### Live Streaming
- Video player interface
- Live game selection
- Viewer count and game stats
- Upcoming games list

### Sponsorship Management
- Sponsor showcase
- Tiered sponsorship opportunities
- Benefits and pricing
- Contact information

## Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Firebase Hosting
1. Install Firebase CLI: `npm install -g firebase-tools`
2. Login: `firebase login`
3. Initialize: `firebase init hosting`
4. Deploy: `firebase deploy`

## Customization

### Colors and Branding
The color scheme can be customized in `tailwind.config.js`:
- Galaxy blue: `galaxy-600` (#0ea5e9)
- Sport red: `sport-600` (#ef4444)

### Content
Update tournament information, dates, and content in the respective page components.

### Styling
Modify styles in `src/index.css` and component-specific CSS classes.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support and questions, please contact:
- Email: info@galaxy23.com
- Phone: (555) 123-4567

## Acknowledgments

- Flag football community
- Tournament organizers
- Sponsors and partners
- Development team 