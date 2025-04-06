
import { Link } from "react-router-dom";
import { Shield } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white border-t mt-auto py-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Shield className="h-6 w-6 text-certVault-600" />
            <span className="font-bold text-lg text-certVault-800">CertVault</span>
          </div>
          
          <div className="flex flex-wrap gap-6 mb-4 md:mb-0 justify-center">
            <Link to="/features" className="text-sm text-gray-600 hover:text-gray-900">
              Features
            </Link>
            <Link to="/about" className="text-sm text-gray-600 hover:text-gray-900">
              About
            </Link>
            <Link to="/privacy" className="text-sm text-gray-600 hover:text-gray-900">
              Privacy
            </Link>
            <Link to="/terms" className="text-sm text-gray-600 hover:text-gray-900">
              Terms
            </Link>
            <Link to="/contact" className="text-sm text-gray-600 hover:text-gray-900">
              Contact
            </Link>
          </div>
          
          <div className="text-sm text-gray-500">
            &copy; {currentYear} CertVault. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
