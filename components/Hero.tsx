import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./ui/MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenrateEffect";
import Grid from "./Grid";

const Hero = () => {
  return (
    <div className="pt-36 pb-20 ">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div
        className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.1] bg-grid-black/[0.2] absolute 
      flex items-center justify-center"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white 
        [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>
      <div className="flex justify-center my-20 z-5 relative">
        <div className="flex flex-col justify-center items-center max-w-[89vw] md:max-w-2xl lg:max-w-[60vw]">
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Dynamic web magic with next.js
          </h2>
          <TextGenerateEffect
            className="text-center text-[40px] md:text-4xl lg:text-5xl"
            words="Transforming Concepts Into Seamles User Experiences"
          />
          <p className="text-center tracking-wider text-sm md:text-lg lg:text-xl">
            Hi,I'm Amgad,a Next.js developer based in Egypt
          </p>
          <a href="#about">
            <MagicButton
              title="show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
      <Grid/>
    </div>
  );
};

export default Hero;
