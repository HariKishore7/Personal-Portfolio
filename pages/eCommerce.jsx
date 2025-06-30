import Image from 'next/image'
import React from 'react'
import eCommerceImg from '../public/assets/projects/eCommerce.png'
import { RiRadioButtonFill } from "react-icons/ri";
import Link from 'next/link';

const technologiesUsed = ["React", "TailWind CSS", "Redux", "etc..."];

const eCommerce = () => {
    return (
        <div className='w-full'>
            <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
                <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
                <Image className='absolute z-1' layout='fill' objectFit='cover' src={eCommerceImg} alt='' />
                <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                    <h2 className='py-2'>E-Commerce</h2>
                    <h3>React JS/ Tailwind</h3>
                </div>
            </div>
            <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
                <div className='col-span-4'>
                    <p>Project</p>
                    <h2>Overview</h2>

                    <p>This is an APP built using React JS, Tailwind CSS....</p>
                    <a
                        href='https://e-commerce-store-one-silk.vercel.app/'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <button className='px-8 py-2 mt-4 mr-8 cursor-pointer'>Demo</button></a>
                    <a
                        href='https://github.com/HariKishore7/E-Commerce-Store'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <button className='px-8 py-2 mt-4 cursor-pointer'>Code</button></a>
                </div>
                <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
                    <div className='p-2'>
                        <p className='text-center font-bold pb-2'>Technologies used</p>
                        <div className='grid grid-cols-3 md:grid-cols-1'>
                            {technologiesUsed.map(item => (
                                <p key={item.index} className='flex items-center py-2 text-gray-600'><RiRadioButtonFill className='pr-1' />{item}</p>
                            ))
                            }
                        </div>
                    </div>
                </div>
                <Link href='/#projects' className="underline cursor-pointer">Back</Link>
            </div>
        </div>
    )
}

export default eCommerce