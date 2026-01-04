import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import { motion } from 'framer-motion';
import { 
  Trophy, Users, MapPin 
} from 'lucide-react';

// Football Icon Component
const FootballIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="12" cy="12" rx="9" ry="11" fill="currentColor" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M12 1 L12 23 M3 12 L21 12 M7 5 L17 19 M17 5 L7 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M9 8 L15 16 M15 8 L9 16" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
  </svg>
);

const Home = () => {
  const features = [
    {
      icon: Trophy,
      title: 'Championship Trophy',
      description: 'Compete for the prestigious Galaxy23 championship trophy and bragging rights.',
      image: '/trophy.jpeg'
    },
    {
      icon: Users,
      title: '50 Teams Max',
      description: 'Limited to 50 Intermediate through elite teams ensuring competitive play and quality experience.',
      image: '/teams.jpeg'
    },
    {
      icon: MapPin,
      title: 'Prime Location',
      description: 'Hosted at state-of-the-art facilities with professional-grade fields.',
      image: '/oakland scoreboard pic.jpeg'
    },
    {
      icon: FootballIcon,
      title: 'Elite Competition',
      description: 'Face off against the best 7v7 football teams!',
      image: '/7v7 photo 2.jpeg'
    }
  ];

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
    <div className="min-h-screen">
      <Hero />
      
      {/* Features Section */}
      <section className="h-screen flex items-center relative overflow-hidden" style={{
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
            className="text-center mb-12 lg:mb-16"
          >
            <motion.h2 
              className="text-4xl md:text-5xl lg:text-6xl font-black mb-6"
              style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #60a5fa 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: '0 0 30px rgba(102, 126, 234, 0.5)'
              }}
            >
              Why Choose Galaxy23?
            </motion.h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto font-medium">
              Experience the premier 7v7 football tournament. Compete against elite teams, 
              develop your skills, and create lasting memories. Where excellence meets opportunity.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center max-w-7xl mx-auto"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
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
                  {feature.image ? (
                    <>
                      {/* Image Section */}
                      <div className="relative w-full aspect-video overflow-hidden">
                        <img
                          src={feature.image}
                          alt={feature.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          onError={(e) => {
                            console.error('Image failed to load:', e.target.src);
                          }}
                        />
                        {/* Subtle gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                      </div>
                      
                      {/* Content Section - Separate from image */}
                      <div className="p-6 space-y-3">
                        <h3 className="text-xl font-bold text-white">
                          {feature.title}
                        </h3>
                        <p className="text-sm text-gray-300 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </>
                  ) : (
                    <div className="p-6">
                      <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-4"
                        style={{
                          background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
                        }}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-gray-300 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="h-screen flex items-center relative overflow-hidden" style={{ 
        background: 'linear-gradient(180deg, #16213e 0%, #0f172a 100%)'
      }}>
        {/* Animated gradient orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
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
            <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              Secure your team's place in the premier 7v7 football tournament. 
              Limited spots available for elite competition. Registration is now open.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  to="/register" 
                  className="relative inline-block rounded-2xl overflow-hidden group"
                  style={{
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #60a5fa 100%)',
                    padding: '3px',
                    boxShadow: '0 10px 40px rgba(102, 126, 234, 0.4), 0 0 20px rgba(96, 165, 250, 0.3)'
                  }}
                >
                  <span className="block rounded-2xl py-4 px-8 bg-gradient-to-r from-purple-600 to-blue-500 text-white font-black text-lg transition-all duration-300 group-hover:from-purple-500 group-hover:to-blue-400">
                    Register Your Team Now
                  </span>
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  to="/rules" 
                  className="relative inline-block rounded-2xl overflow-hidden group"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1))',
                    backdropFilter: 'blur(10px)',
                    border: '2px solid rgba(255, 255, 255, 0.3)',
                    padding: '3px',
                  }}
                >
                  <span className="block rounded-2xl py-4 px-8 bg-white/10 backdrop-blur-sm text-white font-bold text-lg transition-all duration-300 group-hover:bg-white/20">
                    View Tournament Rules 📋
                  </span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home; 