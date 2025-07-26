import React from 'react';
import RegistrationForm from '../components/RegistrationForm';
import { motion } from 'framer-motion';
import { Users, Trophy, Award } from 'lucide-react';

const Register = () => {
  const features = [
    {
      icon: Users,
      title: 'Team Registration',
      description: 'Register your team with all required information and documentation.'
    },
    {
      icon: Trophy,
      title: 'Tournament Entry',
      description: 'Secure your spot in the most prestigious flag football tournament.'
    },
    {
      icon: Award,
      title: 'Prize Pool',
      description: 'Compete for over $10,000 in cash prizes and championship trophies.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto container-padding py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="heading-xl mb-6">
              Team Registration
            </h1>
            <p className="text-body text-blue-100 max-w-3xl mx-auto">
              Join the Galaxy23 Flag Football Tournament! Register your team below and secure your spot 
              in the most competitive 7v7 flag football tournament of the year.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="heading-md text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-body-sm text-gray-600">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Registration Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="heading-lg text-gray-900 mb-4">
              Complete Your Registration
            </h2>
            <p className="text-body text-gray-600">
              Fill out the form below to register your team for the Galaxy23 tournament.
            </p>
          </motion.div>
          
          <RegistrationForm />
        </div>
      </section>
    </div>
  );
};

export default Register; 