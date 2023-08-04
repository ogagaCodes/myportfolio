import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../style'
import { ComputersCanvas } from './canvas'

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto" >
      <div
        className={`${styles.paddingX} absolute inset-0 top-[200px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div
            className='w-5 h-5 rounded-full bg-[#915EFF]'
          />
          <div
            className='w-1 sm:h-80 h-40 violet-gradient'
          />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText}  text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Ogaga</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am a Senior Software Architect/Consultant with expertise in <br className='sm:block hidden' /> Scalable and Modern Web/mobile Applications development
          </p>
        </div>
        {/* <div
          className='h-auto w-auto'
        >
          <img src="./me.png" alt="my picture" srcset="" className='bg-blend-hard-light object-cover h-48 w-48' />

        </div> */}
      </div>
      <ComputersCanvas />
    </section>
  )
}

export default Hero