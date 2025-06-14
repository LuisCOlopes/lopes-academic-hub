
export const generatePDF = (title: string, content: string): Blob => {
  // Simple PDF generation using text content
  const pdfContent = `%PDF-1.4
1 0 obj
<<
/Type /Catalog
/Pages 2 0 R
>>
endobj

2 0 obj
<<
/Type /Pages
/Kids [3 0 R]
/Count 1
>>
endobj

3 0 obj
<<
/Type /Page
/Parent 2 0 R
/MediaBox [0 0 612 792]
/Contents 4 0 R
/Resources <<
/Font <<
/F1 5 0 R
>>
>>
>>
endobj

4 0 obj
<<
/Length ${title.length + content.length + 100}
>>
stream
BT
/F1 16 Tf
50 750 Td
(${title}) Tj
0 -30 Td
/F1 12 Tf
(${content}) Tj
ET
endstream
endobj

5 0 obj
<<
/Type /Font
/Subtype /Type1
/BaseFont /Helvetica
>>
endobj

xref
0 6
0000000000 65535 f 
0000000010 00000 n 
0000000062 00000 n 
0000000119 00000 n 
0000000279 00000 n 
0000000398 00000 n 
trailer
<<
/Size 6
/Root 1 0 R
>>
startxref
477
%%EOF`;

  return new Blob([pdfContent], { type: 'application/pdf' });
};

export const downloadFile = (filename: string, content: string, title: string) => {
  const blob = generatePDF(title, content);
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

export const validateYouTubeUrl = (url: string): boolean => {
  const youtubeRegex = /^https:\/\/(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/)[\w-]+$/;
  return youtubeRegex.test(url);
};
