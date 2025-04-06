
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, FileText, Award, Link as LinkIcon, Lock, CheckCircle } from "lucide-react";

const Features = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-certVault-50 to-white py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-certVault-900 mb-4">
              CertVault Features
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              Discover how CertVault helps you secure, verify and showcase your professional achievements
            </p>
          </div>
        </div>
      </section>
      
      {/* Core Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl font-bold text-center mb-12">Core Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-certVault-50 rounded-lg p-6 md:p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-certVault-100 rounded-full flex items-center justify-center mr-4">
                  <Shield className="h-6 w-6 text-certVault-600" />
                </div>
                <h3 className="text-xl font-semibold">Secure Certificate Storage</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Your certificates are safely stored in your personal vault with enterprise-grade encryption. 
                Upload and access your credentials anytime, anywhere.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-certVault-600 mr-2" />
                  <span>Support for PDF, JPG, PNG formats</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-certVault-600 mr-2" />
                  <span>Unlimited storage for verified users</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-certVault-600 mr-2" />
                  <span>Easy organization by category</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-certVault-50 rounded-lg p-6 md:p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-certVault-100 rounded-full flex items-center justify-center mr-4">
                  <Award className="h-6 w-6 text-certVault-600" />
                </div>
                <h3 className="text-xl font-semibold">Certificate Verification</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Add credibility to your certificates with our verification system. Verified certificates 
                stand out to potential employers and validate your accomplishments.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-certVault-600 mr-2" />
                  <span>Tamper-proof verification process</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-certVault-600 mr-2" />
                  <span>Verification badges for authentic certificates</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-certVault-600 mr-2" />
                  <span>Support for all major certification platforms</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-certVault-50 rounded-lg p-6 md:p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-certVault-100 rounded-full flex items-center justify-center mr-4">
                  <LinkIcon className="h-6 w-6 text-certVault-600" />
                </div>
                <h3 className="text-xl font-semibold">Shareable Profile Link</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Create a personalized profile showcase with all your verified certificates. 
                Share a single link with potential employers to demonstrate your skills.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-certVault-600 mr-2" />
                  <span>Custom profile URL (certvault.io/yourname)</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-certVault-600 mr-2" />
                  <span>Categorized certificate display</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-certVault-600 mr-2" />
                  <span>Professional portfolio appearance</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-certVault-50 rounded-lg p-6 md:p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-certVault-100 rounded-full flex items-center justify-center mr-4">
                  <Lock className="h-6 w-6 text-certVault-600" />
                </div>
                <h3 className="text-xl font-semibold">Secure Authentication</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Your security is our priority. CertVault features robust authentication measures to 
                ensure only you can access your certificate repository.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-certVault-600 mr-2" />
                  <span>OTP verification for added security</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-certVault-600 mr-2" />
                  <span>Email-based secure login</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-certVault-600 mr-2" />
                  <span>Privacy controls for certificate sharing</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Feature Comparison */}
          <div className="bg-gray-50 rounded-lg p-6 md:p-8 mb-12">
            <h3 className="text-xl font-semibold text-center mb-6">Why Choose CertVault?</h3>
            
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-3 text-left">Feature</th>
                    <th className="p-3 text-center">CertVault</th>
                    <th className="p-3 text-center">Other Platforms</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="p-3 font-medium">Certificate Verification</td>
                    <td className="p-3 text-center text-green-600">✓</td>
                    <td className="p-3 text-center text-red-600">Limited</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-medium">Public Profile</td>
                    <td className="p-3 text-center text-green-600">✓</td>
                    <td className="p-3 text-center text-red-600">×</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-medium">Multiple Certificate Formats</td>
                    <td className="p-3 text-center text-green-600">✓</td>
                    <td className="p-3 text-center text-green-600">✓</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-medium">Category Organization</td>
                    <td className="p-3 text-center text-green-600">✓</td>
                    <td className="p-3 text-center text-green-600">Limited</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-medium">OTP Security</td>
                    <td className="p-3 text-center text-green-600">✓</td>
                    <td className="p-3 text-center text-red-600">×</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-certVault-900 text-white py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Secure Your Certificates?</h2>
          <p className="text-lg text-certVault-100 mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who trust CertVault to verify and share their achievements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup">
              <Button size="lg" variant="secondary">Create Your Certificate Vault</Button>
            </Link>
            <Link to="/dashboard">
              <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
                View Demo Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Features;
