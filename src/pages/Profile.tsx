
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProfileHeader from "@/components/ProfileHeader";
import CertificateCard, { Certificate } from "@/components/CertificateCard";

// Mock data
const mockProfile = {
  username: "johndoe",
  name: "John Doe",
  bio: "Full-stack developer with expertise in React, Node.js, and cloud architecture. Always learning and building.",
  totalCertificates: 6,
  verifiedCertificates: 5,
};

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
    isVerified: true,
    category: "Design"
  },
  {
    id: "4",
    title: "Cloud Architecture Professional",
    issuer: "AWS",
    issueDate: "Sep 2022",
    imageUrl: "/placeholder.svg",
    verificationUrl: "https://example.com/verify/789",
    isVerified: true,
    category: "Cloud Computing"
  },
  {
    id: "5",
    title: "Advanced JavaScript Patterns",
    issuer: "Frontend Masters",
    issueDate: "Jul 2022",
    imageUrl: "/placeholder.svg",
    verificationUrl: "https://example.com/verify/abc",
    isVerified: true,
    category: "Web Development"
  },
  {
    id: "6",
    title: "Blockchain Fundamentals",
    issuer: "Udacity",
    issueDate: "May 2022",
    imageUrl: "/placeholder.svg",
    isVerified: false,
    category: "Blockchain"
  },
];

// Group certificates by category
const groupCertificatesByCategory = (certificates: Certificate[]) => {
  return certificates.reduce((groups, certificate) => {
    const { category } = certificate;
    groups[category] = groups[category] || [];
    groups[category].push(certificate);
    return groups;
  }, {} as Record<string, Certificate[]>);
};

const Profile = () => {
  const { username } = useParams<{ username: string }>();
  const [isLoading, setIsLoading] = useState(true);
  const [profile, setProfile] = useState(mockProfile);
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  
  useEffect(() => {
    // Simulate API call to load profile data
    const timer = setTimeout(() => {
      setProfile(mockProfile);
      setCertificates(mockCertificates);
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, [username]);
  
  const certificatesByCategory = groupCertificatesByCategory(certificates);
  const categories = Object.keys(certificatesByCategory);
  
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse-slow">Loading profile...</div>
      </div>
    );
  }
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="container mx-auto px-4 md:px-6 py-8 flex-1">
        <ProfileHeader 
          username={profile.username}
          name={profile.name}
          bio={profile.bio}
          totalCertificates={profile.totalCertificates}
          verifiedCertificates={profile.verifiedCertificates}
        />
        
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-2">Verified Certificates</h2>
          <p className="text-muted-foreground">
            Showcasing {profile.verifiedCertificates} verified certificates across {categories.length} categories.
          </p>
        </div>
        
        {categories.map(category => (
          <div key={category} className="mb-10">
            <h3 className="text-xl font-semibold mb-4 pb-2 border-b">{category}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certificatesByCategory[category].map(certificate => (
                <CertificateCard 
                  key={certificate.id} 
                  certificate={certificate} 
                />
              ))}
            </div>
          </div>
        ))}
      </main>
      
      <Footer />
    </div>
  );
};

export default Profile;
