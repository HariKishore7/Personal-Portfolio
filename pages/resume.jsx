import Head from 'next/head';
import Link from 'next/link';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import { IoMdMail } from "react-icons/io";

const resume = () => {
    return (
        <>
            <Head>
                <title>Hari Kishore | Resume</title>
                <meta
                    name='description'
                    content='I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences.'
                />
                <link rel='icon' href='/fav.png' />
            </Head>

            <div className='max-w-[1040px] mx-auto p-2 pt-[120px] pb-10'>
                <h2 className='text-center'>Resume</h2>
                <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
                    <h2 className='text-center'>Hari Kishore Tippa</h2>
                    <div className='flex'>
                        <a
                            href='https://www.linkedin.com/in/harikishore7/'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
                        </a>
                        <a
                            href='https://github.com/HariKishore7'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <FaGithub size={20} style={{ marginRight: '1rem' }} />
                        </a>
                        <a
                            href='https://mail.google.com/mail/?view=cm&fs=1&to=harikishoret99@gmail.com&su=Contact%20Request&body=Hi%2C%0A%0AI%20wanted%20to%20reach%20out%20regarding...'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <IoMdMail size={20} style={{ marginRight: '1rem' }} />
                        </a>
                    </div>
                </div>
                <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
                    <div className='hidden sm:block'>
                        <p>
                            Frontend Developer <span className='px-1'>|</span> Web Development{' '}
                        </p>
                    </div>
                    <div className='block sm:hidden'>
                        <p>Frontend Developer</p>
                        <p className='py-2'>Web Development</p>
                    </div>
                </div>
                <p>
                    I'm a Software Developer with expertise in frontend development and a solid understanding of Backend technologies. Proficient in creating visually
                    appealing and responsive user interfaces. Skilled in modern frontend frameworks like React and delivering dynamic web applications. Knowledgeable
                    in backend technologies such as database management and integration with RESTful APIs. Strong problem-solving skills and ability to collaborate
                    eﬀectively in cross-functional teams.
                </p>

                <h5 className='text-center underline text-[18px] py-6'>
                    Professional Experience
                </h5>
                {/* Experience */}
                <div className='py-6'>
                    <p className='italic'>
                        <span className='font-bold italic'>
                            Sapiens
                        </span>
                        <span className='px-2'>|</span>Frontend Developer
                    </p>
                    <p className='py-1 italic'>Jun 2023 - Present <span className='px-2'>|</span> Bangalore, India</p>
                    <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
                        <li>
                            Led full lifecycle development of client claims module, delivering tailored features that improved client
                            satisfaction and efficiency.
                        </li>
                        <li>
                            Engineered robust claims logic ensuring 100% accuracy in payment workflows across multiple scenarios.
                        </li>
                        <li>
                            Implemented robust error-handling, reducing bugs by 99% and improving team debugging efficiency.
                        </li>
                        <li>
                            Enhanced an in-house project portal and optimized performance for successful production release.
                        </li>
                    </ul>
                </div>
                {/* Experience */}
                <div className='py-6'>
                    <p className='italic'>
                        <span className='font-bold italic'>
                            Amoga
                        </span>
                        <span className='px-2'>|</span>Frontend Developer
                    </p>
                    <p className='py-1 italic'>Nov 2022 - Jun 2023 <span className='px-2'>|</span> Bangalore, India</p>
                    <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
                        <li>
                            Reduced 95% manual effort by developing the ACM (Application Change Management) feature.
                        </li>
                        <li>
                            Worked on OKR management software to streamline goal tracking and execution.
                        </li>
                        <li>
                            Developed features for planning, collaboration, and tracking project dependencies, tasks, and employee workflows.
                        </li>
                        <li>
                            Built complex UIs using reusable components and maintainable code, resolved critical bugs swiftly.
                        </li>
                    </ul>
                </div>
                {/* Experience */}
                <div className='py-6'>
                    <p className='italic'>
                        <span className='font-bold italic'>
                            Genpact
                        </span>
                        <span className='px-2'>|</span>Frontend Developer
                    </p>
                    <p className='py-1 italic'>Mar 2021 - Oct 2022 <span className='px-2'>|</span> Bangalore, India</p>
                    <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
                        <li>
                            Built responsive web applications and implemented components based on design specs.
                        </li>
                        <li>
                            Developed and maintained code for multiple campaigns at PayPal, following industry best practices.
                        </li>
                        <li>
                            Led critical campaigns, delivering user-friendly and responsive websites for key clients.
                        </li>
                    </ul>
                </div>
                {/* Experience */}
                <div className='py-6'>
                    <p className='italic'>
                        <span className='font-bold italic'>
                            Newton School
                        </span>
                        <span className='px-2'>|</span>Software Developer Intern
                    </p>
                    <p className='py-1 italic'>Aug 2020 - Mar 2021<span className='px-2'>|</span> Remote, India</p>
                    <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
                        <li>
                            Gained full-stack experience by working on dynamic form generation and shopping inventory.
                        </li>
                        <li>
                            Tech Stack used: ReactJS, JavaScript, NodeJS, ExpressJS, MongoDB, Java, DSA.
                        </li>
                    </ul>
                </div>

                {/* Skills */}
                <div className=' py-4'>
                    <h5 className='text-center underline text-[18px] py-2'>Technical Skills</h5>
                    <p className='py-2'>
                        <span className='font-bold'>Frameworks</span>
                        <span className='px-2'>|</span>ReactJS
                        <span className='px-2'>|</span> NextJS
                        <span className='px-2'>|</span>Redux
                        <span className='px-2'>|</span>Tailwind CSS
                        <span className='px-2'>|</span>Material UI
                        <span className='px-2'>|</span>Bootstrap
                        <span className='px-2'>|</span>NodeJS
                        <span className='px-2'>|</span>ExpressJS
                        <span className='px-2'>|</span>Strapi
                        <span className='px-2'>|</span>Kendo UI
                        <span className='px-2'>|</span>Auth0
                    </p>
                    <p className='py-2'>
                        <span className='font-bold'>Languages</span>
                        <span className='px-2'>|</span>JavaScript
                        <span className='px-2'>|</span>TypeScript
                        <span className='px-2'>|</span> HTML5
                        <span className='px-2'>|</span>CSS3
                        <span className='px-2'>|</span>Java
                    </p>
                    <p className='py-2'>
                        <span className='font-bold'>Developer Tools</span>
                        <span className='px-2'>|</span>Git
                        <span className='px-2'>|</span>GitHub
                        <span className='px-2'>|</span>Postman
                        <span className='px-2'>|</span>REST API
                        <span className='px-2'>|</span>Webpack
                        <span className='px-2'>|</span>Babel
                    </p>
                    <p className='py-2'>
                        <span className='font-bold'>Database</span>
                        <span className='px-2'>|</span>MongoDB
                        <span className='px-2'>|</span>SQL
                    </p>
                    <p className='py-2'>
                        <span className='font-bold'>Data Structures & Algorithms</span>
                    </p>
                </div>

                <h5 className='text-center underline text-[18px] py-4'>
                    Education
                </h5>
                <div className='py-6'>
                    <p className='italic'>
                        <span className='font-bold italic'>
                            Sasi Institute of Technology And Engineering
                        </span>
                        <span className='px-2'>|</span>Computer Science And Engineering, B.Tech
                    </p>
                    <p className='py-1 italic'>2016 - 2020 <span className='px-2'>|</span>Tadepalligudem, Andhra Pradesh</p>
                </div>

                <h5 className='text-center underline text-[18px] py-4'>
                    Achievements
                </h5>
                <div className='py-6 italic space-y-4'>
                    <div className='font-bold italic'>
                        Wow award for outstanding performance (Q2, 2024)
                    </div>
                    <div className='font-bold italic'>
                        Best Campaign Delivery Award(Q1,2021), Diamond campaign Delivery Award(Q1, 2022)
                    </div>
                </div>
                <div className='flex justify-center pt-12'>
                    <Link href='/#home'>
                        <div className='flex rounded-full shadow-lg shadow-gray-500 p-4 cursor-pointer hover:scale-125 ease-in duration-300 gap-2'>
                            <HiOutlineChevronDoubleUp size={30} className='text-[#5651e5]' />
                            <p>Back to Home</p>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default resume