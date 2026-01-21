export const downloadCV = async () => {
  // Use PUBLIC_URL for correct path in GitHub Pages
  const pdfUrl = `${process.env.PUBLIC_URL}/Fayekuzzaman-Rusume.pdf`;
  
  // Fetch the PDF as a blob
  const response = await fetch(pdfUrl);
  const blob = await response.blob();
  
  // Create a blob URL
  const blobUrl = window.URL.createObjectURL(blob);
  
  // Create temporary link element
  const link = document.createElement('a');
  link.href = blobUrl;
  link.download = 'Fayekuzzaman_Rizvi_CV.pdf';
  
  // Trigger download
  document.body.appendChild(link);
  link.click();
  
  // Cleanup
  document.body.removeChild(link);
  window.URL.revokeObjectURL(blobUrl);
};