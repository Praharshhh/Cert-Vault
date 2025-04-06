
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Shield, User, FileText, Award, Settings, ChartPie, Bell, LogOut } from "lucide-react";

const navItems = [
  { name: "Dashboard", path: "/dashboard", icon: ChartPie },
  { name: "My Certificates", path: "/dashboard/certificates", icon: FileText },
  { name: "Public Profile", path: "/profile/johndoe", icon: User },
  { name: "Achievements", path: "/dashboard/achievements", icon: Award },
  { name: "Notifications", path: "/dashboard/notifications", icon: Bell },
  { name: "Settings", path: "/dashboard/settings", icon: Settings },
];

const DashboardSidebar = () => {
  const location = useLocation();
  
  return (
    <div className="bg-white border-r h-full p-4 flex flex-col">
      <div className="flex items-center gap-2 p-2 mb-6">
        <Shield className="w-6 h-6 text-certVault-600" />
        <h2 className="font-bold text-lg">CertVault</h2>
      </div>
      
      <nav className="space-y-1 flex-grow">
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
      
      <div className="pt-4 mt-4 border-t">
        <Link
          to="/login"
          className="flex items-center gap-3 px-3 py-2 rounded-md text-sm text-gray-600 hover:bg-gray-100"
        >
          <LogOut className="h-4 w-4 text-gray-500" />
          Sign Out
        </Link>
      </div>
      
      <div className="mt-4 pt-4 border-t">
        <div className="flex items-center px-3">
          <div className="w-8 h-8 rounded-full bg-certVault-100 flex items-center justify-center">
            <User className="h-4 w-4 text-certVault-600" />
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium">John Doe</p>
            <p className="text-xs text-muted-foreground">john.doe@example.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardSidebar;
