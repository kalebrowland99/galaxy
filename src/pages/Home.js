import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import { motion } from 'framer-motion';
import { 
  Trophy, Users, Calendar, MapPin, 
  Award, Shield, Target 
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

  const stats = [
    { number: '50', label: 'Teams', icon: Users },
    { number: '7v7', label: 'Format', icon: Shield },
    { number: 'Elite', label: 'Competition', icon: Target }
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
      <section className="py-12 lg:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="heading-lg text-gray-900 mb-6">
              Why Choose Galaxy23?
            </h2>
            <p className="text-body text-gray-600 max-w-3xl mx-auto">
              Experience the ultimate 7v7 football tournament with professional organization, 
              competitive play, and unforgettable memories that will last a lifetime.
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
                  className={`card-elevated group w-full ${feature.image ? 'p-0 overflow-hidden' : ''}`}
                >
                  {feature.image ? (
                    <div className="relative w-full aspect-video group-hover:scale-105 transition-transform duration-300">
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          console.error('Image failed to load:', e.target.src);
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/90 to-white/70 flex flex-col justify-end p-4 pb-6">
                        <p className="text-sm md:text-base font-extrabold leading-tight break-words" style={{ 
                          color: '#000000',
                          textShadow: '2px 2px 4px rgba(255, 255, 255, 1), 0 0 8px rgba(255, 255, 255, 0.8)',
                          wordWrap: 'break-word',
                          overflowWrap: 'break-word',
                          fontWeight: '900',
                          fontSize: 'clamp(0.875rem, 2vw, 1rem)'
                        }}>
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <>
                  <div className="w-16 h-16 bg-primary-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="heading-md text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-body-sm text-gray-600">
                    {feature.description}
                  </p>
                    </>
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white" style={{ paddingTop: '48px', paddingBottom: '48px' }}>
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-lg text-gray-900 mb-8">
              Ready to Compete?
            </h2>
            <p className="text-body text-gray-600 mb-12 max-w-2xl mx-auto">
              Don't miss your chance to be part of the most exciting 7v7 football tournament of the year. 
              Register your team today and secure your spot in this elite competition!
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/register" className="btn-secondary">
                Register Your Team
              </Link>
              <Link to="/rules" className="btn-outline">
                View Tournament Rules
              </Link>
              <Link to="/gear" className="btn-outline">
                View Team Gear
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 lg:py-16 bg-primary-600">
        <div className="max-w-7xl mx-auto container-padding">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-3 gap-12 justify-items-center max-w-5xl mx-auto"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-5xl font-bold text-white mb-3">
                    {stat.number}
                  </div>
                  <div className="text-blue-100 font-medium text-lg">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home; 