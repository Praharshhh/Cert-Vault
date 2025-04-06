
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Copy, Link as LinkIcon } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface ProfileHeaderProps {
  username: string;
  name: string;
  bio?: string;
  avatarUrl?: string;
  totalCertificates: number;
  verifiedCertificates: number;
}

const ProfileHeader = ({
  username,
  name,
  bio,
  avatarUrl,
  totalCertificates,
  verifiedCertificates,
}: ProfileHeaderProps) => {
  const { toast } = useToast();
  
  const handleCopyLink = () => {
    const profileUrl = `${window.location.origin}/profile/${username}`;
    navigator.clipboard.writeText(profileUrl);
    toast({
      title: "Link copied!",
      description: "Profile link copied to clipboard",
    });
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        <Avatar className="h-24 w-24 border-2 border-certVault-100">
          <AvatarImage src={avatarUrl} alt={name} />
          <AvatarFallback className="bg-certVault-100 text-certVault-800 text-xl">
            {name.split(' ').map(n => n[0]).join('')}
          </AvatarFallback>
        </Avatar>
        
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-2xl font-bold">{name}</h1>
          <p className="text-muted-foreground">@{username}</p>
          
          {bio && <p className="mt-2 text-sm">{bio}</p>}
          
          <div className="mt-4 flex flex-wrap gap-4 justify-center md:justify-start">
            <div className="text-center">
              <p className="text-2xl font-bold">{totalCertificates}</p>
              <p className="text-sm text-muted-foreground">Certificates</p>
            </div>
            
            <div className="text-center">
              <p className="text-2xl font-bold">{verifiedCertificates}</p>
              <p className="text-sm text-muted-foreground">Verified</p>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col gap-2">
          <Button 
            variant="outline" 
            size="sm" 
            className="flex items-center gap-2"
            onClick={handleCopyLink}
          >
            <Copy size={14} />
            <span>Copy Profile Link</span>
          </Button>
          
          <Button 
            variant="secondary" 
            size="sm" 
            className="flex items-center gap-2"
          >
            <LinkIcon size={14} />
            <span>Share Profile</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
