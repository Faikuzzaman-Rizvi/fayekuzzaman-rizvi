export const downloadCV = () => {
  const pdfUrl = "/Rizvi-cv-N.pdf";        
  const link = document.createElement("a");
  link.href = pdfUrl;
  link.download = "Rizvi-cv-N.pdf";  // <-- set file name only once
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
