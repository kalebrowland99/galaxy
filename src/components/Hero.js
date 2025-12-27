import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Trophy, Users, Calendar } from 'lucide-react';

const Hero = () => {
  const [initialAnimation, setInitialAnimation] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setInitialAnimation(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="relative overflow-hidden bg-white min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-25" 
          style={{
            backgroundImage: "url('/7v7.webp')"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/85 via-white/70 to-white" />
      </div>

      {/* Football Field Background - Vertical */}
      <div className="absolute inset-0 opacity-20" style={{ zIndex: 1 }}>
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 600 1200" preserveAspectRatio="none">
          {/* Field Background - Green */}
          <rect x="0" y="0" width="600" height="1200" fill="#2d5016" />
          
          {/* End Zones - Purple (top and bottom) */}
          <rect x="0" y="0" width="600" height="100" fill="#4a148c" opacity="0.7" />
          <rect x="0" y="1100" width="600" height="100" fill="#4a148c" opacity="0.7" />
          
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
          
          {/* Center Field Logo Area */}
          <circle cx="300" cy="600" r="80" fill="none" stroke="white" strokeWidth="2" opacity="0.4" />
          <line x1="220" y1="600" x2="380" y2="600" stroke="white" strokeWidth="2" opacity="0.4" />
          
          {/* Field Numbers (simplified) */}
          <text x="300" y="150" fill="white" fontSize="60" opacity="0.3" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="bold">50</text>
          <text x="300" y="1050" fill="white" fontSize="60" opacity="0.3" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="bold">50</text>
        </svg>
      </div>


      <div className="relative max-w-7xl mx-auto container-padding py-32" style={{ zIndex: 2 }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center"
        >
          {/* Content */}
          <motion.div variants={itemVariants} className="text-center lg:text-left">
            <Link to="/register" className="inline-block" style={{ position: 'relative', zIndex: 10, marginTop: '-96px' }}>
            <motion.div
              initial={{ 
                  scale: 3,
                opacity: 0,
              }}
                animate={initialAnimation ? {
                scale: 1,
                opacity: 1,
                } : {
                  scale: [1, 1.03, 0.98, 1],
                  opacity: 1,
                  rotate: [0, 3, -3, 0],
                  y: [0, -6, 2, 0]
              }}
                transition={initialAnimation ? {
                  scale: {
                    duration: 1,
                    ease: "easeOut"
                  },
                  opacity: {
                    duration: 0.5,
                    ease: "easeOut"
                  }
                } : {
                  scale: {
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  },
                  rotate: {
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  },
                  y: {
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
              }}
              whileHover={{ 
                  scale: 1.08,
                  rotate: 0
              }}
                className="inline-flex items-center px-8 py-4 rounded-2xl mb-10 relative overflow-hidden group cursor-pointer"
              style={{
                background: 'linear-gradient(135deg, #ff006e 0%, #ffbe0b 25%, #fb5607 50%, #ff006e 75%, #8338ec 100%)',
                backgroundSize: '300% 300%',
                animation: 'gradientShift 3s ease infinite',
                boxShadow: '0 0 30px rgba(255, 0, 110, 0.6), 0 0 60px rgba(131, 56, 236, 0.4), inset 0 0 20px rgba(255, 255, 255, 0.3)',
                border: '2px solid rgba(255, 255, 255, 0.5)',
                zIndex: 10,
              }}
            >
              {/* Team celebration photo background */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden" style={{ zIndex: 0 }}>
                <motion.img
                  src="/7v7 team photo.jpeg"
                  alt="Team celebration"
                  className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                  initial={{ scale: 1.1, opacity: 0 }}
                  animate={{ 
                    scale: [1.1, 1.15, 1.1],
                    opacity: 0.85,
                  }}
                  transition={{
                    scale: {
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut"
                    },
                    opacity: {
                      duration: 0.5,
                      ease: "easeOut"
                    }
                  }}
                  style={{
                    filter: 'brightness(0.95) contrast(1.05)',
                  }}
                  onError={(e) => {
                    console.error('Image failed to load:', e.target.src);
                    // Fallback to alternative image
                    e.target.src = "/7v7 photo 2.jpeg";
                  }}
                  onLoad={() => {
                    console.log('Team photo loaded successfully');
                  }}
                />
                {/* Vignette overlay for better text readability */}
                <div 
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  style={{
                    background: 'radial-gradient(circle, transparent 25%, rgba(0, 0, 0, 0.3) 100%)',
                    zIndex: 1,
                  }}
                />
              </div>

              {/* Animated background gradient - reduced opacity to show photo */}
              <motion.div
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 0, 110, 0.5) 0%, rgba(255, 190, 11, 0.5) 25%, rgba(251, 86, 7, 0.5) 50%, rgba(255, 0, 110, 0.5) 75%, rgba(131, 56, 236, 0.5) 100%)',
                  backgroundSize: '300% 300%',
                  zIndex: 2,
                  pointerEvents: 'none',
                }}
              />
              
              {/* Pulsing glow effect */}
              <motion.div
                animate={{ scale: [1, 1.4], opacity: [0.5, 0] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut" }}
                className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{
                  background: 'radial-gradient(circle, rgba(255, 255, 255, 0.4) 0%, transparent 70%)',
                  filter: 'blur(10px)',
                }}
              />
              <motion.span
                className="absolute inset-0 rounded-2xl border border-white/40"
                animate={{ scale: [1, 1.3], opacity: [0.4, 0] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut", delay: 0.6 }}
              />
              
              {/* Content */}
              <div className="relative z-10 flex items-center">
                <motion.div
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Trophy className="w-6 h-6 mr-3 text-white drop-shadow-lg" />
                </motion.div>
                <span className="text-white font-bold text-base md:text-lg tracking-wide drop-shadow-lg">
                  REGISTRATION NOW OPEN
                </span>
              </div>
              
            </motion.div>
            </Link>
            
            <motion.h1 
              variants={itemVariants}
              className="heading-xl mb-8 font-bold relative inline-block px-8 py-4 rounded-3xl"
              style={{
                letterSpacing: '0.05em',
                filter: 'drop-shadow(5px 5px 10px rgba(0, 0, 0, 0.5))',
                fontWeight: '900',
                WebkitFontSmoothing: 'antialiased',
                MozOsxFontSmoothing: 'grayscale',
                background: 'radial-gradient(ellipse at center, rgba(102, 126, 234, 0.9) 0%, rgba(118, 75, 162, 0.9) 35%, rgba(79, 172, 254, 0.9) 70%, rgba(0, 0, 20, 0.95) 100%)',
                boxShadow: '0 0 30px rgba(102, 126, 234, 0.6), 0 0 60px rgba(118, 75, 162, 0.4), inset 0 0 50px rgba(0, 0, 0, 0.3)',
                position: 'relative',
                zIndex: 1
              }}
            >
              <span
                style={{
                  color: '#DC2626',
                  textShadow: '4px 4px 12px rgba(0, 0, 0, 0.8), 0 0 30px rgba(220, 38, 38, 1), 0 0 50px rgba(220, 38, 38, 0.8), 0 0 70px rgba(220, 38, 38, 0.6), 2px 2px 4px rgba(255, 255, 255, 0.6)',
                  animation: 'shine 3s ease-in-out infinite',
                  textStroke: '1.5px rgba(255, 255, 255, 0.4)',
                  WebkitTextStroke: '1.5px rgba(255, 255, 255, 0.4)'
                }}
              >
                Galaxy23
              </span>
              <span
                style={{
                  color: '#000000',
                  textShadow: '4px 4px 12px rgba(0, 0, 0, 0.8), 2px 2px 4px rgba(255, 255, 255, 0.6)',
                  textStroke: '1.5px rgba(255, 255, 255, 0.4)',
                  WebkitTextStroke: '1.5px rgba(255, 255, 255, 0.4)'
                }}
              >
                Sports
              </span>
            </motion.h1>
            
            {/* Upcoming Event Box */}
            <motion.div
              variants={itemVariants}
              className="mt-6 inline-block px-6 py-4 rounded-2xl border-2 border-primary-600 shadow-lg relative overflow-hidden"
              style={{
                maxWidth: '100%',
                backgroundImage: "url('/galaxy sports logo.JPG')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              <div className="relative z-10 bg-black/40 backdrop-blur-sm rounded-xl px-4 py-3">
                <p className="text-lg md:text-xl font-semibold text-white text-center drop-shadow-lg">
                  Upcoming event: 7v7 Football Tournament April 18th-19th 2026 at Oakland High School in Murfreesboro, TN
                </p>
              </div>
            </motion.div>
            
            <motion.p 
              variants={itemVariants}
              className="text-body text-gray-600 max-w-2xl mb-16 leading-relaxed"
            >
              Join the ultimate 7v7 football experience! Compete with the best teams, 
              showcase your skills, and battle for the championship trophy in the most 
              prestigious tournament of the year.
            </motion.p>

            {/* Stats */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-2 gap-12 mb-16"
            >
              <div className="text-center">
                <div className="text-5xl font-bold text-primary-600 mb-3">50</div>
                <div className="text-gray-600 text-sm font-medium">Teams Max</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-primary-600 mb-3">7v7</div>
                <div className="text-gray-600 text-sm font-medium">Format</div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-8 justify-center lg:justify-start"
            >
              <Link
                to="/register"
                className="btn-secondary inline-flex items-center justify-center group"
              >
                Register Your Team
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                to="/schedule"
                className="btn-outline"
              >
                View Schedule
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
                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="text-3xl font-semibold mb-2 text-gray-900"
                >
                  Team Registration
                </motion.h3>
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

      {/* Wave separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full h-24 text-gray-50"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            fill="currentColor"
          />
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            fill="currentColor"
          />
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </div>
  );
};

export default Hero; 