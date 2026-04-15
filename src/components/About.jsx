//rafce
import React from 'react'
// import Tilt from 'react-tilt';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn,textVariant } from '../utils/motion';
import {SectionWrapper} from '../hoc';

const ServiceCard=({title,index,icon})=>{
  return(
    <Tilt className='xs:w-[250px]' tiltMaxAngleX={45} tiltMaxAngleY={45} scale={1} transitionSpeed={450}>
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>

      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
        <motion.div>
            <p className={styles.sectionSubText}>Introduction</p>
            <h2 className={styles.sectionHeadText}>OverView</h2>
        </motion.div>
          {/* // direction type delay duration */}
        <motion.p variants={fadeIn("","",0.1,1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
            I am a motivated and detail-oriented developer with a strong foundation in full-stack web development and problem-solving.
            I enjoy building scalable and user-friendly applications using modern technologies like React, Node.js, and MongoDB.
            I am particularly interested in creating efficient, real-world solutions and continuously improving my skills
            in data structures, algorithms, and modern web technologies.
            I thrive in collaborative environments and have experience working in team-based projects.
        </motion.p>
        <div className='mt-20 flex flex-wrap gap-10 justify-center'>
            {services.map((service,index) => (
                <ServiceCard key={service.title} index={index} {...service}/>
            ))}
        </div>
    </>
  )
}

// Instead of export default About
export default SectionWrapper(About, "about");
// export default About