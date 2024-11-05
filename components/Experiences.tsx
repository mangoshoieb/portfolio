import React from "react";
import { Button } from "./ui/MovingBorder";
import { workExperience } from "@/data";

const Experiences = () => {
  return (
    <div className="py-20">
      <h1 className="heading">
        My <span className="text-purple">Work experience</span>
      </h1>
      <div className="grid lg:grid-cols-4 grid-cols-1 gap-10 mt-12">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            borderRadius="1.75rem"
            duration={Math.floor(Math.random()*10000 + 10000)}
            className="text-white flex-1 border-neutral-200 dark:border-slate-800"
          >
            <div className="flex lg:items-center lg:flex-row flex-col p-3 py-6 md:p-5 lg:p-10 gap-2">
              <img
                src={card.thumbnail}
                alt={card.thumbnail}
                className="lg:w-32 md:w-20 w-16"
              />
              <div className="lg:ms-5">
                    <h1 className="font-bold text-start text-xl md:text-2xl">
                        {card.title}
                    </h1>
                    <p className="font-semibold text-start text-white-100 mt-3">
                        {card.desc}
                    </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experiences;
