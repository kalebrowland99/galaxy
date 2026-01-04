import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Users, Heart, Eye, Info, Shield, Gift } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/', icon: null }, // Icon removed
    { name: 'Register', href: '/register', icon: Users },
    // { name: 'Events', href: '/events', icon: CalendarDays }, // Hidden - uncomment to restore
    // { name: 'Schedule', href: '/schedule', icon: Calendar }, // Hidden - uncomment to restore
    { name: 'Watch Live', href: '/watch', icon: Eye },
    // { name: 'Team Gear', href: '/gear', icon: ShoppingBag }, // Hidden - uncomment to restore
    { name: 'Sponsors', href: '/sponsors', icon: Heart },
    { name: 'Rules', href: '/rules', icon: Shield },
    { name: 'About', href: '/about', icon: Info },
    { name: 'Giving Back', href: '/giving-back', icon: Gift },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50' 
        : 'bg-black'
    }`}>
      <div className="max-w-7xl mx-auto container-padding">
        <div className="flex justify-start items-center h-16 space-x-4"> {/* Changed justify-between to justify-start and added space-x-4 */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center group">
              <span className={`text-xl font-bold font-display group-hover:text-primary-600 transition-colors duration-300 ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}>
                Galaxy23
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    isActive(item.href)
                      ? isScrolled 
                        ? 'text-primary-600 bg-primary-50 shadow-md' 
                        : 'text-white bg-white/20 shadow-md'
                      : isScrolled
                        ? 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                        : 'text-white hover:text-white hover:bg-white/10'
                  }`}
                >
                  {Icon && <Icon className="w-4 h-4 mr-2" />} {/* Conditionally render icon */}
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center ml-auto"> {/* Added ml-auto to push to right */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-lg hover:bg-white/10 focus:outline-none focus:ring-4 focus:ring-white/30 transition-all duration-300 ${
                isScrolled ? 'text-gray-700 hover:text-primary-600' : 'text-white'
              }`}
            >
              {isOpen ? (
                <X className="block h-5 w-5" />
              ) : (
                <Menu className="block h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden">
          <div className="px-6 pt-2 pb-6 space-y-2 bg-white/95 backdrop-blur-md border-t border-gray-200/50">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center px-5 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                    isActive(item.href)
                      ? 'text-primary-600 bg-primary-50 shadow-md'
                      : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                  }`}
                >
                  {Icon && <Icon className="w-5 h-5 mr-3" />} {/* Conditionally render icon */}
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 