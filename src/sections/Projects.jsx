import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useState, useRef, useCallback } from 'react';
import { useMediaQuery } from 'react-responsive';

import { myProjects } from '../constants/index.js';

// Dark/monochrome logos that need inversion on dark backgrounds
const INVERT_LOGOS = new Set(['vercel.svg', 'netlify.svg', 'render.svg', 'nextjs.svg']);

const projectCount = myProjects.length;

// How many px a touch must travel horizontally to count as a swipe.
const SWIPE_THRESHOLD = 50;

const Projects = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const [swipeDirection, setSwipeDirection] = useState(null); // 'left' | 'right' | null
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ maxWidth: 1024 });
  const isTouchDevice = isMobile || isTablet;

  // Touch tracking refs — no re-renders on every touchmove.
  const touchStartX = useRef(null);
  const touchStartY = useRef(null);
  const cardRef = useRef(null);

  const navigate = useCallback((direction) => {
    setSwipeDirection(direction);
    setSelectedProjectIndex((prev) => {
      if (direction === 'previous') return prev === 0 ? projectCount - 1 : prev - 1;
      return prev === projectCount - 1 ? 0 : prev + 1;
    });
    // Clear hint after short delay
    setTimeout(() => setSwipeDirection(null), 400);
  }, []);

  // ── Touch handlers ───────────────────────────────────────────────
  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    const dy = e.changedTouches[0].clientY - touchStartY.current;

    // Only count as horizontal swipe if horizontal movement dominates.
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > SWIPE_THRESHOLD) {
      navigate(dx < 0 ? 'next' : 'previous');
    }
    touchStartX.current = null;
    touchStartY.current = null;
  };

  // ── GSAP text animation on project change ────────────────────────
  useGSAP(() => {
    gsap.fromTo(
      '.animatedText',
      { opacity: 0, y: 12 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.12, ease: 'power2.out' },
    );
  }, [selectedProjectIndex]);

  const currentProject = myProjects[selectedProjectIndex];

  return (
    <section className="c-space my-20" id="projects">
      <p className="head-text">My Selected Work</p>

      {/* ── Mobile + Tablet swipe hint ───────────────────────────── */}
      {isTouchDevice && (
        <p className="text-white-500 text-sm text-center mt-3 flex items-center justify-center gap-2 select-none">
          <span className={`transition-transform duration-200 ${swipeDirection === 'previous' ? '-translate-x-1 text-white' : ''}`}>←</span>
          Swipe to browse projects
          <span className={`transition-transform duration-200 ${swipeDirection === 'next' ? 'translate-x-1 text-white' : ''}`}>→</span>
        </p>
      )}

      {/* ── Project card ──────────────────────────────────────────── */}
      <div className="mt-12 gap-5 md:w-2/3 w-full">
        <div
          ref={cardRef}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          className={`
            flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200
            select-none
            transition-transform duration-200
            ${swipeDirection === 'next'     ? '-translate-x-2' : ''}
            ${swipeDirection === 'previous' ? 'translate-x-2'  : ''}
          `}>

          {/* Spotlight background */}
          <div className="absolute top-0 right-0">
            <img src={currentProject.spotlight} alt="spotlight" className="w-full h-96 object-cover rounded-xl" />
          </div>

          {/* Logo */}
          <div className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg" style={currentProject.logoStyle}>
            <img className="w-14 h-14 shadow-sm" src={currentProject.logo} alt="logo" />
          </div>

          {/* Text */}
          <div className="flex flex-col gap-5 text-white-600 my-5">
            <p className="text-white text-2xl font-semibold animatedText">{currentProject.title}</p>
            <p className="animatedText">{currentProject.desc}</p>
            <p className="animatedText">{currentProject.subdesc}</p>
          </div>

          {/* Tags + link */}
          <div className="flex items-center justify-between flex-wrap gap-5">
            <div className="flex items-center gap-3">
              {currentProject.tags.map((tag, index) => (
                <div key={index} className="tech-logo" title={tag.name}>
                  <img
                    src={tag.path}
                    alt={tag.name}
                    style={INVERT_LOGOS.has(tag.path.split('/').pop())
                      ? { filter: 'invert(1) brightness(2)' }
                      : {}}
                  />
                </div>
              ))}
            </div>
            <a
              className="flex items-center gap-2 cursor-pointer text-white-600"
              href={currentProject.href}
              target="_blank"
              rel="noreferrer">
              <p>Check Live Site</p>
              <img src="/assets/arrow-up.png" alt="arrow" className="w-3 h-3" />
            </a>
          </div>

          {/* ── Navigation row ──────────────────────────────────── */}
          <div className="flex justify-between items-center mt-7">
            <div className="flex justify-center items-center">
              <button className="arrow-btn" onClick={() => navigate('previous')} aria-label="Previous project">
                <img src="/assets/left-arrow.png" alt="left arrow" />
              </button>
              <p className="text-white-800 px-3">Previous</p>
            </div>

            {/* Dot indicators */}
            <div className="flex gap-2 items-center">
              {myProjects.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedProjectIndex(i)}
                  aria-label={`Go to project ${i + 1}`}
                  className={`
                    rounded-full transition-all duration-300
                    ${i === selectedProjectIndex
                      ? 'w-6 h-2 bg-white'
                      : 'w-2 h-2 bg-white/30 hover:bg-white/60'}
                  `}
                />
              ))}
            </div>

            <div className="flex justify-center items-center">
              <p className="text-white-800 px-3">Next</p>
              <button className="arrow-btn" onClick={() => navigate('next')} aria-label="Next project">
                <img src="/assets/right-arrow.png" alt="right arrow" className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
