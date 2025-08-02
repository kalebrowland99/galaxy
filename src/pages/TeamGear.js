import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, Package, Truck, CreditCard 
} from 'lucide-react';

const TeamGear = () => {
  const gearItems = [
    {
      id: 1,
      name: 'Product (1)',
      description: 'High-quality team gear item for optimal performance.',
      price: 45.00,
      category: 'safety',
      image: '/gear/IMG_5748.jpg',
      inStock: true,
      required: true
    },
    {
      id: 2,
      name: 'Product (2)',
      description: 'Premium team equipment designed for comfort and durability.',
      price: 35.00,
      category: 'apparel',
      image: '/gear/IMG_5834.jpg',
      inStock: true,
      required: false
    },
    {
      id: 3,
      name: 'Product (3)',
      description: 'Professional athletic gear for competitive play.',
      price: 25.00,
      category: 'apparel',
      image: '/gear/IMG_5807.jpeg',
      inStock: true,
      required: false
    },
    {
      id: 4,
      name: 'Product (4)',
      description: 'Team-branded equipment for ultimate performance.',
      price: 40.00,
      category: 'apparel',
      image: '/gear/IMG_5806.jpeg',
      inStock: true,
      required: false
    },
    {
      id: 5,
      name: 'Product (5)',
      description: 'Durable team gear for equipment storage and transport.',
      price: 30.00,
      category: 'accessories',
      image: '/gear/IMG_5835.jpg',
      inStock: true,
      required: false
    },
    {
      id: 6,
      name: 'Product (6)',
      description: 'Stylish team accessory with embroidered branding.',
      price: 20.00,
      category: 'accessories',
      image: '/gear/IMG_5746.jpg',
      inStock: true,
      required: false
    },
    {
      id: 7,
      name: 'Product (7)',
      description: 'Performance gear designed for training and practice sessions.',
      price: 28.00,
      category: 'apparel',
      image: '/gear/IMG_5725.jpg',
      inStock: true,
      required: false
    },
    {
      id: 8,
      name: 'Product (8)',
      description: 'Advanced performance equipment for enhanced mobility.',
      price: 15.00,
      category: 'accessories',
      image: '/gear/IMG_5722.jpg',
      inStock: true,
      required: false
    },
    {
      id: 9,
      name: 'Product (9)',
      description: 'High-quality team accessories for optimal comfort.',
      price: 12.00,
      category: 'accessories',
      image: '/gear/IMG_5683.jpg',
      inStock: true,
      required: false
    },
    {
      id: 10,
      name: 'Product (10)',
      description: 'Performance equipment for enhanced grip and control.',
      price: 18.00,
      category: 'accessories',
      image: '/gear/IMG_5662.jpg',
      inStock: true,
      required: false
    },
    {
      id: 11,
      name: 'Product (11)',
      description: 'Weather-resistant team gear for various conditions.',
      price: 55.00,
      category: 'apparel',
      image: '/gear/IMG_5626.jpg',
      inStock: true,
      required: false
    },
    {
      id: 12,
      name: 'Product (12)',
      description: 'Large capacity equipment storage for team gear.',
      price: 45.00,
      category: 'accessories',
      image: '/gear/IMG_5414.jpg',
      inStock: true,
      required: false
    },
    {
      id: 13,
      name: 'Product (13)',
      description: 'Comfortable team gear for pre-game preparation.',
      price: 32.00,
      category: 'apparel',
      image: '/gear/IMG_5413.jpg',
      inStock: true,
      required: false
    },
    {
      id: 14,
      name: 'Product (14)',
      description: 'Lightweight performance gear for layering and comfort.',
      price: 38.00,
      category: 'apparel',
      image: '/gear/E15447C7-E3F6-4972-BBD0-D3E24ADF3B8C.jpg',
      inStock: true,
      required: false
    },
    {
      id: 15,
      name: 'Product (15)',
      description: 'Durable team gear for daily use and storage.',
      price: 42.00,
      category: 'accessories',
      image: '/gear/A094AA5A-E52F-47F3-B867-3CEA6E989A87.jpg',
      inStock: true,
      required: false
    },
    {
      id: 16,
      name: 'Product (16)',
      description: 'Performance gear designed for training and practice.',
      price: 22.00,
      category: 'apparel',
      image: '/gear/76A4521D-C6BA-46B8-8415-C64FE1311DCA.jpg',
      inStock: true,
      required: false
    },
    {
      id: 17,
      name: 'Product (17)',
      description: 'Team accessory for cold weather protection.',
      price: 16.00,
      category: 'accessories',
      image: '/gear/5257735B-2044-44EF-8000-CA238D00D3AB.jpg',
      inStock: true,
      required: false
    },
    {
      id: 18,
      name: 'Product (18)',
      description: 'High-performance team gear for optimal comfort.',
      price: 26.00,
      category: 'apparel',
      image: '/gear/4DBEDD19-FE26-4D46-917F-1CAB9E5C8255.jpg',
      inStock: true,
      required: false
    },
    {
      id: 19,
      name: 'Product (19)',
      description: 'Essential team accessory for post-game use.',
      price: 8.00,
      category: 'accessories',
      image: '/gear/42ECFC10-DD1E-457A-8746-81F4ED12D7CE.jpg',
      inStock: true,
      required: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Team Gear Store
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8">
                Get your team equipped for the Galaxy23 7v7 Tournament
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <div className="flex items-center">
                  <Shield className="w-6 h-6 mr-2" />
                  <span>Required Safety Equipment</span>
                </div>
                <div className="flex items-center">
                  <Package className="w-6 h-6 mr-2" />
                  <span>Team Branding</span>
                </div>
                <div className="flex items-center">
                  <Truck className="w-6 h-6 mr-2" />
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
                Safety Equipment (Required)
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
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden"
    >
      <div className="aspect-w-16 aspect-h-9 bg-gray-200">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-48 object-cover"
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
              window.location.href = `https://buy.stripe.com/dRmcN5dlm2PH7wOa8Qa7C01?success_url=${successUrl}&cancel_url=${cancelUrl}`;
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