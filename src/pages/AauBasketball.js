import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Trophy, Users, MapPin, Calendar } from 'lucide-react';

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
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto container-padding px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { icon: Trophy, title: 'Elite Competition', description: 'Compete against the best AAU basketball teams', image: '/basketball-competition.jpeg' },
              { icon: Users, title: 'Multiple Divisions', description: 'Age-appropriate divisions for all skill levels', image: '/basketball-divisions.jpeg' },
              { icon: MapPin, title: 'Premier Venues', description: 'State-of-the-art basketball facilities', image: '/basketball-venue.jpeg' },
              { icon: Calendar, title: 'Coming Soon', description: 'Tournament dates to be announced', image: '/basketball-tournament.jpeg' }
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
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
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

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-16 max-w-4xl mx-auto text-center"
          >
            <div className="card-elevated p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Coming Soon
              </h2>
              <p className="text-2xl md:text-3xl font-bold text-orange-600 mb-8">
                To Murfreesboro, TN: The Galaxy23 Sports Basketball Classic!
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Galaxy23 is expanding into AAU Basketball! We're bringing the same level of excellence and 
                professionalism that made our 7v7 football tournaments successful to youth basketball.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Stay tuned for tournament announcements, registration details, and more information about 
                our upcoming AAU Basketball events.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/basketball-register"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold text-lg text-white transition-all duration-300 btn-primary"
                >
                  Register Your Team
                </Link>
                <a
                  href="mailto:info@galaxy23corp.com"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 btn-outline"
                >
                  Get Notified
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AauBasketball;
