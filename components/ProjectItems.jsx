import React from 'react'
import eCommerce from '../public/assets/projects/eCommerce.png'
import Link from 'next/link'
import Image from 'next/image'

const projectitemsInfo = [
    {
        title: "E Commerce Store",
        backgroundImg: eCommerce,
        stackUsed: "React JS",
        projectURL: 'https://e-commerce-store-one-silk.vercel.app/',
        // projectURL: '/eCommerce',
        codeURL: "https://github.com/HariKishore7/E-Commerce-Store"
    },
    // {
    //     title: "E Commerce Store",
    //     backgroundImg: eCommerce,
    //     stackUsed: "React JS",
    //     // projectURL: 'https://e-commerce-store-one-silk.vercel.app/',
    //     projectURL: '/eCommerce',
    //     codeURL: "https://github.com/HariKishore7/E-Commerce-Store"
    // },
    // {
    //     title: "E Commerce Store",
    //     backgroundImg: eCommerce,
    //     stackUsed: "React JS",
    //     // projectURL: 'https://e-commerce-store-one-silk.vercel.app/',
    //     projectURL: '/eCommerce',
    //     codeURL: "https://github.com/HariKishore7/E-Commerce-Store"
    // },
    // {
    //     title: "E Commerce Store",
    //     backgroundImg: eCommerce,
    //     stackUsed: "React JS",
    //     // projectURL: 'https://e-commerce-store-one-silk.vercel.app/',
    //     projectURL: '/eCommerce',
    //     codeURL: "https://github.com/HariKishore7/E-Commerce-Store"
    // }
]

const ProjectItems = () => {
    return (
        <>
            {
                projectitemsInfo.map((item) => (
                    <div key={item.index} className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
                        <Image src={item.backgroundImg} alt='/' className='rounded-xl group-hover:opacity-10' />
                        <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                            <h3 className='text-2xl text-white tracking-wider text-center'>{item.title}</h3>
                            <p className='pb-4 pt-2 text-white text-center'>{item.stackUsed}</p>
                            <div className='flex space-x-4'>
                                <Link href={item.projectURL} target='_blank' rel='noreferrer'>
                                    <p className='text-gray-700 text-center py-3 rounded-lg bg-white font-bold text-lg cursor-pointer px-3'>View Project</p>
                                </Link>
                                <Link href={item.codeURL} target='_blank'>
                                    <p className='text-gray-700 text-center py-3 rounded-lg bg-white font-bold text-lg cursor-pointer px-3'>View Code</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default ProjectItems