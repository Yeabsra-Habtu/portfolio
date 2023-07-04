import React from 'react';
import Avatar from '../assets/avatar.svg';
import { FaGithub, FaYoutube, FaTwitter } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants'

const Banner = () => {
  return (
    <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-8 lg:flex-row lg:gap-x-12'>
          <div className='flex-1 text-center font-secondary lg:text-left '>
            {/* name */}
            <motion.h1 
            variants={fadeIn('up',0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once:false, amount:0.7}}
            className='text-[55px] font-bold leading-[0.8] lg:text-[70px] lg:mt-[100px]'>YEABSRA <span>HABTU</span></motion.h1>
            <motion.div
             variants={fadeIn('up',0.4)}
             initial='hidden'
             whileInView={'show'}
             viewport={{once:false, amount:0.7}}
             className='mb-6 text-[36px] lg:text-[60px] font-secondary
                 font-semibold uppercase leading-[1]'>
              <span className='text-white mb-4'>I am a </span>

              <TypeAnimation sequence={[
                'Developer',
                2000,
                'Designer',
                2000,
                'Coder',
                2000,
              ]}
                speed={50}
                className='text-accent'
                wrapper='span'
                repeat={Infinity} />
            </motion.div>

            <motion.div
            variants={fadeIn('up',0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once:false, amount:0.7}} 
            className='flex gap-x-6 items-center mb-12 max-w-max mx-auto lg:mx-0'>
              <button className='btn btn-lg'>Contact Me</button>
              <a href='#' className='text-gradient btn-link'>My Portfolio</a>
            </motion.div>
            {/* links */}
            <motion.div 
            variants={fadeIn('up',0.6)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once:false, amount:0.7}}
            className='flex text-[20px] gap-x-20 max-w-max mx-auto'>
              <a href='#'>
                <FaGithub />
              </a>
              <a href='#'>
                <FaYoutube />
              </a>
              <a href='#'>
                <FaTwitter />
              </a>
            </motion.div>
          </div>
          {/* avatar */}
          <motion.div 
          variants={fadeIn('down',0.5)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once:false, amount:0.7}}
          className='hidden lg:flex max-w-[320px] lg:max-w-[428px]'>
            <img src={Avatar} />
          </motion.div>
        </div>
      </div>
    </section>)
};

export default Banner;
