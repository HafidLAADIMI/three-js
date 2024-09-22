"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { HackerRoom } from "../components/HackerRoom";
import { Suspense } from "react";
import CanvasLoader from "../components/CanvasLoader";
import { Leva, useControls } from "leva";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants";
import Target from "../components/Target";
import ReactLogo from "../components/ReactLogo";
import Cube from "../components/Cube";
import Button from "../components/Button";
import Link from "next/link";
const Hero = () => {
  // we use these controls to play with the positioning of the 3d object
  // const controls = useControls("Cube", {
  //   positionX: {
  //     value: 2.5,
  //     min: -20,
  //     max: 20,
  //   },
  //   positionY: {
  //     value: 2.5,
  //     min: -20,
  //     max: 20,
  //   },
  //   positionZ: {
  //     value: 2.5,
  //     min: -20,
  //     max: 20,
  //   },
  //   scale: {
  //     value: 2.5,
  //     min: -20,
  //     max: 20,
  //   },
  // });
  // const reactControls = useControls("ReactLogo", {
  //   positionX: {
  //     value: 2.5,
  //     min: -20,
  //     max: 20,
  //   },
  //   positionY: {
  //     value: 2.5,
  //     min: -20,
  //     max: 20,
  //   },
  //   positionZ: {
  //     value: 2.5,
  //     min: -20,
  //     max: 20,
  //   },
  // });
  const isSmall = useMediaQuery({ maxWidth: 480 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const sizes = calculateSizes(isSmall, isMobile, isTablet);
  // const isSmall = useMediaQuery({maxWidth:480});
  return (
    <div
      className="text-neutral-300 min-h-screen w-full relative "
      id="#home"
    >
      <div className="w-full c-space sm:mt-32 flex flex-col gap-3 mt-20">
        <p className="sm:text-3xl text-xl text-center font-generalsans font-medium ">
          Hello I am Hafid <span className="waving-hand">🖐🏻</span>
        </p>
        <p className=" hero_tag  text-gray_gradient">
          Building Products & Brands
        </p>
      </div>
      <div className="min-h-screen w-full mx-auto">
        {/* <Leva /> */}
        <Canvas
          style={{
            height: "100vh", // Set canvas height to full viewport
            display: "flex",
            alignItems: "center",
            justifyItems: "center",
            boxSizing: "border-box",
          }}
        >
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 40]} />
            <HackerRoom
              //   scale={isSmall? 0.135 : isMobile ? 0.18 : 0.2}
              // rotation={[
              //   0.4,
              //   Math.PI,
              //  0,
              // ]}
              // position={[
              //   1.8,
              //   -4.1,
              //   -9.3,
              // ]}
              scale={sizes.deskScale}
              rotation={[0.4, Math.PI, 0]}
              position={sizes.deskPosition}
            />
            {/* <group>
              <Target
                position={sizes.targetPosition}
                scale={sizes.targetScale}
              />
              <ReactLogo position={sizes.reactLogoPosition}  />
              <Cube position={sizes.} scale={controls.scale}/>
            </group> */}
            <ambientLight intensity={1} />
            <directionalLight intensity={0.5} position={[0, 0, 20]} />
            <OrbitControls enableZoom={false}  />
          </Suspense>
        </Canvas>
          <div className='c-space right-0 left-0 absolute bottom-7 z-10 '>
              <Link href="#about">
               <Button title="let us work together " isBeam containerStyles='sm:w-fit w-full sm:min-w-96'/>
              </Link>
          </div>
      </div>
    </div>
  );
};

export default Hero;
