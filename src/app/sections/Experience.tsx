"use client";
import { Canvas } from "@react-three/fiber";
import { workExperiences } from "../constants";
import Image from "next/image";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Suspense, useState } from "react";
import CanvasLoader from "../components/CanvasLoader";
import MyAvatar from "../components/MyAvatar";
import { useControls } from "leva";

const Experience = () => {
  //   const controls = useControls("MyAvatar", {
  //     positionX: {
  //       value: 2.5,
  //       min: -20,
  //       max: 20,
  //     },
  //     positionY: {
  //       value: 2.5,
  //       min: -20,
  //       max: 20,
  //     },
  //     positionZ: {
  //       value: 2.5,
  //       min: -20,
  //       max: 20,
  //     },
  //     scale: {
  //       value: 2.5,
  //       min: -20,
  //       max: 20,
  //     },
  //   });
  const [animationName, setAnimationName] = useState("hihop");
  return (
    <section className="c-space my-20">
      <div className="w-full text-white-600">
        <h3 className="head-text"> My work</h3>
        <div className="work-container">
          <div className="work-canvas">
            <Canvas>
              <ambientLight intensity={1.5} />
              <PerspectiveCamera position={[0, 0, 10]} />
              <directionalLight position={[0, 0, 30]} intensity={1.6} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
              <OrbitControls
                enableDamping
                enableZoom={false}
                maxPolarAngle={Math.PI / 2}
              />
              <Suspense fallback={<CanvasLoader />}>
                <MyAvatar scale={6.5} position={[0.1, -5.9, -5.1]} animationName={animationName} />
              </Suspense>
            </Canvas>
          </div>
          <div className="work-content">
            <div className="sm:py-10 py-5 sm:px-5 px-2.5">
              {workExperiences.map(
                ({ id, name, pos, duration, title, icon,animation }) => (
                  <div
                    onClick={() => setAnimationName(animation.toLocaleLowerCase())}
                    onPointerOver={() => setAnimationName(animation.toLocaleLowerCase())}
                    onPointerOut={() => setAnimationName("idle")}
                    key={id}
                    className="work-content_container group"
                  >
                    <div className="flex flex-col items-center justify-center py-2">
                      <div className="work-content_logo">
                        <Image
                          src={icon}
                          height={100}
                          width={100}
                          alt="logo"
                          className="h-full w-full"
                        />
                      </div>
                      <div className="work-content_bar" />
                    </div>
                    <div className="sm:p-5 px-2.5 py-5">
                      <p className="font-bold text-white-800">{name}</p>
                      <p className="text-sm mb-5">
                        {pos} -- <span>{duration}</span>
                      </p>
                      <p className="group-hover:text-white transition-all ease-in-out duration-500">
                        {title}
                      </p>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
