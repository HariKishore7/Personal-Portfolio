import Image from 'next/image'

const imagesList = [
    {
        imageUrl: "/assets/skills/react.png",
        name: "React JS"
    },
    {
        imageUrl: "/assets/skills/nextjs.png",
        name: "Next JS"
    },
    {
        imageUrl: "/assets/skills/javascript.png",
        name: "JavaScript"
    },
    {
        imageUrl: "/assets/skills/html.png",
        name: "HTML5"
    },
    {
        imageUrl: "/assets/skills/css.png",
        name: "CSS3"
    },
    {
        imageUrl: "/assets/skills/tailwind.png",
        name: "Tailwind CSS"
    },
    {
        imageUrl: "/assets/skills/typescript.png",
        name: "TypeScript"
    },
    {
        imageUrl: "/assets/skills/redux.png",
        name: "Redux"
    },
    {
        imageUrl: "/assets/skills/materialUI.png",
        name: "Material UI"
    },
    {
        imageUrl: "/assets/skills/bootstrap.png",
        name: "Bootstrap"
    },
    {
        imageUrl: "/assets/skills/strapi.png",
        name: "Strapi"
    },
    {
        imageUrl: "/assets/skills/expressJs.png",
        name: "Express JS"
    },
    {
        imageUrl: "/assets/skills/auth0.png",
        name: "Auth 0"
    },
    {
        imageUrl: "/assets/skills/git.png",
        name: "Git"
    },
    {
        imageUrl: "/assets/skills/github.png",
        name: "Git Hub"
    },
    {
        imageUrl: "/assets/skills/postman1.png",
        name: "Postman"
    },
    {
        imageUrl: "/assets/skills/sql.png",
        name: "SQL"
    },
    {
        imageUrl: "/assets/skills/mongoDB.png",
        name: "MongoDB"
    },
    {
        imageUrl: "/assets/skills/java.png",
        name: "Java"
    },
    {
        imageUrl: "/assets/skills/dataStructures.png",
        name: "Data Structures & Algo"
    },

]

const SkillLangauges = () => {
    return (
        <>
            {
                imagesList.map((item,index) => (
                    <div key={index} className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image alt="/" src={item.imageUrl} width="64" height="64" />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>{item.name}</h3>
                            </div>
                        </div>
                    </div>
                ))
            }

        </>
    )
}

export default SkillLangauges