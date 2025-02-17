import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Users, Globe } from 'lucide-react';

export default function About() {
  return (
    <>
      <Helmet>
        <title>About EllMails - Our Mission and Values</title>
        <meta name="description" content="Learn about EllMails' commitment to email privacy and security. Discover how we're making temporary email services more accessible and customizable." />
        <meta name="keywords" content="about ellmails, email privacy, temporary email service, disposable email company" />
        <link rel="canonical" href="https://ell-mail.netlify.app/about" />
        
        <meta property="og:title" content="About EllMails - Temporary Email Service" />
        <meta property="og:description" content="Learn about EllMails' commitment to email privacy and security." />
        <meta property="og:url" content="https://ell-mail.netlify.app/about" />
        <meta property="og:type" content="website" />
        
        <meta name="twitter:title" content="About EllMails - Our Story" />
        <meta name="twitter:description" content="Discover the team and mission behind EllMails." />
      </Helmet>

      <main className="max-w-4xl mx-auto px-4 py-16" role="main">
        <h1 className="text-4xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">About EllMails</h1>
        
        <div className="prose prose-lg mx-auto">
          <p className="text-lg text-gray-700 dark:text-gray-200 max-w-2xl mx-auto mb-8 leading-relaxed">
            EllMails is a leading provider of disposable email services, helping users protect their privacy and maintain a clean inbox since 2025.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/50 rounded-full flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                <Shield className="w-6 h-6 text-blue-500 dark:text-blue-400" />
              </div>
              <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Privacy First</h3>
              <p className="text-gray-700 dark:text-gray-200">Your privacy is our top priority. We never store or share your personal information.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/50 rounded-full flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                <Users className="w-6 h-6 text-blue-500 dark:text-blue-400" />
              </div>
              <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Trusted Service</h3>
              <p className="text-gray-700 dark:text-gray-200">Millions of users trust SnapMails for their temporary email needs.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/50 rounded-full flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                <Globe className="w-6 h-6 text-blue-500 dark:text-blue-400" />
              </div>
              <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Global Access</h3>
              <p className="text-gray-700 dark:text-gray-200">Available worldwide with fast, reliable service.</p>
            </div>
          </div>

          <section aria-labelledby="mission-heading">
            <h2 id="mission-heading" className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Our Mission</h2>
            <p className="text-gray-700 dark:text-gray-200">
              Our mission is to provide a secure and reliable temporary email service that helps users protect their privacy online. We believe everyone has the right to control their digital footprint and keep their primary inbox free from spam.
            </p>
          </section>

          <section aria-labelledby="features-heading">
            <h2 id="features-heading" className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Why Choose Us?</h2>
            <ul role="list" className="text-gray-700 dark:text-gray-200">
              <li>Instant email address generation</li>
              <li>No registration required</li>
              <li>Secure and private</li>
              <li>User-friendly interface</li>
              <li>24/7 availability</li>
              <li>Free service</li>
            </ul>
          </section>
        </div>
      </main>
    </>
  );
}
