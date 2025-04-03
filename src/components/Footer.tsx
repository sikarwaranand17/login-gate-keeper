
import React from "react";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="border-t mt-12">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            &copy; {year} AuthSystem. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
              Terms
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
              Privacy
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
              Support
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
