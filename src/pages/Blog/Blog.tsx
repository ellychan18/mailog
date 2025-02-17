import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function Blog() {
  return (
    <>
      <Helmet>
        <title>Blog - EllMails</title>
        <meta name="robots" content="noindex, follow" />
        <link rel="alternate" type="application/rss+xml" title="EllMails Blog RSS Feed" href="/blog/rss.xml" />
      </Helmet>
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-4">Blog</h1>
        <p>Please check our RSS feed for the latest articles.</p>
        <a 
          href="/blog/rss.xml"
          className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          aria-label="View RSS Feed"
        >
          View RSS Feed
        </a>
      </div>
    </>
  );
}
