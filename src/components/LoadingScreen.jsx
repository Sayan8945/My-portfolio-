import { useEffect, useState } from 'react';
import { useProgress } from '@react-three/drei';

/**
 * Full-screen branded loading overlay shown while the initial 3D scene
 * (hero desk model + textures) is being fetched and parsed.
 *
 * `useProgress` from drei tracks THREE.DefaultLoadingManager globally, so it
 * reports progress for every GLTF/texture load in the app — no need to be
 * inside a <Canvas>. Once progress reaches 100%, we hold briefly for a smooth
 * fade-out instead of an abrupt cut, then unmount so it stops blocking clicks.
 *
 * Style: black terminal window with a typed code snippet + blinking cursor,
 * using the yellow (#eab308) accent already used across the site.
 */
const YELLOW = '#eab308';

const CODE_LINES = [
  { text: 'const developer = {', color: '#9CA3AF' },
  { text: '  name: "Sayan Sarkar",', color: '#E4E4E6', indent: true },
  { text: '  role: "Full Stack Developer",', color: '#E4E4E6', indent: true },
  { text: '  stack: ["MERN", "Next.js"],', color: '#E4E4E6', indent: true },
  { text: '};', color: '#9CA3AF' },
  { text: '', color: '#9CA3AF' },
  { text: 'portfolio.render(developer);', color: null }, // rendered with yellow highlight
];

const LoadingScreen = () => {
  const { progress, active } = useProgress();
  const [visible, setVisible] = useState(true);
  const [fadingOut, setFadingOut] = useState(false);
  const [typedLines, setTypedLines] = useState(0);

  // Type out the code lines one by one for a "coding" feel.
  useEffect(() => {
    if (typedLines >= CODE_LINES.length) return;
    const timer = setTimeout(() => setTypedLines((n) => n + 1), 260);
    return () => clearTimeout(timer);
  }, [typedLines]);

  useEffect(() => {
    if (progress >= 100 && !active) {
      const fadeTimer = setTimeout(() => setFadingOut(true), 300);
      const removeTimer = setTimeout(() => setVisible(false), 900);
      return () => {
        clearTimeout(fadeTimer);
        clearTimeout(removeTimer);
      };
    }
  }, [progress, active]);

  // Safety net: never block the site for more than 8s even if some asset
  // stalls (e.g. a slow/failed network request).
  useEffect(() => {
    const failSafe = setTimeout(() => {
      setFadingOut(true);
      setTimeout(() => setVisible(false), 600);
    }, 8000);
    return () => clearTimeout(failSafe);
  }, []);

  useEffect(() => {
    document.body.style.overflow = visible ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [visible]);

  if (!visible) return null;

  const displayProgress = Math.min(100, Math.round(progress));

  return (
    <div
      className={`fixed inset-0 z-[10000] flex flex-col items-center justify-center gap-6 px-4
                  transition-opacity duration-500 ease-out
                  ${fadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
      style={{ backgroundColor: '#010103' }}
      aria-live="polite"
      aria-busy={visible}>

      {/* Terminal window */}
      <div
        className="w-full max-w-md rounded-lg overflow-hidden"
        style={{ backgroundColor: '#0E0E10', border: '1px solid #1C1C21' }}>

        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-2.5" style={{ backgroundColor: '#1C1C21' }}>
          <span className="w-2.5 h-2.5 rounded-full bg-[#EC4899]" />
          <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: YELLOW }} />
          <span className="w-2.5 h-2.5 rounded-full bg-[#34D399]" />
          <p className="ml-2 text-xs text-white-500 font-mono">portfolio.js</p>
        </div>

        {/* Code body */}
        <div className="p-5 font-mono text-[13px] sm:text-sm leading-relaxed min-h-[190px]">
          {CODE_LINES.slice(0, typedLines).map((line, i) => {
            const isLast = i === typedLines - 1;
            const isRenderCall = line.text.startsWith('portfolio.render');
            return (
              <div key={i} className="whitespace-pre">
                {isRenderCall ? (
                  <>
                    <span style={{ color: YELLOW }}>portfolio</span>
                    <span className="text-white-600">.</span>
                    <span style={{ color: '#22D3EE' }}>render</span>
                    <span className="text-white-600">(developer);</span>
                  </>
                ) : (
                  <span style={{ color: line.color }}>{line.text || '\u00A0'}</span>
                )}
                {isLast && typedLines < CODE_LINES.length && (
                  <span
                    className="inline-block w-[7px] h-[14px] ml-0.5 align-middle"
                    style={{ backgroundColor: YELLOW, animation: 'blink-cursor 0.9s step-end infinite' }}
                  />
                )}
              </div>
            );
          })}
          {typedLines >= CODE_LINES.length && (
            <span
              className="inline-block w-[7px] h-[14px] align-middle"
              style={{ backgroundColor: YELLOW, animation: 'blink-cursor 0.9s step-end infinite' }}
            />
          )}
        </div>
      </div>

      {/* Progress bar */}
      <div className="w-full max-w-md flex flex-col gap-2">
        <div className="w-full h-1.5 rounded-full overflow-hidden" style={{ backgroundColor: '#1C1C21' }}>
          <div
            className="h-full rounded-full transition-[width] duration-200 ease-out"
            style={{ width: `${displayProgress}%`, backgroundColor: YELLOW }}
          />
        </div>
        <p className="text-white-500 text-xs font-mono self-end">Compiling… {displayProgress}%</p>
      </div>

      <style>{`
        @keyframes blink-cursor {
          0%, 50% { opacity: 1; }
          50.01%, 100% { opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;
