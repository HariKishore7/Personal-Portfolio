import ProjectItems from './ProjectItems'
import { RevealOnScroll } from './RevealOnScroll'

const Projects = () => {
    return (
        <RevealOnScroll>
            <div id="projects" className='w-full pt-8'>
                <div className='max-w-[1240px] mx-auto px-2 py-16'>
                    <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
                    <h2>What I've Built</h2>
                    <div className='
                grid md:grid-cols-2 gap-8'>
                        <ProjectItems />
                    </div>
                </div>
            </div>
        </RevealOnScroll>
    )
}

export default Projects