import Link from 'next/link'
import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { ImProfile } from "react-icons/im";

const Main = () => {
    return (
        <div id="home" className='w-full h-screen text-center'>
            <div className='max-w-[1240px w-full h-full mx-auto p-2 flex justify-center items-center'>
                <div>
                    <p className='uppercase text-sm tracking-widest text-gray-500'>Welcome</p>
                    <h1 className='py-4 text-gray-700'>Hi, I'm <span className='text-[#5651e5]'>Hari Kishore</span></h1>
                    <h1 className='py-1 text-gray-700'>A Front-End Web Developer</h1>
                    <p className='text-sm pt-2 text-gray-600 max-w-[70%] m-auto'>I'm a Software Developer with expertise in frontend development and a solid understanding of Backend technologies. Proficient in creating visually
                        appealing and responsive user interfaces. Skilled in modern frontend frameworks like React and delivering dynamic web applications. Knowledgeable
                        in backend technologies such as database management and integration with RESTful APIs. Strong problem-solving skills and ability to collaborate
                        eﬀectively in cross-functional teams.</p>
                    <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                        <div className='rounded-full shadow-lg shadow-gray-500 p-4 cursor-pointer hover:scale-125 ease-in duration-300'>
                            <a href='https://www.linkedin.com/in/harikishore7/' target='_blank' rel='noreferrer'><FaLinkedinIn /></a>
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-500 p-4 cursor-pointer hover:scale-125 ease-in duration-300'>
                            <a href='https://github.com/HariKishore7' target='_blank' rel='noreferrer'> <FaGithub /></a>
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-500 p-4 cursor-pointer hover:scale-125 ease-in duration-300'>
                            <a
                                href='https://mail.google.com/mail/?view=cm&fs=1&to=harikishoret99@gmail.com&su=Contact%20Request&body=Hi%2C%0A%0AI%20wanted%20to%20reach%20out%20regarding...'
                                target='_blank'
                                rel='noreferrer'
                            > <AiOutlineMail /></a>
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-500 p-4 cursor-pointer hover:scale-125 ease-in duration-300'>
                            <Link href='/#contact'><BsFillPersonLinesFill /></Link>
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-500 p-4 cursor-pointer hover:scale-125 ease-in duration-300'>
                            <Link href='/resume'><ImProfile /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main