import React from 'react';
import {motion} from 'framer-motion';
import {fadeIn} from '../variants';

import img1 from '../assets/portfolio-img1.png';
import img2 from '../assets/portfolio-img2.png';
import img3 from '../assets/portfolio-img3.png';

const Work = () => {
  return (
    <section className='section' id='work'>
      <div className='container mx-auto'>
        <div>
          <div className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
            {/* text */}
            <div>
              <h2 className='h2 leading-tight text-accent'>My Latest<br/>Works</h2>
              <p className='max-w-sm mb-16'>In a HTML document, choose Go to definition or Peek definition,
              the extension will search related CSS & Scss & Less
              selectors in current workspace folder.</p>
              <button className='btn btn-sm'>View All Works</button>
            </div>
            {/* image */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* overlay */}
              <div className=' group-hover:bg-black/70 w-full h-full absolute z-4 transition-all duration-300'></div>
              {/* img */}
              <img className='group-hover:scale-125  transition-all duration-500' src={img1} alt=''/>
              {/* pretitle */}
              <div>UI/UX</div>
              {/* title */}
              <div>Project Title</div>
            </div>
          </div>
          <div>2</div>
        </div>
      </div>
    </section>
  )
};

export default Work;
