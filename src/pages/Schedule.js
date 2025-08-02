import React from 'react';
import { motion } from 'framer-motion';
import { Clock, MapPin, Users } from 'lucide-react';

const Schedule = () => {
  const games = [
    {
      id: 1,
      day: 'friday',
      division: 'open',
      time: '6:00 PM',
      team1: 'Thunder Hawks',
      team2: 'Lightning Bolts',
      field: 'Field 1',
      status: 'upcoming'
    },
    {
      id: 2,
      day: 'friday',
      division: 'open',
      time: '7:30 PM',
      team1: 'Storm Riders',
      team2: 'Wind Warriors',
      field: 'Field 2',
      status: 'upcoming'
    },
    {
      id: 3,
      day: 'saturday',
      division: 'masters',
      time: '9:00 AM',
      team1: 'Veteran Legends',
      team2: 'Golden Eagles',
      field: 'Field 1',
      status: 'upcoming'
    },
    {
      id: 4,
      day: 'saturday',
      division: 'open',
      time: '10:30 AM',
      team1: 'Phoenix Rising',
      team2: 'Dragon Slayers',
      field: 'Field 2',
      status: 'upcoming'
    },
    {
      id: 5,
      day: 'saturday',
      division: 'youth',
      time: '12:00 PM',
      team1: 'Young Guns',
      team2: 'Future Stars',
      field: 'Field 3',
      status: 'upcoming'
    },
    {
      id: 6,
      day: 'sunday',
      division: 'open',
      time: '2:00 PM',
      team1: 'Championship Game',
      team2: 'TBD',
      field: 'Main Field',
      status: 'upcoming'
    }
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
              Tournament Schedule
            </h1>
            <p className="text-body text-blue-100 max-w-3xl mx-auto">
              View the complete tournament schedule, game times, and field assignments. 
              Filter by day or division to find specific games.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Schedule */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
          >
            {games.map((game, index) => (
              <motion.div
                key={game.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-elevated group cursor-pointer"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-primary-600">
                    <Clock className="w-4 h-4 mr-2" />
                    <span className="font-semibold">{game.time}</span>
                  </div>
                  <div className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                    {game.division.charAt(0).toUpperCase() + game.division.slice(1)}
                  </div>
                </div>
                
                <div className="text-center mb-4">
                  <div className="text-lg font-semibold text-gray-900 mb-2">
                    {game.team1}
                  </div>
                  <div className="text-2xl font-bold text-primary-600 mb-2">VS</div>
                  <div className="text-lg font-semibold text-gray-900">
                    {game.team2}
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    {game.field}
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    {game.status}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {games.length === 0 && (
            <div className="text-center py-16">
              <div className="text-gray-500 text-lg">
                No games found for the selected filters.
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Schedule; 