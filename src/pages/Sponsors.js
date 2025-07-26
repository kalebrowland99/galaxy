import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Star, Award, Users } from 'lucide-react';

const Sponsors = () => {
  const currentSponsors = [
    {
      name: 'Nike',
      tier: 'platinum',
      logo: 'N',
      description: 'Official athletic wear partner of Galaxy23'
    },
    {
      name: 'Gatorade',
      tier: 'platinum',
      logo: 'G',
      description: 'Official hydration partner'
    },
    {
      name: 'Under Armour',
      tier: 'gold',
      logo: 'U',
      description: 'Official equipment partner'
    },
    {
      name: 'Adidas',
      tier: 'gold',
      logo: 'A',
      description: 'Official footwear partner'
    },
    {
      name: 'Powerade',
      tier: 'silver',
      logo: 'P',
      description: 'Official sports drink partner'
    },
    {
      name: 'Wilson',
      tier: 'silver',
      logo: 'W',
      description: 'Official ball partner'
    }
  ];

  const sponsorshipTiers = [
    {
      name: 'Platinum',
      price: '$10,000',
      color: 'from-gray-400 to-gray-600',
      benefits: [
        'Premium logo placement on all tournament materials',
        'Exclusive naming rights to tournament divisions',
        'VIP access to all tournament events',
        'Custom branded merchandise distribution',
        'Social media campaign featuring your brand',
        'Dedicated sponsor booth at tournament venue',
        'Recognition during opening and closing ceremonies',
        'Opportunity to present awards to winners'
      ]
    },
    {
      name: 'Gold',
      price: '$5,000',
      color: 'from-yellow-400 to-yellow-600',
      benefits: [
        'Prominent logo placement on tournament materials',
        'VIP access to tournament events',
        'Branded merchandise distribution',
        'Social media recognition',
        'Sponsor booth at tournament venue',
        'Recognition during ceremonies',
        'Opportunity to present awards'
      ]
    },
    {
      name: 'Silver',
      price: '$2,500',
      color: 'from-gray-300 to-gray-500',
      benefits: [
        'Logo placement on tournament materials',
        'Access to tournament events',
        'Branded merchandise distribution',
        'Social media recognition',
        'Sponsor booth at tournament venue',
        'Recognition during ceremonies'
      ]
    },
    {
      name: 'Bronze',
      price: '$1,000',
      color: 'from-orange-400 to-orange-600',
      benefits: [
        'Logo placement on tournament website',
        'Access to tournament events',
        'Social media recognition',
        'Sponsor booth at tournament venue'
      ]
    }
  ];

  const stats = [
    { number: '10K+', label: 'Social Media Reach', icon: Users },
    { number: '50', label: 'Teams Competing', icon: Award },
    { number: '3', label: 'Days of Action', icon: Star },
    { number: '$10K', label: 'Prize Pool', icon: DollarSign }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto container-padding py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="heading-xl mb-6">
              Sponsors & Partners
            </h1>
            <p className="text-body text-blue-100 max-w-3xl mx-auto">
              Join the elite group of sponsors who support the Galaxy23 Flag Football Tournament. 
              Partner with us to reach thousands of athletes, fans, and sports enthusiasts.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Current Sponsors */}
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
              Our Current Sponsors
            </h2>
            <p className="text-body text-gray-600 max-w-3xl mx-auto">
              Meet the prestigious brands that support the Galaxy23 tournament and help make it possible.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentSponsors.map((sponsor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-elevated text-center group"
              >
                <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-2xl ${
                  sponsor.tier === 'platinum' ? 'bg-gradient-to-r from-gray-400 to-gray-600' :
                  sponsor.tier === 'gold' ? 'bg-gradient-to-r from-yellow-400 to-yellow-600' :
                  sponsor.tier === 'silver' ? 'bg-gradient-to-r from-gray-300 to-gray-500' :
                  'bg-gradient-to-r from-orange-400 to-orange-600'
                }`}>
                  {sponsor.logo}
                </div>
                <h3 className="heading-md text-gray-900 mb-2">
                  {sponsor.name}
                </h3>
                <p className="text-primary-600 font-semibold mb-4 capitalize">
                  {sponsor.tier} Partner
                </p>
                <p className="text-body-sm text-gray-600">
                  {sponsor.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsorship Opportunities */}
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
              Sponsorship Opportunities
            </h2>
            <p className="text-body text-gray-600 max-w-3xl mx-auto">
              Choose from our tiered sponsorship packages designed to maximize your brand exposure 
              and connect you with our passionate flag football community.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sponsorshipTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-elevated relative overflow-hidden"
              >
                <div className={`bg-gradient-to-r ${tier.color} p-6 rounded-t-lg -m-6 mb-6`}>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {tier.name}
                  </h3>
                  <p className="text-white/80 text-lg">
                    {tier.price}
                  </p>
                </div>
                
                <div className="space-y-4">
                  {tier.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
                
                <button className="w-full mt-8 btn-primary">
                  Become a {tier.name} Sponsor
                </button>
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
              Ready to Partner With Us?
            </h2>
            <p className="text-body text-blue-100 mb-8 max-w-2xl mx-auto">
              Join the Galaxy23 family and connect with thousands of passionate flag football 
              players, coaches, and fans. Let's create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="btn-secondary">
                Contact Us Today
              </button>
              <button className="btn-outline bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary-600">
                Download Sponsorship Kit
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

// Custom CheckCircle component since it's not available in lucide-react
const CheckCircle = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
  </svg>
);

export default Sponsors; 