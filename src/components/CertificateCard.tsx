
import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Link as LinkIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import VerificationBadge from "./VerificationBadge";

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  imageUrl: string;
  verificationUrl?: string;
  isVerified: boolean;
  category: string;
}

interface CertificateCardProps {
  certificate: Certificate;
  className?: string;
}

const CertificateCard = ({ certificate, className }: CertificateCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <Card 
      className={cn(
        "overflow-hidden transition-all duration-300 h-full flex flex-col", 
        isHovered ? "shadow-lg" : "shadow-md",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-40 overflow-hidden">
        <img 
          src={certificate.imageUrl || "/placeholder.svg"} 
          alt={certificate.title}
          className="w-full h-full object-cover transition-transform duration-300"
          style={{
            transform: isHovered ? 'scale(1.05)' : 'scale(1)',
          }}
        />
        <div className="absolute top-2 right-2">
          <VerificationBadge isVerified={certificate.isVerified} />
        </div>
      </div>
      
      <CardContent className="flex flex-col flex-grow p-4">
        <div className="space-y-2 flex-grow">
          <h3 className="font-semibold text-base line-clamp-2">{certificate.title}</h3>
          <p className="text-sm text-muted-foreground">{certificate.issuer}</p>
        </div>
        
        <div className="flex items-center justify-between mt-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <Calendar size={14} />
            <span>{certificate.issueDate}</span>
          </div>
          
          {certificate.verificationUrl && (
            <a 
              href={certificate.verificationUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-primary hover:text-primary/80 transition-colors"
            >
              <LinkIcon size={14} />
              <span>Verify</span>
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default CertificateCard;
