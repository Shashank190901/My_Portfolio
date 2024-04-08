"use client"
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'
import { motion } from "framer-motion";
import Link from "next/link";
const HeroSection = () => {
  return (
    <section>
    <div className='grid grid-cols-1 sm:grid-cols-12'>
    <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
            <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-300">
                Hello! I&apos;m{" "}
                </span>
                Shashank
                <br></br>
                <TypeAnimation
      sequence={[
        'A Software Developer',
        2000,
        'A Web Developer',
        2000,
        'A Team Sport',
        2000,
        'And Creative.',
        5000
      ]}
      wrapper="span"
      style={{ fontSize: '1em', display: 'inline-block', color: 'skyblue'}}
      speed={50}
      
      repeat={Infinity}
    />
            </h1>
            <p className='text-[#BFA89E] text-base sm:text-lg mb-6 lg:text-xl'>
                I am a curious software develper looking to start my journey in the IT industry, I am passionate towards learning and want to spend my time productively with some amazing experience.
            </p>
            <div>
                <Link
                href="/#contact"
                className='px-6 py-3 rounded-full mr-4 bg-gradient-to-br from-purple-500 via-blue-500 to-white hover:text-black text-white'>Hire me</Link>
                <Link
                href="https://drive.google.com/file/d/1ueedfi8F089rBACuLiatLSujxaRR5Py2/view?usp=sharing"
                className="px-1 inline-block py-1 w-fit sm:w-fit rounded-full bg-gradient-to-br from-purple-500 to-blue-500 hover:bg-slate-800 text-white mt-3">
                    <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Download CV</span>
                    </Link>
            </div>
            </motion.div>
    
      <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
        <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
            src='/images/avatar-pic.png'
            alt='avatar'
            className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
            width={400}
            height={400}
            />
        </div>
        </motion.div>
    </div>
    </section>
  )
}

export default HeroSection