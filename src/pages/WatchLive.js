import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, Maximize, Calendar, Clock, MapPin } from 'lucide-react';

const WatchLive = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentGame, setCurrentGame] = useState(0);

  const liveGames = [
    {
      id: 1,
      team1: 'Thunder Hawks',
      team2: 'Lightning Bolts',
      score: '21-14',
      time: 'Q3 - 8:45',
      field: 'Field 1',
      status: 'live'
    },
    {
      id: 2,
      team1: 'Storm Riders',
      team2: 'Wind Warriors',
      score: '7-7',
      time: 'Q2 - 12:30',
      field: 'Field 2',
      status: 'live'
    },
    {
      id: 3,
      team1: 'Phoenix Rising',
      team2: 'Dragon Slayers',
      score: '14-0',
      time: 'Q1 - 15:00',
      field: 'Field 3',
      status: 'live'
    }
  ];

  const upcomingGames = [
    {
      id: 4,
      team1: 'Veteran Legends',
      team2: 'Golden Eagles',
      time: '2:30 PM',
      field: 'Field 1',
      division: 'Masters'
    },
    {
      id: 5,
      team1: 'Young Guns',
      team2: 'Future Stars',
      time: '3:00 PM',
      field: 'Field 2',
      division: 'Youth'
    },
    {
      id: 6,
      team1: 'Championship Game',
      team2: 'TBD',
      time: '4:00 PM',
      field: 'Main Field',
      division: 'Open'
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
              Watch Live
            </h1>
            <p className="text-body text-blue-100 max-w-3xl mx-auto">
              Catch all the action live from the Galaxy23 tournament! Watch games in real-time 
              and never miss a moment of the competition.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto container-padding py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Video Player */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-black rounded-2xl overflow-hidden shadow-2xl"
            >
              {/* Video Placeholder */}
              <div className="aspect-video bg-gray-800 flex items-center justify-center relative">
                <div className="text-center text-white">
                  <div className="w-24 h-24 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Play className="w-12 h-12" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">
                    {liveGames[currentGame]?.team1} vs {liveGames[currentGame]?.team2}
                  </h3>
                  <p className="text-gray-300">
                    Live from {liveGames[currentGame]?.field}
                  </p>
                </div>
                
                {/* Video Controls */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                    >
                      {isPlaying ? <Pause className="w-6 h-6 text-white" /> : <Play className="w-6 h-6 text-white" />}
                    </button>
                    <div className="flex items-center space-x-2">
                      <Volume2 className="w-5 h-5 text-white" />
                      <div className="w-20 h-1 bg-white/30 rounded-full">
                        <div className="w-12 h-1 bg-white rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  <button className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                    <Maximize className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Game Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 card"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">
                  {liveGames[currentGame]?.team1} vs {liveGames[currentGame]?.team2}
                </h3>
                <span className="px-3 py-1 bg-red-500 text-white rounded-full text-sm font-medium">
                  LIVE
                </span>
              </div>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-gray-900">
                    {liveGames[currentGame]?.score?.split('-')[0]}
                  </div>
                  <div className="text-sm text-gray-600">{liveGames[currentGame]?.team1}</div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="text-2xl font-bold text-primary-600">VS</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">
                    {liveGames[currentGame]?.score?.split('-')[1]}
                  </div>
                  <div className="text-sm text-gray-600">{liveGames[currentGame]?.team2}</div>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    {liveGames[currentGame]?.time}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    {liveGames[currentGame]?.field}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Live Games */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="card"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <div className="w-3 h-3 bg-red-500 rounded-full mr-2 animate-pulse"></div>
                Live Games
              </h3>
              <div className="space-y-3">
                {liveGames.map((game, index) => (
                  <button
                    key={game.id}
                    onClick={() => setCurrentGame(index)}
                    className={`w-full p-3 rounded-lg text-left transition-all duration-300 ${
                      currentGame === index
                        ? 'bg-primary-50 border border-primary-200'
                        : 'bg-gray-50 hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium text-gray-900">
                        {game.team1} vs {game.team2}
                      </span>
                      <span className="text-xs bg-red-500 text-white px-2 py-1 rounded-full">
                        LIVE
                      </span>
                    </div>
                    <div className="text-sm text-gray-600">
                      {game.score} • {game.time}
                    </div>
                    <div className="text-xs text-gray-500">
                      {game.field}
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Upcoming Games */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="card"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-primary-600" />
                Upcoming Games
              </h3>
              <div className="space-y-3">
                {upcomingGames.map((game) => (
                  <div key={game.id} className="p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium text-gray-900">
                        {game.team1} vs {game.team2}
                      </span>
                      <span className="text-xs bg-primary-100 text-primary-700 px-2 py-1 rounded-full">
                        {game.division}
                      </span>
                    </div>
                    <div className="text-sm text-gray-600">
                      {game.time}
                    </div>
                    <div className="text-xs text-gray-500">
                      {game.field}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchLive; 