import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Users, Calendar, Gift } from 'lucide-react'; // Gift is used for Giving Back

const Hero = () => {
  const [initialAnimation, setInitialAnimation] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setInitialAnimation(false);
    }, 1000); // Duration of initial animation
    return () => clearTimeout(timer);
  }, []);

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  return (
    <div className="relative min-h-screen flex items-start justify-center overflow-hidden pt-8 pb-12">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/7v7.webp"
          alt="Football Field"
          className="w-full h-full object-cover"
        />
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-black opacity-50" />
      </div>

      {/* Football Field Background - Vertical */}
      <div className="absolute inset-0 opacity-20" style={{ zIndex: 1 }}>
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 600 1200" preserveAspectRatio="none">
          {/* Field Background - Green */}
          <rect x="0" y="0" width="600" height="1200" fill="#2d5016" />

          {/* End Zones - Purple (top and bottom) */}
          <rect x="0" y="0" width="600" height="100" fill="#6a0dad" />
          <rect x="0" y="1100" width="600" height="100" fill="#6a0dad" />

          {/* Yard Lines - White (vertical lines) */}
          {[100, 200, 300, 400, 500, 600, 700, 800, 900, 1000].map((y) => (
            <line key={y} x1="0" y1={y} x2="600" y2={y} stroke="white" strokeWidth="2" opacity="0.6" />
          ))}

          {/* Hash Marks (horizontal marks on sides) */}
          {[100, 200, 300, 400, 500, 600, 700, 800, 900, 1000].map((y) => (
            <g key={`hash-${y}`}>
              <line x1="200" y1={y} x2="220" y2={y} stroke="white" strokeWidth="1.5" opacity="0.5" />
              <line x1="380" y1={y} x2="400" y2={y} stroke="white" strokeWidth="1.5" opacity="0.5" />
            </g>
          ))}

          {/* Field Numbers (simplified) */}
          <text x="300" y="150" fill="white" fontSize="60" opacity="0.3" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="bold">50</text>
          <text x="300" y="1050" fill="white" fontSize="60" opacity="0.3" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="bold">50</text>
        </svg>
      </div>


      <div className="relative max-w-7xl mx-auto container-padding pt-8 lg:pt-12 pb-8" style={{ zIndex: 2 }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* Content */}
          <motion.div variants={itemVariants} className="text-center lg:text-left">
            <motion.div
              variants={itemVariants}
              className="mb-6 relative inline-block rounded-2xl overflow-hidden w-full max-w-md"
            >
              <img
                src="/galaxy sports logo.JPG"
                alt="Galaxy23 Sports"
                className="max-w-full h-auto rounded-2xl w-full"
                style={{
                  maxHeight: '281px',
                  objectFit: 'contain'
                }}
              />
            </motion.div>

            {/* Upcoming Event Box */}
            <motion.div
              variants={itemVariants}
              className="mb-6 inline-block px-6 py-4 rounded-2xl shadow-lg w-full max-w-2xl"
              style={{
                backgroundColor: '#000000'
              }}
            >
              <p className="text-base md:text-lg lg:text-xl font-semibold text-white text-center">
                Upcoming event: 7v7 Football Tournament End of April 2026 in Murfreesboro, TN.
              </p>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg lg:text-xl text-white max-w-2xl mb-8 leading-relaxed font-semibold drop-shadow-lg"
            >
              Join the ultimate 7v7 experience! Compete with the best teams,
              showcase your skills, and battle for the championship trophy in the most
              prestigious tournament of the year.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center lg:justify-start"
            >
              <Link
                to="/register"
                className="btn-secondary inline-flex items-center justify-center group"
              >
                Register Your Team
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Visual Elements */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <div className="relative bg-gray-50 rounded-3xl p-6 sm:p-10 border border-gray-200 shadow-2xl">
              <div className="text-center mb-8">
                <Link to="/register">
                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.1, color: '#6a0dad' }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="text-3xl font-semibold mb-2 text-primary-600 cursor-pointer"
                  >
                    Team Registration
                  </motion.h3>
                </Link>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                  className="text-gray-600 text-lg"
                >
                  Secure your spot in the tournament
                </motion.p>
              </div>

              <div className="relative rounded-2xl overflow-hidden border border-primary-100 aspect-[4/3]">
                <video
                  src="/animated logo video.MOV"
                  autoPlay
                  loop
                  playsInline
                  muted
                  className="w-full h-full object-cover"
                >
                  Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white drop-shadow-lg">
                  <p className="text-lg sm:text-2xl font-semibold">Galaxy23 7v7 Tournament</p>
                </div>
              </div>

            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
