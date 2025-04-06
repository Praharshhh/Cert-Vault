
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-certVault-50 p-4">
      <div className="text-center">
        <div className="flex justify-center mb-6">
          <Shield className="h-16 w-16 text-certVault-300" />
        </div>
        <h1 className="text-4xl font-bold mb-2 text-certVault-800">404</h1>
        <h2 className="text-2xl font-semibold mb-4 text-certVault-700">Page Not Found</h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved to a different location.
        </p>
        <Link to="/">
          <Button>
            Return to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
