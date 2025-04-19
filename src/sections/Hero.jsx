import {
  OrbitControls,
  PerspectiveCamera,
} from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React from 'react';
import HackerRoom from '../components/HackerRoom';
import { Suspense } from 'react';
import CanvasLoader from '../components/CanvasLoader';
import { useMediaQuery } from 'react-responsive';
import { calculateSizes } from '../constants';
import Target from '../components/Target';
import ReactLogo from '../components/ReactLogo';
import Cube from '../components/Cube';
import Rings from '../components/Ring';
import HeroCamera from '../components/HeroCamera';
import Button from '../components/Button';
import { Icons } from '../lib/icons';
import { cn } from '../lib/lib';

function Hero() {
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({
    minWidth: 768,
    maxWidth: 1024,
  });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);
  return (
    <section
      className="min-h-screen w-full flex flex-col relative"
      id="home"
    >
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="text-white sm:text-3xl text-2xl font-medium text-center font-generalsans">
          I am Kiam <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">
          I build things for the web
        </p>
      </div>
      <div className="w-full absolute inset-0">
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera
              makeDefault
              position={[0, 0, 20]}
            />
            <HeroCamera isMobile={isMobile}>
              <HackerRoom
                scale={sizes.deskScale}
                position={sizes.deskPosition}
                rotation={[0, -Math.PI, 0]}
              />
            </HeroCamera>

            <group>
              <Target position={sizes.targetPosition} />
              <ReactLogo
                position={sizes.reactLogoPosition}
              />
              <Cube position={sizes.cubePosition} />
              <Rings position={sizes.ringPosition} />
            </group>

            <ambientLight intensity={1} />
            <directionalLight
              position={[10, 10, 10]}
              intensity={0.5}
            />
            <OrbitControls />
          </Suspense>
        </Canvas>
      </div>

      <div className="absolute bottom-9 lg:bottom-7 left-0 right-0 w-full z-10 c-space">
        <a href="#about" className="w-fit ">
          <button
            className={cn(
              'flex gap-2 items-center justify-center cursor-pointer p-3 rounded-md bg-black-300  transition-all active:scale-95 text-white mx-auto font-bold',
            )}
          >
            <Icons.ArrowDown className="w-5 h-5 animate-bounce fill-white" />
            <span>Tap to Continue</span>
          </button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
