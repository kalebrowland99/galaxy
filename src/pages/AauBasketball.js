import React from 'react';
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
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6">
              <span className="block">Galaxy23</span>
              <span 
                className="block mt-2"
                style={{
                  background: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                AAU Basketball
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto">
              Elite youth basketball competition. Where champions are made.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { icon: Trophy, title: 'Elite Competition', description: 'Compete against the best AAU basketball teams' },
              { icon: Users, title: 'Multiple Divisions', description: 'Age-appropriate divisions for all skill levels' },
              { icon: MapPin, title: 'Premier Venues', description: 'State-of-the-art basketball facilities' },
              { icon: Calendar, title: 'Coming Soon', description: 'Tournament dates to be announced' }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative p-6 rounded-2xl overflow-hidden group"
                  style={{
                    background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.9), rgba(15, 23, 42, 0.95))',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.4)',
                  }}
                >
                  <div className="relative z-10">
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
            <div 
              className="p-8 md:p-12 rounded-2xl"
              style={{
                background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.9), rgba(15, 23, 42, 0.95))',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)',
              }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Coming Soon
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Galaxy23 is expanding into AAU Basketball! We're bringing the same level of excellence and 
                professionalism that made our 7v7 football tournaments successful to youth basketball.
              </p>
              <p className="text-lg text-gray-300 mb-8">
                Stay tuned for tournament announcements, registration details, and more information about 
                our upcoming AAU Basketball events.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:info@galaxy23corp.com"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold text-lg text-white transition-all duration-300"
                  style={{
                    background: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
                    boxShadow: '0 10px 30px rgba(249, 115, 22, 0.4)',
                  }}
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
