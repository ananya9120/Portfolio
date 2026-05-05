import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";


const Tech = () => {
  return (
    <>
      {technologies.map((technology) => (
        <div
          className="w-20 h-20 sm:w-28 sm:h-28 flex flex-col items-center"
          key={technology.name}
        >
          {/* Desktop → 3D */}
          <div className="hidden sm:block">
            <BallCanvas icon={technology.icon} />
          </div>

          {/* Mobile → image */}
          <div className="sm:hidden">
            <img
              src={technology.icon}
              alt={technology.name}
              className="w-16 h-16 object-contain"
            />
          </div>

          <p className="text-center text-secondary text-[14px] mt-2">
            {technology.name}
          </p>
        </div>
      ))}
    </>
  )
}

// export default Tech
export default SectionWrapper(Tech, "");