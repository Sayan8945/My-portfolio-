import { useEffect, useRef } from 'react';

/**
 * Full-screen modal that renders the PDF resume inline using the browser's
 * native <object> renderer — no redirect, no new tab, no external service.
 *
 * Usage:
 *   <ResumeModal isOpen={open} onClose={() => setOpen(false)} />
 */
const ResumeModal = ({ isOpen, onClose }) => {
  const overlayRef = useRef(null);

  // Lock body scroll while modal is open; restore on close / unmount.
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close on Escape key.
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) onClose();
  };

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6"
      style={{ backgroundColor: 'rgba(5, 3, 16, 0.92)', backdropFilter: 'blur(8px)' }}
      role="dialog"
      aria-modal="true"
      aria-label="Resume viewer">

      <div className="relative w-full max-w-4xl h-[90vh] flex flex-col rounded-xl overflow-hidden"
           style={{ border: '1px solid rgba(167, 139, 250, 0.3)', boxShadow: '0 0 60px rgba(167,139,250,0.15)' }}>

        {/* ── Header bar ──────────────────────────────────────── */}
        <div className="flex items-center justify-between px-5 py-3 flex-shrink-0"
             style={{ background: '#0D0B1A', borderBottom: '1px solid rgba(167,139,250,0.2)' }}>
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#EC4899]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#F5C542]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#22D3EE]" />
          </div>

          <p className="text-white-600 text-sm font-medium tracking-wide">Sayan Sarkar — Resume</p>

          <div className="flex items-center gap-3">
            {/* Download button */}
            <a
              href="/assets/resume.pdf"
              download="Sayan_Sarkar_Resume.pdf"
              className="flex items-center gap-1.5 text-[#22D3EE] text-sm hover:text-white transition-colors"
              title="Download PDF">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
              </svg>
              <span className="hidden sm:inline">Download</span>
            </a>

            {/* Close button */}
            <button
              onClick={onClose}
              className="text-white-500 hover:text-white transition-colors p-1 rounded"
              aria-label="Close resume">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* ── PDF viewer ──────────────────────────────────────── */}
        <div className="flex-1 bg-[#050310]">
          <object
            data="/assets/resume.pdf#toolbar=1&navpanes=0&scrollbar=1"
            type="application/pdf"
            className="w-full h-full"
            aria-label="Resume PDF">
            {/* Fallback for browsers that cannot render PDFs inline */}
            <div className="flex flex-col items-center justify-center h-full gap-4 text-white-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-[#A78BFA]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
              </svg>
              <p className="text-center px-6">Your browser cannot display PDFs inline.</p>
              <a
                href="/assets/resume.pdf"
                download="Sayan_Sarkar_Resume.pdf"
                className="px-5 py-2 rounded-lg text-sm font-medium text-white"
                style={{ background: 'linear-gradient(135deg,#22D3EE,#A78BFA)' }}>
                Download Resume
              </a>
            </div>
          </object>
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
