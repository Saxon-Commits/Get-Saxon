import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Instagram, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';

interface BeholdPost {
  id: string;
  mediaUrl: string;
  permalink: string;
  mediaType: string;
  caption?: string;
  prunedCaption?: string;
  sizes?: {
    small?: { mediaUrl: string };
    medium?: { mediaUrl: string };
    large?: { mediaUrl: string };
    full?: { mediaUrl: string };
  };
}

export const InstagramFeed: React.FC = () => {
  const [posts, setPosts] = useState<BeholdPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  // Touch swiping state for mobile carousel
  const touchStart = useRef<number | null>(null);
  const touchEnd = useRef<number | null>(null);
  const minSwipeDistance = 50;

  useEffect(() => {
    // Fetch feed data directly from Behold's free JSON API
    const fetchFeed = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://feeds.behold.so/AXx3Ajn4aTeeP19sCwJY');
        if (!response.ok) throw new Error('API fetch failed');
        const data = await response.json();
        if (data && data.posts && Array.isArray(data.posts)) {
          setPosts(data.posts);
        } else {
          throw new Error('Invalid posts structure');
        }
      } catch (err) {
        console.error('Error fetching Instagram feed:', err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchFeed();
  }, []);

  // Carousel handlers
  const handlePrev = () => {
    if (posts.length === 0) return;
    setActiveIndex((prev) => (prev === 0 ? posts.length - 1 : prev - 1));
  };

  const handleNext = () => {
    if (posts.length === 0) return;
    setActiveIndex((prev) => (prev === posts.length - 1 ? 0 : prev + 1));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchEnd.current = null;
    touchStart.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEnd.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStart.current === null || touchEnd.current === null) return;
    const distance = touchStart.current - touchEnd.current;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
  };

  // Helper to extract image source, prioritising high-speed cached Behold CDN sizes
  const getImageUrl = (post: BeholdPost): string => {
    if (post.sizes) {
      if (post.sizes.medium?.mediaUrl) return post.sizes.medium.mediaUrl;
      if (post.sizes.small?.mediaUrl) return post.sizes.small.mediaUrl;
      if (post.sizes.large?.mediaUrl) return post.sizes.large.mediaUrl;
    }
    return post.mediaUrl;
  };

  return (
    <section className="bg-zinc-950 py-24 border-t border-zinc-900 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
              On The <span className="text-indigo-500">Feed</span>
            </h2>
            <p className="text-lg text-zinc-400">
              Stay updated with recent web development projects, design inspiration, and agency work.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <a
              href="https://instagram.com/saxondevelopment"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 border border-zinc-800 hover:border-indigo-500 text-white rounded-full font-medium transition-all group hover:bg-zinc-900/80 shadow-lg shadow-black/50"
            >
              <Instagram size={20} className="text-indigo-400 group-hover:scale-110 transition-transform" />
              <span>@saxondevelopment</span>
              <ArrowUpRight size={16} className="text-zinc-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </motion.div>
        </div>

        {/* Custom Premium Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-1 md:p-2 backdrop-blur-sm overflow-hidden"
        >
          {/* Subtle background glow */}
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* LOADING STATE (Skeletons) */}
          {loading && (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
              {[...Array(6)].map((_, i) => (
                <div 
                  key={i} 
                  className="aspect-square bg-zinc-800/50 rounded-xl animate-pulse border border-zinc-700/20"
                />
              ))}
            </div>
          )}

          {/* ERROR FALLBACK STATE */}
          {error && !loading && (
            <div className="py-16 text-center">
              <Instagram className="w-12 h-12 text-zinc-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Feed Temporarily Unavailable</h3>
              <p className="text-sm text-zinc-400 max-w-sm mx-auto mb-6">
                We couldn't load the live Instagram grid. You can view all our updates and projects directly on our profile.
              </p>
              <a
                href="https://instagram.com/saxondevelopment"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full text-sm font-semibold transition-all shadow-lg shadow-indigo-900/30"
              >
                Go to Instagram
                <ArrowUpRight size={16} />
              </a>
            </div>
          )}

          {/* ACTIVE FEED UI */}
          {!loading && !error && posts.length > 0 && (
            <>
              {/* DESKTOP/TABLET GRID VIEW (Hidden on Mobile) */}
              <div className="hidden sm:grid grid-cols-3 lg:grid-cols-6 gap-1 md:gap-2">
                {posts.map((post) => (
                  <a
                    key={post.id}
                    href={post.permalink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative group aspect-square rounded-xl overflow-hidden bg-zinc-950 border border-zinc-800/40 hover:border-indigo-500/50 transition-all duration-300"
                  >
                    <img
                      src={getImageUrl(post)}
                      alt={post.caption || 'Instagram Post'}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 z-10">
                      <div className="flex justify-end">
                        <div className="p-1.5 bg-zinc-900/80 border border-zinc-800 rounded-full text-indigo-400">
                          <Instagram size={14} />
                        </div>
                      </div>
                      <p className="text-xs text-zinc-300 line-clamp-4 leading-relaxed font-normal">
                        {post.prunedCaption || post.caption || 'View on Instagram'}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              {/* MOBILE CAROUSEL VIEW (Hidden on Tablet/Desktop) */}
              <div className="block sm:hidden relative">
                {/* Carousel Slider */}
                <div 
                  className="w-full overflow-hidden rounded-xl touch-pan-y"
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={handleTouchEnd}
                >
                  <div 
                    className="flex w-full transition-transform duration-300 ease-out"
                    style={{ transform: `translate3d(-${activeIndex * 100}%, 0, 0)` }}
                  >
                    {posts.map((post) => (
                      <div key={post.id} className="w-full flex-shrink-0 px-2 py-1">
                        <a
                          href={post.permalink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block relative aspect-square rounded-lg overflow-hidden border border-zinc-800 bg-zinc-950"
                        >
                          <img
                            src={getImageUrl(post)}
                            alt={post.caption || 'Instagram Post'}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute top-3 right-3 p-2 bg-black/60 backdrop-blur-md rounded-full text-white">
                            <Instagram size={16} />
                          </div>
                        </a>
                        
                        {/* Compact Mobile Caption */}
                        {post.caption && (
                          <p className="mt-3 text-sm text-zinc-400 line-clamp-2 px-1 leading-relaxed">
                            {post.prunedCaption || post.caption}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Left/Right Action Arrows */}
                <button
                  onClick={handlePrev}
                  className="absolute left-4 top-[40%] -translate-y-1/2 p-2 rounded-full bg-black/60 border border-zinc-800/80 text-white backdrop-blur-md hover:bg-black/80 transition active:scale-95 z-20"
                  aria-label="Previous Post"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-4 top-[40%] -translate-y-1/2 p-2 rounded-full bg-black/60 border border-zinc-800/80 text-white backdrop-blur-md hover:bg-black/80 transition active:scale-95 z-20"
                  aria-label="Next Post"
                >
                  <ChevronRight size={18} />
                </button>

                {/* Dots Pagination Indicators */}
                <div className="flex justify-center gap-1.5 mt-4 pb-2">
                  {posts.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        activeIndex === index ? 'w-4 bg-indigo-500' : 'w-1.5 bg-zinc-700'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
};
