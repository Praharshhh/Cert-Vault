
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import OTPInput from "@/components/OTPInput";

const OTPVerification = () => {
  const [isVerifying, setIsVerifying] = useState(false);
  const [timer, setTimer] = useState(30);
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  
  // Extract email from state passed during navigation
  const email = location.state?.email || '';
  const isSignUp = location.state?.isSignUp || false;
  
  useEffect(() => {
    // Start countdown timer
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);
  
  const handleVerify = async (otp: string) => {
    setIsVerifying(true);
    
    try {
      // Here you would normally call an API to verify the OTP
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Simulate successful verification
      toast({
        title: "Success",
        description: isSignUp 
          ? "Your account has been verified successfully!" 
          : "Login successful!",
      });
      
      // Redirect to dashboard after successful verification
      navigate("/dashboard");
    } catch (error) {
      toast({
        title: "Error",
        description: "Invalid verification code. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsVerifying(false);
    }
  };
  
  const handleResendOTP = async () => {
    try {
      // Here you would normally call an API to resend the OTP
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setTimer(30); // Reset timer
      
      toast({
        title: "OTP Resent",
        description: `A new verification code has been sent to ${email}`,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to resend verification code. Please try again.",
        variant: "destructive",
      });
    }
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-certVault-50 p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        <div className="text-center mb-6">
          <div className="flex justify-center mb-4">
            <Shield className="h-12 w-12 text-certVault-600" />
          </div>
          <h1 className="text-2xl font-bold mb-1">Verification Code</h1>
          <p className="text-sm text-muted-foreground">
            We've sent a verification code to <span className="font-semibold">{email}</span>
          </p>
        </div>
        
        <div className="space-y-8">
          <OTPInput onComplete={handleVerify} />
          
          <div className="text-center">
            <Button
              onClick={() => {}} // OTPInput component will call handleVerify directly
              disabled={isVerifying}
              className="w-full"
            >
              {isVerifying ? "Verifying..." : "Verify Code"}
            </Button>
            
            <div className="mt-4 text-sm text-center">
              {timer > 0 ? (
                <p className="text-muted-foreground">
                  Resend code in <span className="font-semibold">{timer}s</span>
                </p>
              ) : (
                <button
                  onClick={handleResendOTP}
                  className="text-certVault-600 hover:underline"
                >
                  Resend verification code
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OTPVerification;
