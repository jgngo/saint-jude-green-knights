import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-12 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <div className="mb-4 md:mb-0 flex items-center">
          <img 
              src="https://upload.wikimedia.org/wikipedia/en/2/23/Saint_Jude_Catholic_School_logo.png" 
              alt="Saint Jude Catholic School Logo" 
              className="h-8 w-auto mr-3 opacity-80"
          />
          <div className="flex flex-col">
              <span className="font-semibold text-gray-900">Saint Jude Green Knights</span>
              <span className="text-xs">&copy; {new Date().getFullYear()} Athletics Dept.</span>
          </div>
        </div>
        <div className="flex space-x-6">
            <a href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;