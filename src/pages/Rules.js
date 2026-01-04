import React from 'react';
import { motion } from 'framer-motion';
import { Shield, AlertTriangle, Users, Trophy, Clock, Ban, CheckCircle } from 'lucide-react';

const Rules = () => {
  const generalRules = [
    {
      title: 'Team Composition & Field Setup',
      rules: [
        'Each team must have exactly 7 players on the field at all times',
        'Field dimensions: 40 yards in length with 10-yard end zones',
        'All players must be registered and listed on the official roster',
        'Substitutions are allowed between plays and during timeouts',
        'Teams may carry up to 15 players on their roster'
      ]
    },
    {
      title: 'Game Duration & Timing',
      rules: [
        'Games consist of a 25-minute running clock',
        'Clock stops for timeouts, injuries, and official reviews',
        'Each team receives 2 timeouts per game',
        'Halftime: 5 minutes between halves',
        'Overtime: Teams alternate three plays from the 10-yard line (first to score wins)'
      ]
    },
    {
      title: 'Offensive Rules',
      rules: [
        'Offense starts at the 40-yard line',
        'Quarterback has a maximum of 4 seconds to throw the ball',
        'No running plays - all plays must be forward passes',
        'Offensive pass interference: 5-yard penalty and loss of down',
        'All players are eligible receivers',
        'First down markers at 20-yard intervals'
      ]
    },
    {
      title: 'Defensive Rules',
      rules: [
        'Defenders can jam receivers within the first 5 yards from the line of scrimmage',
        'Defenders must pull the flag belt to stop the ball carrier',
        'Contact with the flag belt constitutes a tackle',
        'If a flag falls off unintentionally, the player is down at the spot',
        'No flag guarding, stiff-arming, or blocking allowed',
        'Rushing the quarterback is allowed after a 3-second count'
      ]
    },
    {
      title: 'Scoring',
      rules: [
        'Touchdown: 6 points',
        'Point After Touchdown (PAT) from 3-yard line: 1 point',
        'Point After Touchdown (PAT) from 10-yard line: 2 points',
        'Safety: 2 points',
        'No field goals allowed in 7v7 format'
      ]
    },
    {
      title: 'Starting the Game & Possession',
      rules: [
        'Coin toss or Rock-Paper-Scissors determines initial possession',
        'Winning team chooses to receive or defer',
        'Teams switch sides at halftime',
        'After scoring, the opposing team starts at the 40-yard line',
        'Turnovers result in change of possession at the spot'
      ]
    },
    {
      title: 'Equipment Requirements',
      rules: [
        'Soft-shelled helmets and mouthguards are mandatory for all players',
        'All players must wear approved flag belts',
        'Appropriate athletic footwear required (non-metal cleats allowed)',
        'No jewelry, watches, or hard objects permitted during play',
        'Jerseys must have numbers clearly visible'
      ]
    },
    {
      title: 'Penalties & Enforcement',
      rules: [
        'Offensive pass interference: 5-yard penalty and loss of down',
        'Defensive pass interference: Automatic first down at the spot of the foul',
        'False start: 5-yard penalty',
        'Delay of game: 5-yard penalty',
        'Unsportsmanlike conduct: 15-yard penalty and potential ejection',
        'All penalties are enforced from the line of scrimmage'
      ]
    }
  ];

  const safetyGuidelines = [
    {
      icon: Shield,
      title: 'Player Safety',
      description: 'All players must wear appropriate athletic attire. No jewelry, watches, or hard objects are permitted during play.'
    },
    {
      icon: AlertTriangle,
      title: 'Injury Protocol',
      description: 'In case of injury, play will be stopped immediately. Medical staff will assess the situation and determine if play can continue.'
    },
    {
      icon: Users,
      title: 'Sportsman-ship',
      description: 'Respect for opponents, officials, and spectators is mandatory. Unsportsmanlike conduct will result in penalties or ejection.'
    },
    {
      icon: Trophy,
      title: 'Fair Play',
      description: 'All teams are expected to compete with integrity and follow the rules. Cheating or rule violations will result in disqualification.'
    }
  ];

  const conductPolicies = [
    {
      title: 'Code of Conduct',
      items: [
        'Respect all players, coaches, officials, and spectators',
        'No profanity, taunting, or unsportsmanlike behavior',
        'Follow all tournament rules and regulations',
        'Accept all official decisions without argument',
        'Maintain a positive and competitive environment'
      ]
    },
    {
      title: 'Prohibited Behavior',
      items: [
        'Fighting or physical altercations',
        'Verbal abuse or harassment',
        'Intentionally injuring another player',
        'Use of illegal substances or alcohol during games',
        'Disrespecting tournament facilities or equipment'
      ]
    },
    {
      title: 'Penalties & Consequences',
      items: [
        'First offense: Warning or 10-yard penalty',
        'Second offense: 15-yard penalty or ejection',
        'Severe violations: Immediate ejection and potential tournament ban',
        'Ejected players must leave the field immediately',
        'Tournament organizers reserve the right to disqualify teams for serious violations'
      ]
    }
  ];

  const eligibilityRules = [
    {
      title: 'Age Requirements',
      description: 'Players must meet the age requirements for their division as of the tournament start date.'
    },
    {
      title: 'Registration',
      description: 'All players must be registered and have signed waivers before participating in any games.'
    },
    {
      title: 'Roster Changes',
      description: 'Roster changes must be submitted 24 hours before the tournament start. No changes allowed after the first game.'
    },
    {
      title: 'Equipment',
      description: 'All players must wear approved flag belts and appropriate athletic footwear. Cleats are allowed but must be nonmetal.'
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
              className="heading-xl mb-6 font-bold"
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
              Rules, Safety & Policies
            </h1>
            <p className="text-body max-w-3xl mx-auto" style={{
              color: '#8B4513',
              textShadow: '2px 2px 6px rgba(0, 0, 0, 0.6), 0 0 15px rgba(255, 255, 255, 0.9), 1px 1px 2px rgba(255, 255, 255, 0.5)',
              fontWeight: '700'
            }}>
              Review the official rules, safety guidelines, and conduct policies
            </p>
          </motion.div>
        </div>
      </div>

      {/* General Rules */}
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
              General Tournament Rules
            </h2>
            <p className="text-body text-gray-600 max-w-3xl mx-auto">
              Official rules and regulations governing gameplay, scoring, and team composition.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {generalRules.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-elevated"
              >
                <h3 className="heading-md text-gray-900 mb-6 flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-primary-600" />
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.rules.map((rule, ruleIndex) => (
                    <li key={ruleIndex} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-body-sm text-gray-700">{rule}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Guidelines */}
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
              Safety Guidelines
            </h2>
            <p className="text-body text-gray-600 max-w-3xl mx-auto">
              Your safety is our top priority. Please review and follow these important safety guidelines.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {safetyGuidelines.map((guideline, index) => {
              const Icon = guideline.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card-elevated text-center"
                >
                  <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="heading-md text-gray-900 mb-4" style={{
                    wordBreak: 'break-word',
                    lineHeight: '1.3',
                    fontSize: guideline.title === 'Sportsman-ship' ? 'clamp(1rem, 2vw, 1.25rem)' : undefined,
                    textAlign: guideline.title === 'Sportsman-ship' ? 'left' : 'center'
                  }}>
                    {guideline.title}
                  </h3>
                  <p className="text-body-sm text-gray-600">
                    {guideline.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Conduct Policies */}
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
              Conduct Policies
            </h2>
            <p className="text-body text-gray-600 max-w-3xl mx-auto">
              All participants are expected to maintain the highest standards of sportsmanship and conduct.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {conductPolicies.map((policy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-elevated"
              >
                <h3 className="heading-md text-gray-900 mb-6 flex items-center">
                  {index === 1 ? (
                    <Ban className="w-5 h-5 mr-2 text-red-500" />
                  ) : index === 2 ? (
                    <AlertTriangle className="w-5 h-5 mr-2 text-yellow-500" />
                  ) : (
                    <Shield className="w-5 h-5 mr-2 text-primary-600" />
                  )}
                  {policy.title}
                </h3>
                <ul className="space-y-3">
                  {policy.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <div className={`w-2 h-2 rounded-full mr-3 mt-2 flex-shrink-0 ${
                        index === 1 ? 'bg-red-500' : index === 2 ? 'bg-yellow-500' : 'bg-primary-600'
                      }`} />
                      <span className="text-body-sm text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Rules */}
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
              Eligibility Requirements
            </h2>
            <p className="text-body text-gray-600 max-w-3xl mx-auto">
              Important requirements for participation in the Galaxy23 tournament.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {eligibilityRules.map((rule, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-elevated"
              >
                <h3 
                  className="text-gray-900 mb-4 font-bold leading-tight"
                  style={{ 
                    fontSize: 'clamp(1.125rem, 2vw, 1.5rem)',
                    wordBreak: 'normal', 
                    overflowWrap: 'break-word',
                    hyphens: 'none'
                  }}
                >
                  {rule.title}
                </h3>
                <p 
                  className="text-gray-600 leading-relaxed"
                  style={{ 
                    fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
                    wordBreak: 'break-word', 
                    overflowWrap: 'break-word', 
                    hyphens: 'auto' 
                  }}
                >
                  {rule.description}
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
              Questions About Rules or Policies?
            </h2>
            <p className="text-body text-blue-100 mb-8 max-w-2xl mx-auto">
              If you have any questions about the rules, safety guidelines, or conduct policies, 
              please don't hesitate to reach out to our tournament officials.
            </p>
            <button 
              className="btn-secondary"
              onClick={() => {
                window.location.href = 'mailto:rules@galaxy23.com?subject=Rules and Policies Question';
              }}
            >
              Contact Tournament Officials
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Rules;

