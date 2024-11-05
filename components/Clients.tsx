import React from "react";
import { InfiniteMovingCards } from "./InfinteMovingCards";
import { companies, testimonials } from "@/data";

const Clients = () => {
  return (
    <div className="py-20" id="testimonials">
      <h1 className="heading">
        Kind words from <span className="text-purple"> satisfied clients</span>
      </h1>
      <div className="flex flex-col j items-center mt-10">

            <InfiniteMovingCards
            items={testimonials}
            speed="slow"
            direction="right"
            />
            <div className="flex justify-center items-center gap-4 mt-10 md:gap-16 flex-wrap">
                {companies.map(({id,name,img,nameImg})=>(
                    <div key={id} className="flex items-center md:max-w-60 max-w-32 gap-2">
                        <img src={img} alt={name} className="md:w-10 w-5"/>
                        <img src={nameImg} alt={name} className="md:w-24 w-20"/>
                    </div>
                ))}
            </div>
      </div>
    </div>
  );
};

export default Clients;
