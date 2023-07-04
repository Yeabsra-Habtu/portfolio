import React from 'react';
import {BiHomeAlt, BiUser} from 'react-icons/bi';
import {BsClipboardData, BsBriefcase, BsChatSquare} from 'react-icons/bs'
import {Link} from 'react-scroll'
const Nav = () => {
  return (
    <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>
      <dvi className='container mx-auto'>
        <div className='w-full bg-black/20 h-[96px] backdrop-blur-2xl
        rounded-full max-w-[460px] mx-auto px-5 flex text-2xl justify-between
        text-white/50 items-center'>
          <Link activeClass='active'
          smooth={true}
          spy={true}
          offset={-200} 
          to='home' className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'><BiHomeAlt/></Link>
          <Link activeClass='active'
          smooth={true}
          spy={true} 
          to='about' className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'><BiUser/></Link>
          <Link activeClass='active'
          smooth={true}
          spy={true} 
          to='services' className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'><BsClipboardData/></Link>
          <Link activeClass='active'
          smooth={true}
          spy={true} 
          to='work' className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'><BsBriefcase/></Link>
          <Link activeClass='active'
          smooth={true}
          spy={true} 
          to='contact' className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'><BsChatSquare/></Link>
        </div>
      </dvi>
    </nav>
  )
};

export default Nav;