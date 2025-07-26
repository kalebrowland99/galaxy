import React from 'react';
import Hero from '../components/Hero';
import { motion } from 'framer-motion';
import { 
  Trophy, Users, Calendar, MapPin, Star, 
  Award, Shield, Target 
} from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: Trophy,
      title: 'Championship Trophy',
      description: 'Compete for the prestigious Galaxy23 championship trophy and bragging rights.'
    },
    {
      icon: Users,
      title: '50 Teams Max',
      description: 'Limited to 50 elite teams ensuring competitive play and quality experience.'
    },
    {
      icon: Calendar,
      title: 'Professional Schedule',
      description: 'Well-organized tournament schedule with proper rest periods between games.'
    },
    {
      icon: MapPin,
      title: 'Prime Location',
      description: 'Hosted at state-of-the-art facilities with professional-grade fields.'
    },
    {
      icon: Star,
      title: 'Elite Competition',
      description: 'Face off against the best flag football teams in the region.'
    },
    {
      icon: Award,
      title: 'Cash Prizes',
      description: 'Over $10,000 in cash prizes distributed among winning teams.'
    }
  ];

  const stats = [
    { number: '50', label: 'Teams', icon: Users },
    { number: '7v7', label: 'Format', icon: Shield },
    { number: '$10K', label: 'Prize Pool', icon: Trophy },
    { number: '3', label: 'Divisions', icon: Target }
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
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="heading-lg text-gray-900 mb-6">
              Why Choose Galaxy23?
            </h2>
            <p className="text-body text-gray-600 max-w-3xl mx-auto">
              Experience the ultimate flag football tournament with professional organization, 
              competitive play, and unforgettable memories that will last a lifetime.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="card-elevated group"
                >
                  <div className="w-16 h-16 bg-primary-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="heading-md text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-body-sm text-gray-600">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-primary-600">
        <div className="max-w-7xl mx-auto container-padding">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-12"
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

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto container-padding text-center">
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
              Don't miss your chance to be part of the most exciting flag football tournament of the year. 
              Register your team today and secure your spot in this elite competition!
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="btn-secondary">
                Register Your Team
              </button>
              <button className="btn-outline">
                View Tournament Rules
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home; 