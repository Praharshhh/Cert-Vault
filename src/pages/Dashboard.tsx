
import { useState, useEffect } from 'react';
import DashboardSidebar from "@/components/DashboardSidebar";
import CertificateUploader from "@/components/CertificateUploader";
import CertificateCard, { Certificate } from "@/components/CertificateCard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Shield, Upload, Award, ChartPie, Calendar, Link as LinkIcon, Download } from "lucide-react";
import { toast } from "@/hooks/use-toast";

// Mock data
const mockCertificates: Certificate[] = [
  {
    id: "1",
    title: "React Developer Certification",
    issuer: "Udemy",
    issueDate: "Mar 2023",
    imageUrl: "/placeholder.svg",
    verificationUrl: "https://example.com/verify/123",
    isVerified: true,
    category: "Web Development"
  },
  {
    id: "2",
    title: "Python Data Science Specialization",
    issuer: "Coursera",
    issueDate: "Jan 2023",
    imageUrl: "/placeholder.svg",
    verificationUrl: "https://example.com/verify/456",
    isVerified: true,
    category: "Data Science"
  },
  {
    id: "3",
    title: "UX/UI Design Fundamentals",
    issuer: "Skillshare",
    issueDate: "Nov 2022",
    imageUrl: "/placeholder.svg",
    isVerified: false,
    category: "Design"
  },
  {
    id: "4",
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    issueDate: "Feb 2023",
    imageUrl: "/placeholder.svg",
    verificationUrl: "https://example.com/verify/789",
    isVerified: true,
    category: "Cloud Computing"
  },
  {
    id: "5",
    title: "Cybersecurity Fundamentals",
    issuer: "edX",
    issueDate: "Apr 2023",
    imageUrl: "/placeholder.svg",
    isVerified: false,
    category: "Security"
  },
];

// Activity data
const recentActivity = [
  { id: 1, action: "Certificate uploaded", date: "Today, 10:30 AM" },
  { id: 2, action: "Certificate verified", date: "Yesterday, 2:45 PM" },
  { id: 3, action: "Profile viewed by recruiter", date: "Apr 4, 2025" },
  { id: 4, action: "Shared profile link", date: "Apr 2, 2025" },
];

const Dashboard = () => {
  const [showUploader, setShowUploader] = useState(false);
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [shareUrl, setShareUrl] = useState("https://certvault.io/profile/johndoe");

  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setCertificates(mockCertificates);
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const toggleUploader = () => {
    setShowUploader(!showUploader);
  };

  const handleCategoryFilter = (category: string | null) => {
    setActiveCategory(category);
  };

  const filteredCertificates = activeCategory
    ? certificates.filter(cert => cert.category === activeCategory)
    : certificates;

  const categories = Array.from(new Set(certificates.map(cert => cert.category)));

  const handleShareProfile = () => {
    navigator.clipboard.writeText(shareUrl);
    toast({
      title: "Link copied to clipboard",
      description: "You can now share your certificate profile with others.",
    });
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <div className="w-64 hidden md:block">
        <DashboardSidebar />
      </div>

      <div className="flex-1 overflow-auto">
        <div className="p-6">
          <div className="mb-8">
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <p className="text-muted-foreground">Manage your certificates and profile</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Certificates</p>
                  <h3 className="text-3xl font-bold">{certificates.length}</h3>
                </div>
                <Shield className="h-10 w-10 text-certVault-200" />
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Verified Certificates</p>
                  <h3 className="text-3xl font-bold">
                    {certificates.filter(cert => cert.isVerified).length}
                  </h3>
                </div>
                <Award className="h-10 w-10 text-accent/30" />
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Profile Views</p>
                  <h3 className="text-3xl font-bold">24</h3>
                  <p className="text-xs text-green-600 mt-1">↑ 12% this week</p>
                </div>
                <ChartPie className="h-10 w-10 text-muted-foreground/30" />
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white p-6 rounded-lg shadow-sm border mb-8">
            <h2 className="text-lg font-medium mb-4">Quick Actions</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              <Button 
                variant="outline" 
                className="flex flex-col h-auto py-4 gap-2" 
                onClick={toggleUploader}
              >
                <Upload size={20} />
                <span>Upload Certificate</span>
              </Button>
              
              <Button 
                variant="outline" 
                className="flex flex-col h-auto py-4 gap-2"
                onClick={handleShareProfile}
              >
                <LinkIcon size={20} />
                <span>Share Profile</span>
              </Button>
              
              <Button 
                variant="outline" 
                className="flex flex-col h-auto py-4 gap-2"
              >
                <Download size={20} />
                <span>Download All</span>
              </Button>
              
              <Button 
                variant="outline" 
                className="flex flex-col h-auto py-4 gap-2"
              >
                <Calendar size={20} />
                <span>Schedule Reminder</span>
              </Button>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white p-6 rounded-lg shadow-sm border mb-8">
            <h2 className="text-lg font-medium mb-4">Recent Activity</h2>
            <div className="space-y-4">
              {recentActivity.map(activity => (
                <div key={activity.id} className="flex justify-between items-center border-b pb-3 last:border-0">
                  <span>{activity.action}</span>
                  <span className="text-sm text-muted-foreground">{activity.date}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Certificates */}
          <div className="bg-white p-6 rounded-lg shadow-sm border mb-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
              <h2 className="text-xl font-bold">My Certificates</h2>
              <Button onClick={toggleUploader} className="mt-2 sm:mt-0">
                {showUploader ? "Cancel" : "Upload Certificate"}
              </Button>
            </div>

            {showUploader ? (
              <div className="mb-8">
                <CertificateUploader />
              </div>
            ) : null}
            
            {/* Categories filter */}
            <div className="flex flex-wrap gap-2 mb-6">
              <Button 
                variant={activeCategory === null ? "default" : "outline"}
                size="sm"
                onClick={() => handleCategoryFilter(null)}
              >
                All
              </Button>
              {categories.map(category => (
                <Button 
                  key={category}
                  variant={activeCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => handleCategoryFilter(category)}
                >
                  {category}
                </Button>
              ))}
            </div>

            <Tabs defaultValue="all">
              <TabsList className="mb-6">
                <TabsTrigger value="all">All Certificates</TabsTrigger>
                <TabsTrigger value="verified">Verified</TabsTrigger>
                <TabsTrigger value="pending">Pending</TabsTrigger>
              </TabsList>

              <TabsContent value="all">
                {isLoading ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="h-60 bg-gray-100 animate-pulse rounded-lg"></div>
                    ))}
                  </div>
                ) : filteredCertificates.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredCertificates.map(certificate => (
                      <CertificateCard key={certificate.id} certificate={certificate} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <p className="text-muted-foreground">No certificates found for this filter</p>
                  </div>
                )}
              </TabsContent>

              <TabsContent value="verified">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredCertificates
                    .filter(cert => cert.isVerified)
                    .map(certificate => (
                      <CertificateCard key={certificate.id} certificate={certificate} />
                    ))}
                </div>
              </TabsContent>

              <TabsContent value="pending">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredCertificates
                    .filter(cert => !cert.isVerified)
                    .map(certificate => (
                      <CertificateCard key={certificate.id} certificate={certificate} />
                    ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
