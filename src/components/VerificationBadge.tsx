
import { Check } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

type VerificationBadgeProps = {
  isVerified: boolean;
  size?: 'sm' | 'md' | 'lg';
};

const VerificationBadge = ({ isVerified, size = 'md' }: VerificationBadgeProps) => {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-5 w-5',
    lg: 'h-6 w-6',
  };
  
  if (!isVerified) return null;
  
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className={`bg-accent rounded-full flex items-center justify-center ${sizeClasses[size]}`}>
            <Check className="text-white" size={size === 'sm' ? 12 : size === 'md' ? 14 : 16} />
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p className="text-xs">Verified Certificate</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default VerificationBadge;
