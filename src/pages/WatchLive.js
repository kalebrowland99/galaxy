import React from 'react';
import { motion } from 'framer-motion';

const WatchLive = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      {/* Main Video Player */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-6xl mx-auto p-4"
      >
        <div className="bg-black rounded-2xl overflow-hidden shadow-2xl">
          {/* YouTube Video Embed */}
          <div className="aspect-video bg-gray-800 relative">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/KXAmKZ5quVY?autoplay=1&mute=0"
              title="Galaxy23 Tournament Live Stream"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default WatchLive; 