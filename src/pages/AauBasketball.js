import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Trophy, Users, MapPin } from 'lucide-react';

const AauBasketball = () => {
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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with Background Image */}
      <div className="relative overflow-hidden" style={{ minHeight: '280px' }}>
        {/* AAU Basketball Background */}
        <div className="absolute inset-0" style={{ opacity: 0.5 }}>
          <img
            src="/aau-basketball.jpeg"
            alt="AAU Basketball"
            className="w-full h-full object-cover"
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="max-w-7xl mx-auto container-padding py-12 sm:py-16 md:py-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1
              className="heading-xl mb-4 sm:mb-6 font-bold px-4"
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
              AAU Basketball
            </h1>
            <p className="text-body max-w-3xl mx-auto px-4 sm:px-6" style={{
              color: '#8B4513',
              textShadow: '2px 2px 6px rgba(0, 0, 0, 0.6), 0 0 15px rgba(255, 255, 255, 0.9), 1px 1px 2px rgba(255, 255, 255, 0.5)',
              fontWeight: '700'
            }}>
              Elite youth basketball competition. Where champions are made.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Coming Soon Section */}
      <section className="min-h-screen lg:h-screen flex items-center relative overflow-hidden py-16 lg:py-0" style={{
        background: 'linear-gradient(180deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)'
      }}>
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto container-padding relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8 lg:mb-16"
          >
            <motion.h2 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 lg:mb-6 px-4"
              style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #60a5fa 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: '0 0 30px rgba(102, 126, 234, 0.5)'
              }}
            >
              Why Choose Galaxy23 Basketball?
            </motion.h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto font-medium px-4">
              Experience elite AAU basketball competition. Compete against the best teams, 
              develop your skills, and create lasting memories. Where excellence meets opportunity.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 justify-items-center max-w-7xl mx-auto"
          >
            {[
              { icon: Trophy, title: 'Elite Competition', description: 'Compete against the best AAU basketball teams', image: '/basketball-competition.jpeg' },
              { icon: Users, title: 'Multiple Divisions', description: 'Age-appropriate divisions for all skill levels', image: '/basketball-divisions.jpeg' },
              { icon: MapPin, title: 'Premier Venues', description: 'State-of-the-art basketball facilities', image: '/basketball-venue.jpeg' }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                  className="group w-full rounded-2xl overflow-hidden"
                  style={{
                    background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.9), rgba(15, 23, 42, 0.95))',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.4)',
                  }}
                >
                  {item.image ? (
                    <>
                      {/* Image Section */}
                      <div className="relative w-full aspect-video overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                          onError={(e) => {
                            console.error('Image failed to load:', e.target.src);
                          }}
                        />
                        {/* Subtle gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                      </div>
                      
                      {/* Content Section - Separate from image */}
                      <div className="p-4 sm:p-6 space-y-2 sm:space-y-3">
                        <h3 className="text-lg sm:text-xl font-bold text-white">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-300 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </>
                  ) : (
                    <div className="p-6">
                      <div 
                        className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                        style={{
                          background: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
                        }}
                      >
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-gray-300 text-sm">{item.description}</p>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="min-h-screen lg:h-screen flex items-center relative overflow-hidden py-16 lg:py-0" style={{ 
        background: 'linear-gradient(180deg, #16213e 0%, #0f172a 100%)'
      }}>
        {/* Animated gradient orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 text-center relative z-10 w-full">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight"
            >
              <span className="block text-white font-light">Ready to</span>
              <span className="block font-black" style={{
                background: 'linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                Compete?
              </span>
            </motion.h2>
            <p className="text-2xl md:text-3xl font-bold text-orange-400 mb-6">
              To Murfreesboro, TN: The Galaxy23 Sports Basketball Classic!
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-4">
              Galaxy23 is expanding into AAU Basketball! We're bringing the same level of excellence and 
              professionalism that made our 7v7 football tournaments successful to youth basketball.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-4">
              Stay tuned for tournament announcements, registration details, and more information about 
              our upcoming AAU Basketball events.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto"
              >
                <Link
                  to="/basketball-register"
                  className="relative inline-block rounded-2xl overflow-hidden group w-full sm:w-auto"
                  style={{
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #60a5fa 100%)',
                    padding: '3px',
                    boxShadow: '0 10px 40px rgba(102, 126, 234, 0.4), 0 0 20px rgba(96, 165, 250, 0.3)'
                  }}
                >
                  <span className="block rounded-2xl py-3 sm:py-4 px-6 sm:px-8 bg-gradient-to-r from-purple-600 to-blue-500 text-white font-black text-base sm:text-lg transition-all duration-300 group-hover:from-purple-500 group-hover:to-blue-400">
                    Register Your Team Now
                  </span>
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto"
              >
                <a
                  href="mailto:info@galaxy23corp.com"
                  className="relative inline-block rounded-2xl overflow-hidden group w-full sm:w-auto"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1))',
                    backdropFilter: 'blur(10px)',
                    border: '2px solid rgba(255, 255, 255, 0.3)',
                    padding: '3px',
                  }}
                >
                  <span className="block rounded-2xl py-3 sm:py-4 px-6 sm:px-8 bg-white/10 backdrop-blur-sm text-white font-bold text-base sm:text-lg transition-all duration-300 group-hover:bg-white/20">
                    Get Notified 📧
                  </span>
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AauBasketball;
