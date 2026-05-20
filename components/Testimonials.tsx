import React from 'react';
import { Star, ExternalLink } from 'lucide-react';

export const Testimonials: React.FC = () => {
  // Update this URL with your actual Google Business review link
  const googleReviewUrl = 'https://g.page/r/YOUR_BUSINESS_ID/review'; // TODO: Replace with actual Google review link

  const handleReviewClick = () => {
    window.open(googleReviewUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-zinc-900 py-24 md:py-32 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Header */}
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Love My Work?{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                Tell The World
              </span>
            </h2>
            <p className="text-xl text-zinc-300 max-w-2xl mx-auto leading-relaxed mb-8">
              Your feedback helps other businesses find quality web development services.
              If you've enjoyed working with me, I'd be incredibly grateful for a Google review.
            </p>
          </div>

          {/* CTA Card */}
          <div className="bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-700 rounded-2xl p-12 shadow-2xl">
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 mb-6">
                <Star className="w-10 h-10 text-white fill-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Leave a Google Review</h3>
              <p className="text-zinc-400 max-w-md mx-auto">
                Share your experience and help other businesses make informed decisions.
                It only takes a minute!
              </p>
            </div>

            {/* Review Button */}
            <button
              onClick={handleReviewClick}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold rounded-full text-lg shadow-lg shadow-indigo-900/50 transition-all transform hover:scale-105"
            >
              Write a Review on Google
              <ExternalLink className="w-5 h-5" />
            </button>

            {/* Trust Indicators */}
            <div className="mt-10 pt-8 border-t border-zinc-700/50">
              <p className="text-sm text-zinc-500 mb-4">Trusted by businesses across Sydney and beyond</p>
              <div className="flex justify-center gap-8 text-sm text-zinc-400">
                <span>✓ Personal Service</span>
                <span>✓ No Agencies</span>
                <span>✓ Direct Communication</span>
              </div>
            </div>
          </div>

          {/* Bottom Note */}
          <p className="mt-8 text-sm text-zinc-500">
            Not a client yet?{' '}
            <a
              href="#contact"
              className="text-indigo-400 hover:text-indigo-300 underline transition-colors"
            >
              Get your free proposal
            </a>
            {' '}and experience the difference.
          </p>
        </div>
      </div>
    </div>
  );
};