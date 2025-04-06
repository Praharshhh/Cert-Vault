
import { useState, useEffect } from 'react';
import DashboardSidebar from "@/components/DashboardSidebar";
import CertificateUploader from "@/components/CertificateUploader";
import CertificateCard, { Certificate } from "@/components/CertificateCard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Shield, Upload, Award } from "lucide-react";

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
];

const Dashboard = () => {
  const [showUploader, setShowUploader] = useState(false);
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const [isLoading, setIsLoading] = useState(true);

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
                  <p className="text-sm font-medium text-muted-foreground">Pending Verification</p>
                  <h3 className="text-3xl font-bold">
                    {certificates.filter(cert => !cert.isVerified).length}
                  </h3>
                </div>
                <Upload className="h-10 w-10 text-muted-foreground/30" />
              </div>
            </div>
          </div>

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
                ) : certificates.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certificates.map(certificate => (
                      <CertificateCard key={certificate.id} certificate={certificate} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <p className="text-muted-foreground">No certificates uploaded yet</p>
                  </div>
                )}
              </TabsContent>

              <TabsContent value="verified">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {certificates
                    .filter(cert => cert.isVerified)
                    .map(certificate => (
                      <CertificateCard key={certificate.id} certificate={certificate} />
                    ))}
                </div>
              </TabsContent>

              <TabsContent value="pending">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {certificates
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
