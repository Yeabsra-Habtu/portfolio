import React from 'react';
import {BsArrowUpRight} from 'react-icons/bs';
import {motion} from 'framer-motion';
import { fadeIn } from '../variants';

const services=[
  {
    name: 'UI/UX Design',
    description: 'In a HTML document, choose Go to definition or Peek definition the extension will search related CSS & Scss & Lessselectors in current workspace folder.',
    link: 'Learn More',
  },
  {
    name: 'Web Design',
    description: 'In a HTML document, choose Go to definition or Peek definition the extension will search related CSS & Scss & Lessselectors in current workspace folder.',
    link: 'Learn More',
  },
  {
    name: 'App Design',
    description: 'In a HTML document, choose Go to definition or Peek definition the extension will search related CSS & Scss & Lessselectors in current workspace folder.',
    link: 'Learn More',
  },
  {
    name: 'Databse Design',
    description: 'In a HTML document, choose Go to definition or Peek definition the extension will search related CSS & Scss & Lessselectors in current workspace folder.',
    link: 'Learn More',
  },
];

const Services = () => {
  return (
    <section className='section' id='services'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/* text and image */}
          <motion.div
          variants={fadeIn('right',0.5)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once:false, amount:0.7}} 
          className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat 
          mix-blend-lighten mb-12 lg:mb-0 '>
            <h2 className='h2 text-accent mb-6'>What I Do.</h2>
            <h3 className='h3 max-w-[455px] mb-16'>A freelance developer with over 5 years experiance</h3>
            <button className='btn btn-sm'>See My Work</button>
          </motion.div>
          {/* services */}
          <motion.div 
          variants={fadeIn('left',0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once:false, amount:0.7}} >
            {/* Services list */}
            <div>
              {services.map((service,index)=>{

                const {name,description,link}=service;
                return (
                  <div
                  className='border-b border-white/20 h-[148px] mb-[38px] flex' 
                  key={index}>
                    <div className='max-w-[476px]'>
                      <h4 className='text-[20px] tracking-wider font-primary font-semibold '>{name}</h4>
                      <p className='font-secondary leading-tight mb-6'>{description}</p>
                    </div>
                    <div className='flex flex-col flex-1 items-end'>
                        <a href='#' 
                        className='btn w-9 h-9 mb-[42px] flex justify-center items-center'>
                          <BsArrowUpRight/>
                        </a>
                        <a href='#' className='text-gradient text-sm mt-10'>{link}</a>
                      </div>
                  </div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
};

export default Services;
