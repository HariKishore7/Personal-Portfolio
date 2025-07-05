import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const About = () => {
    return (
        <div id="about" className='w-full md:h-auto p-2 flex items-center py-16'>
            <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-6 pt-8'>
                <div className='col-span-2'>
                    <p className='uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
                    <h2 className='py-2'>Who I Am</h2>
                    <p className='py-2 text-gray-600'>I graduated in 2020 from Sasi Institute of Technology and Engineering, Tadepalligudem. Following my graduation, I dedicated myself to learning Full Stack Development, which led to the beginning of my professional journey as a Software Developer at Genpact in 2021.</p>
                    <p className='py-2 text-gray-600'>Over the course of my career, I have had the opportunity to work with organizations such as <span className='font-bold text-md'>Genpact (Client: PayPal), Amoga, and currently, Sapiens (Client: Hollard).</span>Throughout this journey, I have gained approximately 5 years of experience in building responsive and scalable web applications, with a strong focus on modern front-end and back-end technologies.</p>
                    <p className='py-2 text-gray-600'>When I'm not coding, you'll likely find me reading a good book, getting in some physical workouts, or experimenting with the latest tech just for fun. I’m also the kind of person who doesn’t mind traveling 15 kilometers just for the perfect cup of coffee — because life (and caffeine) is all about quality experiences.</p>
                    <p className='underline py-6 text-gray-600 cursor-pointer'><Link href='/#projects'>Checkout some of my latest projects.</Link></p>
                </div>
                <div className='w-full  h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                    <Image className='rounded-xl' src="/assets/about.jpg" alt="about" width={400} height={10} />
                </div>
            </div>
        </div>
    )
}

export default About