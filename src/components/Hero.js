import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Trophy, Users, Calendar, Star } from 'lucide-react';

const Hero = () => {
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
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Floating Elements */}
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute top-20 left-10 w-20 h-20 bg-primary-100 rounded-full backdrop-blur-sm"
      />
      <motion.div
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: '1s' }}
        className="absolute top-40 right-20 w-16 h-16 bg-primary-100 rounded-full backdrop-blur-sm"
      />
      <motion.div
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: '2s' }}
        className="absolute bottom-40 left-20 w-12 h-12 bg-primary-100 rounded-full backdrop-blur-sm"
      />

      <div className="relative max-w-7xl mx-auto container-padding py-32">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center"
        >
          {/* Content */}
          <motion.div variants={itemVariants} className="text-center lg:text-left">
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center px-6 py-3 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-10 border border-primary-200"
            >
              <Trophy className="w-5 h-5 mr-3" />
              Registration Now Open
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="heading-xl text-gray-900 mb-8"
            >
              Galaxy23
              <span className="block text-3xl md:text-4xl lg:text-5xl mt-6 font-light text-gray-700">
                Flag Football Tournament
              </span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-body text-gray-600 max-w-2xl mb-16 leading-relaxed"
            >
              Join the ultimate 7v7 flag football experience! Compete with the best teams, 
              showcase your skills, and battle for the championship trophy in the most 
              prestigious tournament of the year.
            </motion.p>

            {/* Stats */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-3 gap-12 mb-16"
            >
              <div className="text-center">
                <div className="text-5xl font-bold text-primary-600 mb-3">50</div>
                <div className="text-gray-600 text-sm font-medium">Teams Max</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-primary-600 mb-3">7v7</div>
                <div className="text-gray-600 text-sm font-medium">Format</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-primary-600 mb-3">$10K</div>
                <div className="text-gray-600 text-sm font-medium">Prize Pool</div>
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
            <div className="relative bg-gray-50 rounded-3xl p-16 border border-gray-200">
              <div className="aspect-square bg-white rounded-2xl flex items-center justify-center relative overflow-hidden border border-primary-100">
                <div className="text-center text-gray-900 relative z-10">
                  <div className="w-36 h-36 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-8">
                    <Users className="w-20 h-20 text-primary-600" />
                  </div>
                  <h3 className="text-3xl font-semibold mb-4 text-gray-900">Team Registration</h3>
                  <p className="text-gray-600 text-xl">
                    Secure your spot in the tournament
                  </p>
                </div>
                
                {/* Animated background elements */}
                <div className="absolute inset-0">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute top-12 right-12 w-24 h-24 border-2 border-primary-200 rounded-full"
                  />
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-12 left-12 w-20 h-20 border-2 border-primary-200 rounded-full"
                  />
                </div>
              </div>
              
              {/* Floating elements */}
              <motion.div 
                variants={floatingVariants}
                animate="animate"
                className="absolute -top-8 -right-8 w-24 h-24 bg-primary-600 rounded-full flex items-center justify-center shadow-2xl"
              >
                <Calendar className="w-12 h-12 text-white" />
              </motion.div>
              <motion.div 
                variants={floatingVariants}
                animate="animate"
                style={{ animationDelay: '1s' }}
                className="absolute -bottom-8 -left-8 w-20 h-20 bg-primary-600 rounded-full flex items-center justify-center shadow-2xl"
              >
                <Trophy className="w-10 h-10 text-white" />
              </motion.div>
              <motion.div 
                variants={floatingVariants}
                animate="animate"
                style={{ animationDelay: '2s' }}
                className="absolute top-1/2 -right-10 w-16 h-16 bg-accent-500 rounded-full flex items-center justify-center shadow-2xl"
              >
                <Star className="w-8 h-8 text-white" />
              </motion.div>
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