
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, Award, Link as LinkIcon } from "lucide-react";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-certVault-50 to-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-certVault-900 mb-4">
                Verify & Showcase Your Professional Certificates
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                Securely store, verify, and share your certificates from Coursera, Udemy, and more with potential employers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link to="/signup">
                  <Button size="lg" className="w-full sm:w-auto">Get Started</Button>
                </Link>
                <Link to="/dashboard">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    View Demo
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="flex-1 mt-8 md:mt-0">
              <div className="relative">
                <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-certVault-500 to-accent opacity-30 blur"></div>
                <div className="relative bg-white p-4 rounded-lg shadow-lg">
                  <img 
                    src="/placeholder.svg" 
                    alt="Certificate Dashboard" 
                    className="w-full h-auto rounded border" 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">How CertVault Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 bg-certVault-50 rounded-lg">
              <div className="w-16 h-16 bg-certVault-100 rounded-full flex items-center justify-center mb-4">
                <Shield className="h-8 w-8 text-certVault-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Secure Storage</h3>
              <p className="text-muted-foreground">
                Upload and securely store your certificates in your personal vault.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 bg-certVault-50 rounded-lg">
              <div className="w-16 h-16 bg-certVault-100 rounded-full flex items-center justify-center mb-4">
                <Award className="h-8 w-8 text-certVault-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Verification</h3>
              <p className="text-muted-foreground">
                Get your certificates verified and display them with confidence.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 bg-certVault-50 rounded-lg">
              <div className="w-16 h-16 bg-certVault-100 rounded-full flex items-center justify-center mb-4">
                <LinkIcon className="h-8 w-8 text-certVault-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Shareable Profile</h3>
              <p className="text-muted-foreground">
                Share your verified certificates with recruiters via a custom profile link.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-certVault-900 text-white py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Showcase Your Skills?</h2>
          <p className="text-lg text-certVault-100 mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who trust CertVault to verify and share their achievements.
          </p>
          <Link to="/signup">
            <Button size="lg" variant="secondary">Create Your Certificate Vault</Button>
          </Link>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
