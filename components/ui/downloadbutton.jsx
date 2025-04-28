'use client';
import React from 'react'
import { Button } from '@/components/ui/button'

const DownloadButton = () => {
    const handleDownload = () => {
      // Create a link element
      const link = document.getElementById("downloadCV");
  
      // Set the file URL
      link.href = "/public/assets/resume/resume.pdf"; // Replace with your file URL
  
      // Set the download attribute to specify the filename
      link.download = "resume.pdf"; // Desired file name
  
      // Trigger the download
      link.click();
    };
  
    return (
      <Button id="downloadCV" onClick={handleDownload} style={{ padding: "10px 20px", fontSize: "16px", border: "3px white"}} >
        Download My CV
      </Button>
    );
  };
  
  export default DownloadButton;