
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Upload } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";

const CertificateUploader = () => {
  const [file, setFile] = useState<File | null>(null);
  const [title, setTitle] = useState('');
  const [issuer, setIssuer] = useState('');
  const [category, setCategory] = useState('');
  const [verificationUrl, setVerificationUrl] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const { toast } = useToast();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      // Check file type (PDF, JPG, PNG)
      const fileType = selectedFile.type;
      if (
        fileType !== 'application/pdf' &&
        fileType !== 'image/jpeg' &&
        fileType !== 'image/png'
      ) {
        toast({
          title: "Invalid file type",
          description: "Please upload a PDF, JPG, or PNG file.",
          variant: "destructive",
        });
        return;
      }
      setFile(selectedFile);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!file || !title || !issuer) {
      toast({
        title: "Missing information",
        description: "Please fill all required fields and select a certificate file.",
        variant: "destructive",
      });
      return;
    }

    setIsUploading(true);
    
    // Simulate upload
    setTimeout(() => {
      setIsUploading(false);
      setFile(null);
      setTitle('');
      setIssuer('');
      setCategory('');
      setVerificationUrl('');
      
      toast({
        title: "Certificate uploaded",
        description: "Your certificate has been uploaded and will be reviewed soon.",
      });
    }, 2000);
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Upload Certificate</CardTitle>
        <CardDescription>
          Upload your certificates for verification
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Certificate Title*</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Advanced React Development"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="issuer">Issuing Organization*</Label>
            <Input
              id="issuer"
              value={issuer}
              onChange={(e) => setIssuer(e.target.value)}
              placeholder="e.g. Coursera, Udemy"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="category">Category</Label>
            <Input
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="e.g. Web Development, Data Science"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="verificationUrl">Verification URL (optional)</Label>
            <Input
              id="verificationUrl"
              value={verificationUrl}
              onChange={(e) => setVerificationUrl(e.target.value)}
              placeholder="https://..."
              type="url"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="certificate">Certificate File*</Label>
            <div className="border-2 border-dashed rounded-lg p-6 text-center cursor-pointer hover:bg-secondary/50 transition-colors" onClick={() => document.getElementById('certificate')?.click()}>
              <Input
                id="certificate"
                type="file"
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={handleFileChange}
                className="hidden"
                required
              />
              <Upload className="mx-auto h-12 w-12 text-muted-foreground" />
              <p className="mt-2 text-sm text-muted-foreground">
                {file ? file.name : "Click to upload or drag and drop"}
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                PDF, JPG or PNG (max. 10MB)
              </p>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button 
          className="w-full" 
          onClick={handleSubmit} 
          disabled={isUploading || !file || !title || !issuer}
        >
          {isUploading ? "Uploading..." : "Upload Certificate"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CertificateUploader;
