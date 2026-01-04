import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {

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
    <div className="relative min-h-screen lg:h-screen flex items-center justify-center overflow-hidden" style={{
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)'
    }}>
      {/* Subtle animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Background Image - Subtle */}
      <div className="absolute inset-0 opacity-20">
        <img
          src="/7v7.webp"
          alt="Football Field"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-900/80 to-slate-900/90" />
      </div>


      <div className="relative max-w-7xl mx-auto container-padding pt-24 pb-12 lg:pt-8 lg:pb-8" style={{ zIndex: 2 }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center"
        >
          {/* Content */}
          <motion.div variants={itemVariants} className="text-center lg:text-left space-y-6 lg:space-y-8">
            {/* Headline */}
            <motion.div variants={itemVariants} className="space-y-3 lg:space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
                Galaxy23
                <span className="block mt-2" style={{
                  background: 'linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>
                  Sports
                </span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-xl mx-auto lg:mx-0 px-4 lg:px-0">
                Join the premier student athlete 7v7 football competition. Where talent meets opportunity.
              </p>
            </motion.div>

            {/* Event Details Card */}
            <motion.div
              variants={itemVariants}
              className="inline-block w-full max-w-2xl mx-auto lg:mx-0 px-4 lg:px-0"
            >
              <div className="rounded-2xl p-4 sm:p-6 backdrop-blur-xl border border-white/10"
                style={{
                  background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.9), rgba(15, 23, 42, 0.95))',
                  boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                }}
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xs sm:text-sm font-semibold text-blue-400 uppercase tracking-wider mb-1 sm:mb-2">
                      Upcoming Event
                    </h3>
                    <p className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1 sm:mb-2">
                      End of April 2026
                    </p>
                    <p className="text-sm sm:text-base text-gray-400 flex items-center gap-2">
                      <svg className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="truncate">Murfreesboro, TN</span>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start px-4 lg:px-0"
            >
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
                <Link
                  to="/register"
                  className="inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg text-white transition-all duration-300 group w-full sm:w-auto"
                  style={{
                    background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
                    boxShadow: '0 10px 30px rgba(59, 130, 246, 0.4), 0 1px 0 rgba(255, 255, 255, 0.1) inset'
                  }}
                >
                  Register Your Team
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
                <Link
                  to="/rules"
                  className="inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg text-white transition-all duration-300 border-2 border-white/20 hover:border-white/40 backdrop-blur-sm w-full sm:w-auto"
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)'
                  }}
                >
                  View Details
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Logo Card */}
          <motion.div
            variants={itemVariants}
            className="relative px-4 lg:px-0"
          >
            <div className="rounded-2xl overflow-hidden backdrop-blur-xl border border-white/10"
              style={{
                background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.6), rgba(15, 23, 42, 0.8))',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)'
              }}
            >
              <div className="p-4 sm:p-6 md:p-8">
                <div className="relative rounded-xl overflow-hidden flex items-center justify-center">
                  <img
                    src="/galaxy sports logo.JPG"
                    alt="Galaxy23 Sports Logo"
                    className="w-full h-auto object-contain"
                    style={{
                      maxHeight: '300px'
                    }}
                  />
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
