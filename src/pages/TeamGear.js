import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, Package, Truck, CreditCard 
} from 'lucide-react';

const TeamGear = () => {
  const gearItems = [
    {
      id: 1,
      name: 'Shell Helmet',
      description: 'Custom team colors and logo',
      price: 50.00,
      category: 'safety',
      image: '/Soft Helmet.PNG',
      inStock: true,
      required: true,
      paymentLink: 'https://buy.stripe.com/9B6cN5bdefCt04mbcUa7C02'
    },
    {
      id: 2,
      name: 'Galaxy Skill Gloves',
      description: 'Wide reciever gloves to elevate your game to another Galaxy',
      price: 40.00,
      category: 'apparel',
      image: '/Skill Gloves.PNG',
      inStock: true,
      required: false,
      paymentLink: 'https://buy.stripe.com/3cIbJ1bde75XeZg1Cka7C03'
    },
    {
      id: 3,
      name: 'TRXN Fit Gloves',
      description: 'Professional athletic gear for competitive play.',
      price: 35.00,
      category: 'apparel',
      image: '/gear/IMG_5807.jpeg',
      inStock: true,
      required: false,
      paymentLink: 'https://buy.stripe.com/cNi9ATepq75XeZg1Cka7C04'
    },
    {
      id: 9,
      name: 'Can\'t Guard Me Spats',
      description: 'High-quality team accessories for optimal comfort.',
      price: 12.00,
      category: 'accessories',
      image: '/gear/IMG_5683.jpg',
      inStock: true,
      required: false,
      paymentLink: 'https://buy.stripe.com/9B68wP1CE3TL8AS1Cka7C05'
    },
    {
      id: 12,
      name: 'MySpace Gloves',
      description: 'Lightweight Sticky Gloves',
      price: 45.00,
      category: 'accessories',
      image: '/gear/IMG_5414.jpg',
      inStock: true,
      required: false,
      paymentLink: 'https://buy.stripe.com/dRmaEX3KMbmd9EWdl2a7C06'
    },
    {
      id: 13,
      name: 'Why So Serious Gloves',
      description: 'Ulltimate Performance Sticky Gloves',
      price: 50.00,
      category: 'apparel',
      image: '/gear/IMG_5413.jpg',
      inStock: true,
      required: false,
      paymentLink: 'https://buy.stripe.com/6oU4gz956ai97wO0yga7C07'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
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
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 
                className="heading-xl mb-6 font-bold"
                style={{
                  color: '#8B4513',
                  textShadow: '4px 4px 12px rgba(0, 0, 0, 0.8), 0 0 30px rgba(255, 255, 255, 1), 2px 2px 4px rgba(255, 255, 255, 0.6)',
                  letterSpacing: '0.05em',
                  filter: 'drop-shadow(5px 5px 10px rgba(0, 0, 0, 0.5))',
                  fontWeight: '900',
                  WebkitFontSmoothing: 'antialiased',
                  MozOsxFontSmoothing: 'grayscale',
                  textStroke: '1.5px rgba(255, 255, 255, 0.4)',
                  WebkitTextStroke: '1.5px rgba(255, 255, 255, 0.4)'
                }}
              >
                Team Gear Store
              </h1>
              <p className="text-body max-w-3xl mx-auto" style={{
                color: '#8B4513',
                textShadow: '3px 3px 8px rgba(0, 0, 0, 0.7), 0 0 20px rgba(255, 255, 255, 1), 1px 1px 3px rgba(255, 255, 255, 0.6)',
                fontWeight: '700'
              }}>
                Get your team equipped for the Galaxy23 7v7 Tournament
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8" style={{
                color: '#8B4513',
                textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5), 0 0 10px rgba(255, 255, 255, 0.8)',
                fontWeight: '600'
              }}>
                <div className="flex items-center">
                  <Shield className="w-6 h-6 mr-2" style={{ filter: 'drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.5))' }} />
                  <span>Required Safety Equipment</span>
                </div>
                <div className="flex items-center">
                  <Package className="w-6 h-6 mr-2" style={{ filter: 'drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.5))' }} />
                  <span>Team Branding</span>
                </div>
                <div className="flex items-center">
                  <Truck className="w-6 h-6 mr-2" style={{ filter: 'drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.5))' }} />
                  <span>Fast Shipping</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          {/* Gear Categories */}
          <div className="space-y-8">
            {/* Safety Equipment */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Shield className="w-6 h-6 mr-2 text-red-600" />
                Safety equipment is required. Quick link if you need to purchase
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {gearItems.filter(item => item.category === 'safety').map((item) => (
                  <GearCard 
                    key={item.id} 
                    item={item} 
                    required={item.required}
                  />
                ))}
              </div>
            </div>

            {/* Team Apparel */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Team Gear</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {gearItems.filter(item => item.category === 'apparel' || item.category === 'accessories').map((item) => (
                  <GearCard 
                    key={item.id} 
                    item={item} 
                    required={item.required}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const GearCard = ({ item, required }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [imageRef, setImageRef] = useState(null);

  const handleMouseMove = (e) => {
    if (imageRef) {
      const rect = imageRef.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setMousePosition({ x, y });
    }
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden"
    >
      <div
        className={(item.id === 13) ? "bg-white" : "bg-gray-200"}
        style={{
          aspectRatio: '16/9',
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onMouseMove={handleMouseMove}
      >
        <img
          ref={setImageRef}
          src={item.image}
          alt={item.name}
          className={(item.id === 13) ? "w-full h-full cursor-zoom-in object-contain" : "w-full h-full cursor-zoom-in"}
          style={{
            aspectRatio: item.id === 2 ? '16/9' : 'auto',
            objectFit: (item.id === 13) ? 'contain' : 'cover',
            objectPosition: 'center',
            width: (item.id === 13) ? '100%' : 'auto',
            height: (item.id === 13) ? '100%' : 'auto',
            transform: isHovering ? `scale(2)` : 'scale(1)',
            transformOrigin: `${mousePosition.x}% ${mousePosition.y}%`,
            transition: 'transform 0.1s ease-out'
          }}
        />
      </div>
      
      <div className="p-6">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
          {required && (
            <span className="bg-red-100 text-red-800 text-xs font-medium px-2 py-1 rounded-full">
              Required
            </span>
          )}
        </div>
        
        <p className="text-gray-600 text-sm mb-4">{item.description}</p>
        
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-blue-600">${item.price.toFixed(2)}</span>
          <button
            onClick={() => {
              const successUrl = encodeURIComponent(`${window.location.origin}/payment-success`);
              const cancelUrl = encodeURIComponent(`${window.location.origin}/gear`);
              window.location.href = `${item.paymentLink}?success_url=${successUrl}&cancel_url=${cancelUrl}`;
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 flex items-center"
          >
            <CreditCard className="w-4 h-4 mr-2" />
            Buy Now
          </button>
        </div>
        
        {!item.inStock && (
          <p className="text-red-600 text-sm mt-2">Out of Stock</p>
        )}
      </div>
    </motion.div>
  );
};

export default TeamGear;
