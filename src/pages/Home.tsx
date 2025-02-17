import React from 'react';
import { Helmet } from 'react-helmet-async';
import EmailBox from '../components/EmailBox';
import { Shield, Clock, Lock, Mail } from 'lucide-react';
import { ErrorBoundary } from '../components/ErrorBoundary';

const Home: React.FC = () => {
  return (
    <ErrorBoundary>
      <Helmet>
        <title>Temp Mail - Temporary Disposable Email | Spam-Free EllMails</title>
        <meta name="description" content="Get instant disposable email addresses with unique customization features. Protect your real inbox from spam with EllMails's secure temporary email service." />
        <meta name="keywords" content="temporary email, disposable email, temp mail, anonymous email, spam protection, custom email, temporary mail service, secure email" />
        <link rel="canonical" href="https://ell-mail.netlify.app" />
        
        {/* Open Graph */}
        <meta property="og:title" content="EllMails - Secure & Customizable Temporary Email Service" />
        <meta property="og:description" content="Get instant disposable email addresses with unique customization features. Protect your real inbox from spam with SnapMails's secure temporary email service." />
        <meta property="og:url" content="https://ell-mail.netlify.app" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://ell-mail.netlify.app/og-image.jpg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="EllMails - Secure Temporary Email Service" />
        <meta name="twitter:description" content="Get instant disposable email addresses with unique customization features. Protect your inbox from spam." />
        <meta name="twitter:image" content="https://ell-mail.netlify.app/twitter-image.jpg" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "EllMails",
            "description": "Secure and customizable disposable email service",
            "url": "https://ell-mail.netlify.app",
            "applicationCategory": "Email Service",
            "operatingSystem": "All",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            }
          })}
        </script>
      </Helmet>

      {/* Rest of the Home component remains unchanged */}
      <div className="relative">
        {/* Existing JSX content */}
      </div>
    </ErrorBoundary>
  );
};

export default Home;
