import React from 'react';
import RegistrationForm from '../components/RegistrationForm';
import { motion } from 'framer-motion';
const Register = () => {

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="relative overflow-hidden" style={{ height: '25vh', minHeight: '200px' }}>
        {/* Sunset Football Field Background */}
        <div className="absolute inset-0" style={{ opacity: 0.5 }}>
          <img
            src="/sunset-football-field.png"
            alt="Sunset Football Field"
            className="w-full h-full object-cover"
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="max-w-7xl mx-auto container-padding py-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 
              className="heading-xl mb-6 font-bold"
              style={{
                color: '#8B4513',
                textShadow: '2px 2px 8px rgba(0, 0, 0, 0.5), 0 0 20px rgba(255, 255, 255, 0.8)',
                letterSpacing: '0.05em',
                filter: 'drop-shadow(3px 3px 6px rgba(0, 0, 0, 0.3))',
                fontWeight: '800',
                WebkitFontSmoothing: 'antialiased',
                MozOsxFontSmoothing: 'grayscale'
              }}
            >
              Team Registration
            </h1>
            <p className="text-body max-w-3xl mx-auto" style={{
              color: '#8B4513',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5), 0 0 10px rgba(255, 255, 255, 0.8)',
              fontWeight: '600'
            }}>
              Fill out the form below to register your team for the Galaxy23 tournament. $1,000 per team with a multiple team discount. Secure your spot now with a $250 non-refundable deposit.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Registration Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="heading-lg text-gray-900 mb-4">
              Complete Your Registration
            </h2>
            <p className="text-body text-gray-600">
              Fill out the form below to register your team for the Galaxy23 tournament. $1,000 per team with a multiple team discount. Secure your spot with a $250 non-refundable deposit.
            </p>
          </motion.div>
          
          <RegistrationForm />
        </div>
      </section>
    </div>
  );
};

export default Register; 