import { RevealOnScroll } from './RevealOnScroll'
import SkillLangauges from './SkillLangauges'

const Skills = () => {
    return (
        <RevealOnScroll>
            <div id="skills" className='w-full lg:h-screen p-2'>
                <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
                    <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Skills</p>
                    <h2>What I can Do</h2>
                    <div className='grid md:grid-cols-2 lg:grid-cols-5 gap-8'>
                        <SkillLangauges />
                    </div>
                </div>
            </div>
        </RevealOnScroll>
    )
}

export default Skills