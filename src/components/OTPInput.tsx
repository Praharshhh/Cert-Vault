
import React, { useState, useRef, useEffect } from 'react';

interface OTPInputProps {
  length?: number;
  onComplete: (otp: string) => void;
}

const OTPInput = ({ length = 6, onComplete }: OTPInputProps) => {
  const [otp, setOtp] = useState<string[]>(Array(length).fill(''));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value;
    
    if (!value) {
      // Handle backspace
      const newOtp = [...otp];
      newOtp[index] = '';
      setOtp(newOtp);
      
      // Move focus to previous input
      if (index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
      return;
    }
    
    // Only allow single digits
    const digit = value.slice(-1).match(/[0-9]/);
    if (!digit) return;
    
    const newOtp = [...otp];
    newOtp[index] = digit[0];
    setOtp(newOtp);
    
    // Move focus to next input if available
    if (index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    } else {
      // If we've filled the last input, call onComplete
      const otpValue = [...newOtp].join('');
      if (newOtp.every(d => d !== '')) {
        onComplete(otpValue);
      }
      
      // Blur the input to hide keyboard on mobile
      inputRefs.current[index]?.blur();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    // Handle backspace when current input is empty
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      // Focus previous input
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text/plain').trim();
    
    // Only proceed if pasted content is a number and has expected length
    if (!pastedData.match(/^[0-9]+$/) || pastedData.length !== length) return;
    
    const otpDigits = pastedData.split('').slice(0, length);
    setOtp(otpDigits);
    
    // Focus last input
    inputRefs.current[length - 1]?.focus();
    
    // Call onComplete callback
    onComplete(otpDigits.join(''));
  };
  
  return (
    <div className="flex justify-center gap-2 md:gap-4">
      {otp.map((digit, index) => (
        <input
          key={index}
          ref={(ref) => inputRefs.current[index] = ref}
          className="w-10 h-14 text-center text-xl font-bold border-2 border-gray-300 rounded-md focus:border-certVault-500 focus:outline-none"
          type="text"
          inputMode="numeric"
          autoComplete="one-time-code"
          value={digit}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          onPaste={handlePaste}
          maxLength={1}
        />
      ))}
    </div>
  );
};

export default OTPInput;
