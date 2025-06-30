import Image from 'next/image'
import React from 'react'
import ContactImg from '../public/assets/contact.jpg';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Link from 'next/link';
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import { GrLocation } from "react-icons/gr";
import { FiPhoneCall } from "react-icons/fi";
import { ImProfile } from 'react-icons/im';

const Contact = () => {
    return (
        <div id="contact" className='w-full lg:h-screen pt-8'>
            <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
                <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Contact</p>
                <h2 className='py-4'>Get In Touch</h2>
                <div className='grid lg:grid-cols-5 gap-8'>
                    <div className='col-span-3 lg:col-span-2 w-ful h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
                        <div className='lg:p-4 h-full'>
                            <div>
                                <Image src={ContactImg} className='rounded-xl hover:scale-105 ease-in duration-300' alt='img' />
                            </div>
                            <h2 className='py-5'>Let's connect</h2>
                            {/* <h2 className='py-8'>Hari Kishore</h2> */}
                            <div className='space-y-4'>
                                <div className='flex items-center gap-2'>
                                    <AiOutlineMail />
                                    harikishoret99@gmail.com</div>
                                <div className='flex items-center gap-2'>
                                    <FiPhoneCall />
                                    +91 79938 87618</div>
                                <div className='flex items-center gap-2'>
                                    <GrLocation />
                                    Andhra Pradesh, India</div>
                            </div>
                            <div>
                                <p className='uppercase pt-8'>Connect with Me</p>
                                <div className='flex items-center justify-between py-3'>
                                    <div className='rounded-full shadow-lg shadow-gray-500 p-4 cursor-pointer hover:scale-125 ease-in duration-300'>
                                        <FaLinkedinIn />
                                    </div>
                                    <div className='rounded-full shadow-lg shadow-gray-500 p-4 cursor-pointer hover:scale-125 ease-in duration-300'>
                                        <FaGithub />
                                    </div>
                                    <div className='rounded-full shadow-lg shadow-gray-500 p-4 cursor-pointer hover:scale-125 ease-in duration-300'>
                                        <a
                                            href='https://mail.google.com/mail/?view=cm&fs=1&to=harikishoret99@gmail.com&su=Contact%20Request&body=Hi%2C%0A%0AI%20wanted%20to%20reach%20out%20regarding...'
                                            target='_blank'
                                            rel='noreferrer'
                                        ><AiOutlineMail /></a>
                                    </div>
                                    <div className='rounded-full shadow-lg shadow-gray-500 p-4 cursor-pointer hover:scale-125 ease-in duration-300'>
                                        <Link href='/resume'><ImProfile /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
                        <div className='p-4'>
                            <form action='https://formspree.io/f/manjvboq' method='POST' encType='multipart/form-data'>
                                {/* <form action='https://getform.io/f/allzvgna' method='POST' encType='multipart/form-data'> */}
                                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                                    <div className='flex flex-col'>
                                        <label className='uppercase text-sm py-2'>Name</label>
                                        <input type='text' className='border-2 rounded-lg p-3 flex border-gray-300' name='name' />
                                    </div>
                                    <div className='flex flex-col'>
                                        <label className='uppercase text-sm py-2'>Phone Number</label>
                                        <input type='text' className='border-2 rounded-lg p-3 flex border-gray-300' name='phone' />
                                    </div>
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'>Email</label>
                                    <input type='email' className='border-2 rounded-lg p-3 flex border-gray-300' name='email' />
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'>Subject</label>
                                    <input type='text' className='border-2 rounded-lg p-3 flex border-gray-300' name='subject' />
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'>Message</label>
                                    <textarea className='border-2 rounded-lg p-3 flex border-gray-300' rows='5' name='message' />
                                </div>
                                <button className='w-full p-4 text-gray-100 mt-4'>Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
                {/* <div className='flex justify-center pt-12'>
                    <Link href='/#home'>
                        <div className='flex rounded-full shadow-lg shadow-gray-500 p-4 cursor-pointer hover:scale-125 ease-in duration-300 gap-2'>
                            <HiOutlineChevronDoubleUp size={30} className='text-[#5651e5]' />
                            <p>Back to Home</p>
                        </div>
                    </Link>
                </div> */}
            </div>
        </div>
    )
}

export default Contact