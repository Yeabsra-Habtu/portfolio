import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import {motion} from 'framer-motion';
import { fadeIn } from '../variants';
import my_image from '../assets/profile-2.png'

const About = () => {

  const [ref, inView]=useInView(
    {
      threshold: 0.5,
    }
  )

  return (
    <section className='section' id='about'>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0'>
          {/* image */}
          <motion.div
          variants={fadeIn('right',0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once:false, amount:0.7}} 
          className='flex bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'>
            <img src={my_image} />
          </motion.div>
          {/* text */}
          <motion.div
           variants={fadeIn('left',0.5)}
           initial='hidden'
           whileInView={'show'}
           viewport={{once:false, amount:0.7}}
           className='flex-1'>
            <h2 className='h2 text-accent'>About Me</h2>
            <h3 className='h3 mb-4'>A freelace front end developer with over 5 years of experiance</h3>
            <p className='mb-6'>In a HTML document, choose Go to definition or Peek definition,
              the extension will search related CSS & Scss & Less
              selectors in current workspace folder. Can also
              search selectors within nesting reference &...
              for Sass & Less.
            </p>
            <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  <CountUp start={0} end={13} duration={3} />
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Years of <br /> Experiance
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  <CountUp start={0} end={15} duration={3} />
                  k+
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Completed <br /> Projects
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  <CountUp start={0} end={13} duration={3} />
                  k+
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Satisfied <br /> Customers
                </div>
              </div>
            </div>
            <div className='flex gap-x-8 items-center'>
              <button className='btn btn-lg'>Contact Me</button>
              <a href='#' className='text-gradient btn-link'>My Portfolio</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
};

export default About;
