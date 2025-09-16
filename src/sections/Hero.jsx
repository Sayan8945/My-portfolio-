import { Leva } from 'leva';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useMediaQuery } from 'react-responsive';
import { PerspectiveCamera } from '@react-three/drei';
import { useEffect } from 'react';
import Cube from '../components/Cube.jsx';
import Rings from '../components/Rings.jsx';
import ReactLogo from '../components/ReactLogo.jsx';
import Button from '../components/Button.jsx';
import Target from '../components/Target.jsx';
import CanvasLoader from '../components/Loading.jsx';
import HeroCamera from '../components/HeroCamera.jsx';
import { calculateSizes } from '../constants/index.js';
// import { HackerRoom } from '../components/HackerRoom.jsx';
import ModelViewer from '../components/PcHero.jsx';
import MobileModel from '../components/MobileHero.jsx';

const Hero = () => {
  // Use media queries to determine screen size
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section className="md:min-h-screen min-h-[38rem] w-full flex flex-col relative" id="home">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans  z-10">
          Hi, I am Sayan <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">Learning & Building Projects</p>
      </div>

      <div className="w-full h-full absolute inset-0">
        {
          !isMobile &&
        <ModelViewer />
        }
        {
          isMobile &&
        <MobileModel />
        }
      </div>

      {/* <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
        <a href="#about" className="w-fit">
          <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
        </a>
      </div> */}
    </section>
  );
};

export default Hero;
