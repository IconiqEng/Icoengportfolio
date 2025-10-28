export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "IconiqEng",
    "description": "Full-stack web development studio specializing in React, Node.js, Python, and AWS",
    "url": "https://iconiqeng.com",
    "logo": "https://iconiqeng.com/logo.png",
    "sameAs": [
      "https://github.com/IconiqEng",
      "https://linkedin.com/company/iconiqeng"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "hello@iconiqeng.com",
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

