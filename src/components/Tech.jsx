import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";


const Tech = () => {
  return (
    // <div className='flex flex-row flex-wrap justify-center gap-10'>
    //   {technologies.map((technology) => (
    //     <div className='w-20 h-20 sm:w-28 sm:h-28' key={technology.name}>
    //       <BallCanvas icon={technology.icon} />
    //       <p className="text-center text-secondary text-[14px] mt-2">
    //         {technology.name}
    //       </p>
    //     </div>
    //   ))}
    // </div>

    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 place-items-center'>
  {technologies.map((technology) => (
    <div
      className='w-20 h-20 sm:w-28 sm:h-28' key={technology.name}
    >
      {/* Desktop */}
      <div className="hidden sm:block">
        <BallCanvas icon={technology.icon} />
      </div>

      {/* Mobile */}
      <div className="sm:hidden">
        <img
          src={technology.icon}
          alt={technology.name}
          className="w-14 h-14 object-contain"
        />
      </div>

      <p className="text-center text-secondary text-[14px] mt-2">
        {technology.name}
      </p>
    </div>
  ))}
</div>
  )
}

// export default Tech
export default SectionWrapper(Tech, "");