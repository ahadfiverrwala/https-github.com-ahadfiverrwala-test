import React from 'react';
import { Search, Globe, Menu, X, User as UserIcon, PlusCircle } from 'lucide-react';
import { User } from '../types';

interface NavbarProps {
  user?: User;
  onNavigate: (page: string) => void;
  onCreateClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ user, onNavigate, onCreateClick }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`Searching for: ${searchQuery}`);
    onNavigate('explore');
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            {/* Logo */}
            <div 
              className="flex-shrink-0 flex items-center cursor-pointer"
              onClick={() => onNavigate('home')}
            >
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-2">
                <span className="text-white font-bold text-lg">L</span>
              </div>
              <span className="font-bold text-xl tracking-tight text-gray-900">LanceLink</span>
            </div>

            {/* Desktop Search */}
            <div className="hidden md:ml-8 md:flex md:w-80">
              <form onSubmit={handleSearch} className="w-full relative">
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md py-2 pl-3 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="What service are you looking for?"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="absolute right-0 top-0 mt-2 mr-3 text-gray-500 hover:text-green-600">
                  <Search className="h-5 w-5" />
                </button>
              </form>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => onNavigate('explore')}
              className="text-gray-600 hover:text-green-600 font-medium text-sm transition-colors"
            >
              Explore
            </button>
            <button className="text-gray-600 hover:text-green-600 font-medium text-sm transition-colors">
              Become a Seller
            </button>
            
            {user ? (
              <div className="flex items-center space-x-4">
                 <button 
                   onClick={onCreateClick}
                   className="flex items-center text-green-600 hover:text-green-700 font-medium text-sm"
                 >
                   <PlusCircle className="h-5 w-5 mr-1" />
                   Post a Gig
                 </button>
                <div 
                  className="h-8 w-8 rounded-full bg-gray-200 overflow-hidden cursor-pointer border border-gray-300"
                  onClick={() => onNavigate('profile')}
                >
                  <img src={user.avatar} alt={user.name} className="h-full w-full object-cover" />
                </div>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <button className="text-gray-600 hover:text-green-600 font-medium text-sm">Sign In</button>
                <button className="border border-green-500 text-green-500 hover:bg-green-50 px-4 py-1.5 rounded-md font-medium text-sm transition-all">
                  Join
                </button>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
             <form onSubmit={handleSearch} className="mb-4 px-2">
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </form>
            <a onClick={() => onNavigate('explore')} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-600 hover:bg-gray-50 cursor-pointer">Explore</a>
            <a onClick={onCreateClick} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-600 hover:bg-gray-50 cursor-pointer">Post a Gig</a>
            <a onClick={() => onNavigate('profile')} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-600 hover:bg-gray-50 cursor-pointer">Profile</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;