import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Trophy, Users, Heart, Target } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Trophy,
      title: 'Excellence',
      description: 'We strive for excellence in every aspect of our tournament, from organization to competition.'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Building a strong sports community through sportsmanship and camaraderie.'
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Fueled by our passion in providing the best experience possible at all events.'
    },
    {
      icon: Target,
      title: 'Integrity',
      description: 'Maintaining the highest standards of fair play and ethical competition.'
    }
  ];

  const team = [
    {
      name: 'Dj Pendergrass',
      role: 'Events Coordinator',
      bio: 'Dj has been a Multi sport head coach for 19+ years teaching kids what it takes to become men/women while helping them to excel. He is a youth community advocate',
      image: '/DJ 1.jpeg'
    },
    {
      name: 'Evan Smith',
      role: 'Operations Manager',
      bio: 'Evan has 19+ years working big live video production\'s in sports, music and corperate events. He is also a  youth community advocate',
      image: '/evan new galaxy.JPEG'
    },
    {
      name: 'Jacob Schneider',
      role: 'Technical Director',
      bio: 'Jacob has 19+ years of overseeing big projects to make sure they are successful. He is also a youth community advocate',
      image: '/jake piece of shit picture.PNG'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="relative overflow-hidden" style={{ minHeight: '280px' }}>
        {/* Sunset Football Field Background */}
        <div className="absolute inset-0" style={{ opacity: 0.5 }}>
          <img
            src="/sunset-football-field.png"
            alt="Sunset Football Field"
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
              About Galaxy23
            </h1>
            <p className="text-body max-w-3xl mx-auto px-4 sm:px-6" style={{
              color: '#8B4513',
              textShadow: '2px 2px 6px rgba(0, 0, 0, 0.6), 0 0 15px rgba(255, 255, 255, 0.9), 1px 1px 2px rgba(255, 255, 255, 0.5)',
              fontWeight: '700'
            }}>
              Discover the story behind the most prestigious 7v7 tournament in the region.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="heading-lg text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-body text-gray-600 mb-6">
                Galaxy23 is dedicated to promoting student athletes by providing a premier competitive platform for most sports of all skill levels. We believe in fostering sportsmanship, building communities, and creating unforgettable experiences through athletics.
              </p>
              <p className="text-body text-gray-600">
                Our tournament brings together the best teams, coaches, and fans to celebrate
                the spirit of competition while maintaining the highest standards of organization
                and fair play.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-primary-100 rounded-3xl p-12">
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">
                  Our Vision
                </h3>
                <p className="text-gray-600 text-center">
                  To become the most respected and sought-after organization in the nation, setting the standard for competitive excellence, community engagement, and academic advancement.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="heading-lg text-gray-900 mb-6">
              Our Values
            </h2>
            <p className="text-body text-gray-600 max-w-3xl mx-auto">
              These core values guide everything we do and shape the Galaxy23 experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="heading-md text-gray-900 mb-4 break-words">
                    {value.title}
                  </h3>
                  <p className="text-body-sm text-gray-600 break-words">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="heading-lg text-gray-900 mb-6">
              Our Team
            </h2>
            <p className="text-body text-gray-600 max-w-3xl mx-auto">
              A group of professionals dedicated to improving young athletes and expanding opportunities outside of sports.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-elevated text-center"
              >
                {member.image ? (
                  <div className="w-full mx-auto mb-6 rounded-lg overflow-hidden flex items-center justify-center bg-gray-100" style={{ aspectRatio: 'auto' }}>
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-auto object-contain"
                      onError={(e) => {
                        console.error('Image failed to load:', e.target.src);
                      }}
                    />
                  </div>
                ) : (
                  <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center mx-auto mb-6">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                )}
                <h3 className="heading-md text-gray-900 mb-2 break-words">
                  {member.name}
                </h3>
                <p className="text-primary-600 font-semibold mb-4 text-sm sm:text-base break-words">
                  {member.role}
                </p>
                <p className="text-body-sm text-gray-600 break-words">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-600">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-lg text-white mb-6">
              Join the Galaxy23 Family
            </h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/register" className="btn-secondary">
                Register Your Team
              </Link>
              <button
                className="btn-outline"
                onClick={() => {
                  // Open email client with contact form
                  window.location.href = 'mailto:galaxycorp23@gmail.com?subject=General Inquiry&cc=dominickpendergrass@proton.me,schneiderjacob@hotmail.com';
                }}
              >
                Contact Us
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Developer Footer */}
      <footer className="py-8 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center">
            <p className="text-sm text-gray-400">
              Developed by{' '}
              <a
                href="mailto:kalebrowland99@gmail.com"
                className="text-gray-500 hover:text-primary-600 transition-colors duration-200"
              >
                Kaleb
              </a>
              {' '}
              <span className="text-gray-300">•</span>
              {' '}
              <a
                href="mailto:kalebrowland99@gmail.com"
                className="text-gray-400 hover:text-primary-600 transition-colors duration-200 text-xs"
              >
                kalebrowland99@gmail.com
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
