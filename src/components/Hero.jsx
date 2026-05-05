import { motion } from 'framer-motion';
import { styles } from '../styles';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { OrbitControls, ContactShadows,Environment } from '@react-three/drei';
import Model from './canvas/Pc.jsx';
import { ComputersCanvas } from "./canvas";

import React from 'react'

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen mx-auto bg-[url('/bgr.png')] bg-cover bg-center bg-no-repeat">
      {/* overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      <div className="hidden md:block absolute top-[120px] right-0 bottom-0 md:left-[40vw] z-10">
        <ComputersCanvas />
      </div>

      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 pointer-events-none z-20`}
      >
        <div className='flex flex-col justify-center items-center mt-5'></div>

        <div className="pointer-events-auto">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#58C3CF]'>Ananya</span>
          </h1>

          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Passionate developer <br className='sm:block hidden' />
            focused on creating clean, 
            and<br className='sm:block hidden' /> impactful digital experiences.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero