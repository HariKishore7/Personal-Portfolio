import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn, FaMoon, FaSun } from "react-icons/fa";
import { ImProfile } from 'react-icons/im';

const NavBar = () => {
  const [sideNavBar, setSideNavBar] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState('#ecf0f3');
  const [linkColor, setLinkColor] = useState('#1f2937');
  const [darkMode, setDarkMode] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (router.asPath === "/eCommerce" || router.asPath === "/shopingCart") {
      setNavBg("transparent");
      setLinkColor("#ecf0f3");
    } else {
      setNavBg("#ecf0f3");
      setLinkColor("#1f2937");
    }
  }, [router])

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    }
    window.addEventListener('scroll', handleShadow)
  }, [])
  return (
    <div style={{ backgroundColor: `${navBg}` }} className={shadow ? 'fixed w-full h-20 shadow-xl z-[100]' : 'fixed w-full h-20 z-[100] bg-white'}>
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16 '>
        <Link href='/' scroll={true} onClick={(e) => {
          if (window.location.pathname === '/') {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }}>
          <Image src="/h-logo.svg" alt="Logo H" width={40} height={40} />
        </Link>
        <div>
          <ul style={{ color: `${linkColor}` }} className='hidden md:flex'>
            <Link href='/#home'><li className='ml-10 text-sm uppercase hover:border-b'>Home</li></Link>
            <Link href='/#about'><li className='ml-10 text-sm uppercase hover:border-b'>About</li></Link>
            <Link href='/#skills'><li className='ml-10 text-sm uppercase hover:border-b'>Skills</li></Link>
            <Link href='/#projects'><li className='ml-10 text-sm uppercase hover:border-b'>Projects</li></Link>
            <Link href='/resume'><li className='ml-10 text-sm uppercase hover:border-b'>Resume</li></Link>
            <Link href='/#contact'><li className='ml-10 text-sm uppercase hover:border-b'>Contact</li></Link>
          </ul>
          <div style={{ color: `${linkColor}` }} className='md:hidden cursor-pointer' onClick={() => setSideNavBar(true)}><AiOutlineMenu size={20} /></div>
        </div>
      </div>
      <div className={sideNavBar ? "fixed left-0 top-0 w-full h-screen bg-black/70 md:hidden" : ""}>
        <div className={sideNavBar ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500" : "fixed left-[-100%] top-0 p-10 ease-in duration-500"}>
          <div>
            <div className='flex w-full items-center justify-between'>
              <Link href='/' scroll={false} onClick={e => {
                e.preventDefault();
                setSideNavBar(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
                window.history.pushState({}, '', '/');
              }}>
                <Image src='/assets/hariNewPic.jpg' alt="Logo/" width={100} height={25} className='rounded-xl' />
              </Link>
              <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer ease-in hover:scale-125 duration-300' onClick={() => setSideNavBar(false)}> <AiOutlineClose /></div>
            </div>
            <div className='border-b border-gray-300 my-4'>
              <p className="w-[85%] md:w-[90%] py-1 text-xl font-medium text-[#5651e5] tracking-wide text-wrap">
                Hari Kishore
              </p>
              <p className="w-[85%] md:w-[90%] text-md font-medium text-gray-700  tracking-wide text-wrap">
                Software Developer,📍India
              </p>
              <p className="w-[85%] md:w-[90%] text-sm font-medium text-gray-600">
                💻Code <span className=" font-bold text-3xl animate-pulse mx-1">.</span>☕Coffee <span className="font-bold text-3xl animate-pulse mx-1">.</span>🚀Explore
              </p>
            </div>
          </div>
          <div className='py-1 my-4'>
            <ul className='uppercase'>
              <Link href='/#home' onClick={() => setSideNavBar(false)}><li className='py-4 text-sm hover:underline'>Home</li></Link>
              <Link href='/#about' onClick={() => setSideNavBar(false)}><li className='py-4 text-sm hover:underline'>About</li></Link>
              <Link href='/#skills' onClick={() => setSideNavBar(false)}><li className='py-4 text-sm hover:underline'>Skills</li></Link>
              <Link href='/#projects' onClick={() => setSideNavBar(false)}><li className='py-4 text-sm hover:underline'>Projects</li></Link>
              <Link href='/resume' onClick={() => setSideNavBar(false)}><li className='py-4 text-sm hover:underline'>Resume</li></Link>
              <Link href='/#contact' onClick={() => setSideNavBar(false)}><li className='py-4 text-sm hover:underline'>Contact</li></Link>
            </ul>
            <div className='pt-10'>
              <p className='uppercase tracking-widest text-[#5651e5]'>Let's connect</p>
              <div className='flex flex-row items-center justify-between my-4 w-full sm:w-[80%]'>
                <div className='rounded-full shadow-lg shadow-gray-500 p-4 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <a href='https://www.linkedin.com/in/harikishore7/' target='_blank' rel='noreferrer'><FaLinkedinIn /></a>
                </div>
                <div className='rounded-full shadow-lg shadow-gray-500 p-4 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <a href='https://github.com/HariKishore7' target='_blank' rel='noreferrer'> <FaGithub /></a>
                </div>
                <div className='rounded-full shadow-lg shadow-gray-500 p-4 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <a
                    href='https://mail.google.com/mail/?view=cm&fs=1&to=harikishoret99@gmail.com&su=Contact%20Request&body=Hi%2C%0A%0AI%20wanted%20to%20reach%20out%20regarding...'
                    target='_blank'
                    rel='noreferrer'
                    onClick={() => setSideNavBar(false)}
                  > <AiOutlineMail /></a>
                </div>
                <div className='rounded-full shadow-lg shadow-gray-500 p-4 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <Link href='/#contact' onClick={() => setSideNavBar(false)}><BsFillPersonLinesFill /></Link>
                </div>
                <div className='rounded-full shadow-lg shadow-gray-500 p-4 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <Link href='/resume' onClick={() => setSideNavBar(false)}><ImProfile /></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar