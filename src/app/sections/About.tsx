"use client";
import dynamic from "next/dynamic";
import Image from "next/image";
import React, { useState } from "react";
import Button from "../components/Button";
const Globe = dynamic(() => import("react-globe.gl"), { ssr: false });
const About = () => {
  const [hasCopied, setHasCopied] = useState(false);
  const handleCopy=()=>{
  navigator.clipboard.writeText("hafidlaadimi2003@gmail.com");
  setHasCopied(true);
  setTimeout(()=>setHasCopied(false),2000)
  }
  return (
    <section className=" c-space  my-20  " id="#about">
      <div className="grid grid-cols-1  xl:grid-cols-3 xl:grid-row-6 md:grid-cols-2 h-full gap-5 ">
        <div className="col-span-1 xl:row-span-3 ">
          <div className="grid-container">
            <Image
              src="/assets/grid1.png"
              height={600}
              width={600}
              alt="grid-1"
              className=" h-fit sm:h-[276px] w-full object-contain"
            />
            <div>
              <p className="grid-headtext">Hello I am Hafid,</p>
              <p className="grid-subtext">
                I am student in Software Engineering , I love developping web
                and mobile applications with new technologies ...
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <Image
              src="/assets/grid2.png"
              height={600}
              width={600}
              alt="grid-1"
              className=" h-fit sm:h-[276px] w-full object-contain"
            />
            <div>
              <p className="grid-headtext">Tech stack</p>
              <p className="grid-subtext">
                I focused on JavaScript , TypeScript React and Next.js.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className=" h-fit sm:h-[326px] w-full flex justify-center items-center rounded-3xl">
              <Globe
                height={326}
                width={326}
                backgroundColor="#000011"
                waitForGlobeReady
                animateIn={true}
                showAtmosphere
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
              />
            </div>
            <div>
              <p className="grid-headtext">
                I work remotely across most timezones
              </p>
              <p className="grid-subtext">
                I am based in Morocco , with remote work available
              </p>
              <Button title="contact me" isBeam containerStyles="mt-4" />
            </div>
          </div>
        </div>
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <Image
              src="/assets/grid3.png"
              height={600}
              width={600}
              alt="grid-1"
              className=" h-fit sm:h-[276px] w-full object-contain"
            />
            <div>
              <p className="grid-headtext"> My passion for coding</p>
              <p className="grid-subtext">
                I love solving problems and building things through code.
                Programming is not just my profession it is my passion. I enjoy
                exploring new technologies, and enhancing my skills.
              </p>
            </div>
          </div>
        </div>
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <Image
              src="/assets/grid4.png"
              height={600}
              width={600}
              alt="grid-1"
              className=" h-fit sm:h-[276px] w-full object-contain"
            />
            <div className="spce-y-2">
              <p className="grid-headtext"> Contact me</p>
              <div onClick={handleCopy} className="copy-container">
                <Image  src={hasCopied?"/assets/tick.svg":"assets/copy.svg"} height={100} width={100} alt="copy" className=" h-10 w-10 object-contain" />
                <p className="grid-subtext">hafidlaadimi2003@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
