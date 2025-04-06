
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  
  return (
    <nav className="border-b bg-white/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between h-16 px-4 md:px-6">
        <Link to="/" className="flex items-center gap-2">
          <Shield className="h-8 w-8 text-certVault-600" />
          <span className="font-bold text-xl text-certVault-800">CertVault</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-6">
          <Link 
            to="/features" 
            className={`text-sm font-medium ${location.pathname === '/features' ? 'text-certVault-800' : 'text-muted-foreground hover:text-foreground'}`}
          >
            Features
          </Link>
          <Link 
            to="/about" 
            className={`text-sm font-medium ${location.pathname === '/about' ? 'text-certVault-800' : 'text-muted-foreground hover:text-foreground'}`}
          >
            About
          </Link>
          <Link 
            to="/dashboard" 
            className={`text-sm font-medium ${location.pathname === '/dashboard' ? 'text-certVault-800' : 'text-muted-foreground hover:text-foreground'}`}
          >
            Dashboard
          </Link>
        </div>
        
        <div className="flex items-center gap-2">
          <Link to="/login">
            <Button variant="outline">Log in</Button>
          </Link>
          <Link to="/signup">
            <Button>Sign up</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
