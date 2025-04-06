
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Shield, User, FileText, Award } from "lucide-react";

const navItems = [
  { name: "Dashboard", path: "/dashboard", icon: Shield },
  { name: "My Certificates", path: "/dashboard/certificates", icon: FileText },
  { name: "Public Profile", path: "/dashboard/profile", icon: User },
  { name: "Achievements", path: "/dashboard/achievements", icon: Award },
];

const DashboardSidebar = () => {
  const location = useLocation();
  
  return (
    <div className="bg-white border-r h-full p-4">
      <div className="flex items-center gap-2 p-2 mb-6">
        <Shield className="w-6 h-6 text-certVault-600" />
        <h2 className="font-bold text-lg">CertVault</h2>
      </div>
      
      <nav className="space-y-1">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;
          
          return (
            <Link
              to={item.path}
              key={item.path}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-md transition-colors text-sm",
                isActive
                  ? "bg-certVault-50 text-certVault-700 font-medium"
                  : "text-gray-600 hover:bg-gray-100"
              )}
            >
              <Icon className={cn("h-4 w-4", isActive ? "text-certVault-600" : "text-gray-500")} />
              {item.name}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default DashboardSidebar;
