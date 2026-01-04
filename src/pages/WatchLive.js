import React from 'react';
import { motion } from 'framer-motion';

const WatchLive = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
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
              className="heading-xl mb-6 font-bold px-4"
              style={{
                color: '#8B4513',
                textShadow: '3px 3px 10px rgba(0, 0, 0, 0.7), 0 0 25px rgba(255, 255, 255, 0.9), 1px 1px 2px rgba(255, 255, 255, 0.5)',
                letterSpacing: '0.05em',
                filter: 'drop-shadow(4px 4px 8px rgba(0, 0, 0, 0.4))',
                fontWeight: '900',
                WebkitFontSmoothing: 'antialiased',
                MozOsxFontSmoothing: 'grayscale',
                textStroke: '1px rgba(255, 255, 255, 0.3)',
                WebkitTextStroke: '1px rgba(255, 255, 255, 0.3)'
              }}
            >
              Watch Live
            </h1>
            <p className="text-body max-w-3xl mx-auto px-4" style={{
              color: '#8B4513',
              textShadow: '2px 2px 6px rgba(0, 0, 0, 0.6), 0 0 15px rgba(255, 255, 255, 0.9), 1px 1px 2px rgba(255, 255, 255, 0.5)',
              fontWeight: '700'
            }}>
              Experience live broadcasts of each event
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto container-padding py-16">
        <div className="text-center">
          <h1 className="text-black text-4xl font-bold mb-8">Live Event Coming Soon</h1>
        </div>
      </div>
    </div>
  );
};

export default WatchLive; 