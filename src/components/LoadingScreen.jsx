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
 */
const LoadingScreen = () => {
  const { progress, active } = useProgress();
  const [visible, setVisible] = useState(true);
  const [fadingOut, setFadingOut] = useState(false);

  useEffect(() => {
    // Once loading is done (progress hit 100 and nothing else is loading),
    // wait a beat so the fade feels intentional, then remove from the DOM.
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
      className={`fixed inset-0 z-[10000] flex flex-col items-center justify-center gap-6
                  transition-opacity duration-500 ease-out
                  ${fadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
      style={{
        backgroundColor: '#010103',
        backgroundImage:
          'radial-gradient(circle at 20% 20%, rgba(124,58,237,0.14) 0%, rgba(1,1,3,0) 45%), ' +
          'radial-gradient(circle at 80% 10%, rgba(34,211,238,0.10) 0%, rgba(1,1,3,0) 40%), ' +
          'radial-gradient(circle at 50% 100%, rgba(236,72,153,0.08) 0%, rgba(1,1,3,0) 55%)',
      }}
      aria-live="polite"
      aria-busy={visible}>

      {/* Brand mark */}
      <div className="flex flex-col items-center gap-3">
        <p
          className="text-3xl sm:text-4xl font-generalsans font-black bg-gradient-to-r from-[#22D3EE] from-0% via-[#A78BFA] via-55% to-[#EC4899] to-100% bg-clip-text text-transparent"
          style={{ letterSpacing: '0.02em' }}>
          Sayan Sarkar
        </p>
        <p className="text-white-500 text-xs sm:text-sm tracking-[0.3em] uppercase">
          Full Stack Developer
        </p>
      </div>

      {/* Progress bar */}
      <div className="w-56 sm:w-72 flex flex-col items-center gap-3">
        <div className="w-full h-1.5 rounded-full overflow-hidden bg-white/10">
          <div
            className="h-full rounded-full transition-[width] duration-200 ease-out"
            style={{
              width: `${displayProgress}%`,
              background: 'linear-gradient(90deg, #22D3EE, #A78BFA, #EC4899)',
            }}
          />
        </div>
        <p className="text-white-600 text-xs font-mono">{displayProgress}%</p>
      </div>

      {/* Subtle pulsing dot loader */}
      <div className="flex gap-1.5">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="w-1.5 h-1.5 rounded-full bg-[#A78BFA]"
            style={{
              animation: 'loading-pulse 1.2s ease-in-out infinite',
              animationDelay: `${i * 0.2}s`,
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes loading-pulse {
          0%, 80%, 100% { opacity: 0.25; transform: scale(0.85); }
          40% { opacity: 1; transform: scale(1.15); }
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;
