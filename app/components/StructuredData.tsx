export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "IconiqEng",
    "description": "Full-stack web development studio specializing in React, Node.js, Python, and AWS",
    "url": "https://iconiqeng.com",
    "logo": "https://iconiqeng.com/logo.png",
    "sameAs": [
      "https://github.com/iconiqeng-hash",
      "https://www.linkedin.com/in/iconic-engineers-54bbb6396",
      "https://www.instagram.com/iconiq_eng"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "iconiqeng@gmail.com",
      "contactType": "Customer Service"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "serviceType": [
      "Full-Stack Web Development",
      "Custom Web App Design",
      "API Integration",
      "Cloud Deployment",
      "UI/UX Design"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

