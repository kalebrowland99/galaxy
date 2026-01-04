import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Star, Award, Users } from 'lucide-react';

const Sponsors = () => {
  const sponsorshipTiers = [
    {
      name: 'Platinum',
      price: '$10,000',
      color: 'from-gray-400 to-gray-600',
      benefits: [
        'Five 30 second commericials 2 pre game, 1 Half time and 2 post game, 2 live billboard reads and logo placement on the alternating scoreboard sponsor loop with exclusivity',
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
        'Two 30 second commericials 1 pre game and 1 post game, 2 live billboard reads and logo placement on the alternating scoreboard sponsor loop',
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
        '1 live billboard read and logo placement on the live stream alternating scoreboard sponsor loop',
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


  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="relative overflow-hidden" style={{ height: '25vh', minHeight: '200px' }}>
        {/* Sunset Football Field Background */}
        <div className="absolute inset-0" style={{ opacity: 0.5 }}>
          <img
            src="/sunset-football-field.png"
            alt="Sunset Football Field"
            className="w-full h-full object-cover"
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="max-w-7xl mx-auto container-padding py-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 
              className="heading-xl mb-6 font-bold px-4"
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
              Sponsors & Partners
            </h1>
            <p className="text-body max-w-3xl mx-auto px-4" style={{
              color: '#8B4513',
              textShadow: '2px 2px 6px rgba(0, 0, 0, 0.6), 0 0 15px rgba(255, 255, 255, 0.9), 1px 1px 2px rgba(255, 255, 255, 0.5)',
              fontWeight: '700'
            }}>
              Join the elite group of sponsors who support the Galaxy23 7v7 Tournament.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Why Sponsor Section */}
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
              Why Partner With Galaxy23?
            </h2>
            <p className="text-body text-gray-600 max-w-3xl mx-auto mb-12">
              Join a premier sporting event that connects your brand with a passionate, engaged community of athletes, coaches, and sports enthusiasts. Our tournament offers unparalleled opportunities for brand exposure, community engagement, and meaningful connections.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="card-elevated p-4 sm:p-6 lg:p-8"
            >
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="heading-md text-gray-900 mb-4 break-words">
                Reach Your Target Audience
              </h3>
              <p className="text-body-sm text-gray-600 break-words">
                Hundreds of athletes, and thousands of engaged fans. Our tournament attracts passionate 7v7 players, coaches, and sports enthusiasts who value quality, performance, and excellence! The perfect audience for your brand.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="card-elevated p-4 sm:p-6 lg:p-8"
            >
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mb-6">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="heading-md text-gray-900 mb-4 break-words">
                Maximum Brand Exposure
              </h3>
              <p className="text-body-sm text-gray-600 break-words">
                Your brand will be featured across all tournament materials, digital platforms, social media campaigns, and live event coverage. With multi-day exposure and comprehensive marketing support, your sponsorship investment delivers measurable visibility and impact.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="card-elevated p-4 sm:p-6 lg:p-8"
            >
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="heading-md text-gray-900 mb-4 break-words">
                Align With Excellence
              </h3>
              <p className="text-body-sm text-gray-600 break-words">
                Associate your brand with a premier tournament known for competitive excellence, professional organization, and community values. Sponsoring Galaxy23 positions your company alongside the best in 7v7 and demonstrates your commitment to supporting athletic achievement.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="card-elevated p-4 sm:p-6 lg:p-8"
            >
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mb-6">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <h3 className="heading-md text-gray-900 mb-4 break-words">
                Measurable ROI
              </h3>
              <p className="text-body-sm text-gray-600 break-words">
                Receive detailed analytics on brand impressions, social media engagement, and audience reach. Our comprehensive reporting ensures you can track the value and impact of your sponsorship investment with clear, actionable metrics.
              </p>
            </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              className="card-elevated p-4 sm:p-6 lg:p-8"
              >
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
                </div>
              <h3 className="heading-md text-gray-900 mb-4 break-words">
                Exclusive Access & Experiences
                </h3>
              <p className="text-body-sm text-gray-600 break-words">
                Enjoy VIP access to all tournament events, exclusive networking opportunities with team leaders and coaches, and the chance to present awards at ceremonies. Create meaningful connections and memorable experiences for your team and clients.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="card-elevated p-4 sm:p-6 lg:p-8"
            >
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="heading-md text-gray-900 mb-4 break-words">
                Custom Partnership Opportunities
              </h3>
                <p className="text-body-sm text-gray-600 break-words">
                We work with each sponsor to create tailored partnership packages that align with your marketing goals. From product placement and sampling to custom activations and co-branded content, we'll design a sponsorship that delivers maximum value for your brand.
                </p>
              </motion.div>
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
              and connect you with our passionate 7v7 community.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {sponsorshipTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-elevated relative overflow-hidden"
              >
                <div className={`bg-gradient-to-r ${tier.color} p-4 sm:p-6 rounded-t-lg -m-4 sm:-m-6 mb-4 sm:mb-6`}>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 break-words">
                    {tier.name}
                  </h3>
                  <p className="text-white/80 text-base sm:text-lg break-words">
                    {tier.price}
                  </p>
                </div>
                
                <div className="space-y-3 sm:space-y-4">
                  {tier.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-start">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 sm:mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-xs sm:text-sm text-gray-700 break-words">{benefit}</span>
                    </div>
                  ))}
                </div>
                
                <button 
                  className="w-full mt-6 sm:mt-8 btn-primary text-sm sm:text-base"
                  onClick={() => {
                    // Open email client with sponsorship inquiry
                    window.location.href = 'mailto:sponsors@galaxy23.com?subject=Sponsorship Inquiry - ' + tier.name + ' Tier';
                  }}
                >
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
              Join the Galaxy23 family and connect with thousands of passionate sports players, coaches, and fans. Let's create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                className="btn-secondary"
                onClick={() => {
                  // Open email client with contact form
                  window.location.href = 'mailto:contact@galaxy23.com?subject=Partnership Inquiry';
                }}
              >
                Contact Us Today
              </button>
              <button 
                className="btn-outline"
                onClick={() => {
                  // Download sponsorship kit (placeholder)
                  alert('Sponsorship kit download would be implemented here. For now, please contact us at sponsors@galaxy23.com');
                }}
              >
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