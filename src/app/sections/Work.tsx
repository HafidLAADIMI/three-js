"use client";
import Image from "next/image";
import { myProjects } from "../constants";
import Link from "next/link";
import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import CanvasLoader from "../components/CanvasLoader";
import Computer from "../components/Computer";
import { Leva, useControls } from "leva";
import ComputerDom from "../components/ComputerDom";
const Work = () => {
  const [index, setIndex] = useState<number>(0);
  const currentPorject = myProjects[index];
  const handleNavigation = (direction: string) => {
    console.log({ direction });
    if (direction === "right") {
      setIndex((prev) => {
        return prev === myProjects.length - 1 ? 0 : prev+1;
      });
    } else {
      setIndex((prev) => {
        return prev === 0 ? myProjects.length - 1 : prev-1;
      });
    }
  };
  //  const controls = useControls("Computer", {
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
  return (
    <section className="c-space my-20" id="#work">
      <p className="head-text"> My projects</p>
      <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
        <div className="flex flex-col sm:p-10 py-10 px-5 shadow-2xl shadow-black-200  relative gap-5 ">
          <div
            className="absolute right-0 top-0
            "
          >
            <Image
              height={500}
              width={500}
              alt="spotlight"
              className="h-96 w-full rounded-xl  object-cover"
              src={`${currentPorject.spotlight}`}
            />
          </div>
          <div
            className="p-3 backdorp-filter backdrop-blur-3xl w-fit rounded-lg"
            style={currentPorject.logoStyle}
          >
            <Image
              src={`${currentPorject.logo}`}
              height={100}
              width={100}
              alt="logo"
            />
          </div>
          <div className="flex flex-col gap-5 text-white-600 my-5">
            <p className="text-white text-2xl font-semibold animatedText">
              {currentPorject.title}
            </p>
            <p className="animatedText">{currentPorject.desc}</p>
            <p className="animatedText">{currentPorject.subdesc}</p>
          </div>
          <div className="flex justify-between items-center flex-wrap gap-5 ">
            <div className="flex items-center gap-3">
              {currentPorject.tags.map((tag, index) => (
                <div key={index} className="tech-logo">
                  <Image
                    height={500}
                    width={500}
                    src={tag.path}
                    alt={tag.name}
                  />
                </div>
              ))}
            </div>
            <Link
              className="flex items-center justify-center gap-2 cursor-pointer text-white-600"
              href={currentPorject.href}
            >
              <p>Check the live demo</p>
              <Image
                alt="live_demo"
                height={50}
                width={50}
                className="h-6 w-6 object-contain"
                src="/assets/arrow-up.png"
              />
            </Link>
          </div>
          <div className="flex items-center justify-between mt-7">
            <button
              className="arrow-btn"
              onClick={() => handleNavigation("left")}
            >
              <Image
                src="/assets/left-arrow.png"
                alt="left arrow"
                height={50}
                width={50}
                className="h-6 w-6 object-contain"
              />
            </button>
            <button
              className="arrow-btn"
              onClick={() => handleNavigation("right")}
            >
              <Image
                src="/assets/right-arrow.png"
                alt="right arrow"
                height={50}
                width={50}
                className="h-6 w-6 object-contain"
              />
            </button>
          </div>
        </div>
        <div className="bg-black-100 border border-black-300 h-96 h:h-full rounded-lg">
            <Leva/>
            <Canvas>
                  <Suspense fallback={<CanvasLoader/>} >
                     <PerspectiveCamera makeDefault position={[0,0,20]}/>
                      {/* <Computer position={[-1/5,1.7,7.7]} scale={20.0} rotation={[0,- 11 * Math.PI/18 , 0]} /> */}
                      <ComputerDom texture={currentPorject.texture} position={[-1.1,-5.6,4.9]} scale={4.5} rotation={[0,2*Math.PI,0]} />
                     <directionalLight intensity={1} position={[0,0,50]}/>
                     <ambientLight intensity={1.5}/>
                  </Suspense >
                  <OrbitControls enablePan enableRotate />
            </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Work;
