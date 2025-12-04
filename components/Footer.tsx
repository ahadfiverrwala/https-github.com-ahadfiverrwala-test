import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Graphics & Design</a></li>
              <li><a href="#" className="hover:text-white">Digital Marketing</a></li>
              <li><a href="#" className="hover:text-white">Writing & Translation</a></li>
              <li><a href="#" className="hover:text-white">Video & Animation</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-bold mb-4">About</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Press & News</a></li>
              <li><a href="#" className="hover:text-white">Partnerships</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Help & Support</a></li>
              <li><a href="#" className="hover:text-white">Trust & Safety</a></li>
              <li><a href="#" className="hover:text-white">Selling on LanceLink</a></li>
              <li><a href="#" className="hover:text-white">Buying on LanceLink</a></li>
            </ul>
          </div>
           <div>
            <h3 className="text-white text-lg font-bold mb-4">Community</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Events</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
              <li><a href="#" className="hover:text-white">Forum</a></li>
              <li><a href="#" className="hover:text-white">Podcast</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
               <span className="font-bold text-xl tracking-tight text-white mr-4">LanceLink</span>
               <span className="text-xs text-gray-500">© 2025 LanceLink Ltd. All rights reserved.</span>
            </div>
            <div className="flex space-x-6">
                <span className="text-gray-400 hover:text-white cursor-pointer"><i className="fab fa-twitter"></i> Twitter</span>
                <span className="text-gray-400 hover:text-white cursor-pointer"><i className="fab fa-facebook"></i> Facebook</span>
                <span className="text-gray-400 hover:text-white cursor-pointer"><i className="fab fa-linkedin"></i> LinkedIn</span>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;