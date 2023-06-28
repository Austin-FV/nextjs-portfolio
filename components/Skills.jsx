import React from 'react'
import Image from 'next/image';
import { motion } from 'framer-motion'
import Link from 'next/link';

const Skills = () => {

    const languages = [
        {
            name: "Python",
            imgPath: "python-original.svg"
        },
        {
            name: "C",
            imgPath: "c-original.svg"
        },
        // {
        //     name: "C++",
        //     imgPath: "cplusplus-original.svg"
        // },
        // {
        //     name: "C#",
        //     imgPath: "csharp-original.svg"
        // },
        {
            name: "Java",
            imgPath: "java-original.svg"
        },
        {
            name: "JavaScript",
            imgPath: "javascript-original.svg"
        },
        {
            name: "Dart",
            imgPath: "dart-original.svg"
        },
        
        {
            name: "Ruby",
            imgPath: "ruby-original.svg"
        },
        {
            name: "HTML",
            imgPath: "html5-original.svg"
        },
        {
            name: "CSS",
            imgPath: "css3-original.svg"
        },
    ];

    const tools = [
        {
            name: "React",
            imgPath: "react-original.svg"
        },
        {
            name: "Node",
            imgPath: "nodejs-original.svg"
        },
        {
            name: "MySQL",
            imgPath: "mysql-original.svg"
        },
        {
            name: "Git",
            imgPath: "git-original.svg"
        },
        {
            name: "Docker",
            imgPath: "docker-original.svg"
        },
        {
            name: "Android Studio",
            imgPath: "androidstudio-original.svg"
        },
        {
            name: "Flutter",
            imgPath: "flutter-original.svg"
        },
        {
            name: "Firebase",
            imgPath: "firebase-plain.svg"
        },
        {
            name: "Unity",
            imgPath: "unity-original.svg"
        },
        {
            name: "Rails",
            imgPath: "rails-plain.svg"
        },
        {
            name: "Figma",
            imgPath: "figma-original.svg"
        },
        {
            name: "Trello",
            imgPath: "trello-plain.svg"
        },

    ];

    const cloudplatforms = [
        {
            name: "AWS",
            imgPath: "amazonwebservices-original.svg"
        },
        {
            name: "Azure",
            imgPath: "azure-original.svg"
        },
        {
            name: "Google Cloud",
            imgPath: "googlecloud-original.svg"
        },
    ]

    return (
        <div id='skills'>

            <h1 className='text-5xl md:text-6xl tracking-wider uppercase pt-20 font-bold dark:text-gray-100'>Skills</h1>
            <p className='text-md py-5 leading-8 text-gray-800 dark:text-gray-300'>Here are some of the
                <span className='text-teal-600'> technologies </span>I have worked with!
                <br/><span className='text-teal-600 font-semibold'><Link href="/#portfolio">See How!</Link></span></p>


            <h2 className='text-3xl py-1 dark:text-gray-200'>Languages</h2>
            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mt-2 mb-10'>
                {/* <motion.div> */}
                {languages.map((skill) => (
                    <motion.div whileInView={{ opacity: [0, 1] }} transition={{ duration: 1 }} key={skill.name}
                        className='flex flex-col items-center justify-between gap-4 p-4 shadow-md shadow-blue-300 rounded-xl outline-offset-8 hover:scale-105 ease-in duration-300 dark:shadow-blue-300 dark:hover:bg-gray-800 hover:bg-gray-200'>

                        <div className=''>
                            <Image src={"/skill-icons/" + skill.imgPath} alt={skill.name} width={64} height={64} title={skill.name} />
                        </div>
                        <h3 className='font-semibold dark:text-gray-300'>{skill.name}</h3>


                    </motion.div>
                ))}

                {/* </motion.div> */}

            </div>

            <h2 className='text-3xl py-1 dark:text-gray-200'>Cloud Platforms</h2>
            <div className='grid grid-cols-3 gap-4 mt-2 mb-10'>
                {/* <motion.div> */}
                {cloudplatforms.map((skill) => (
                    <motion.div whileInView={{ opacity: [0, 1] }} transition={{ duration: 1 }} key={skill.name}
                        className='flex flex-col items-center justify-between gap-4 p-4 shadow-md shadow-blue-300 rounded-xl hover:scale-105 ease-in duration-300 dark:shadow-cyan-300 dark:hover:bg-gray-800 hover:bg-gray-200'>

                        <div className=''>
                            <Image src={"/skill-icons/" + skill.imgPath} alt={skill.name} width={64} height={64} title={skill.name} className=''/>
                        </div>
                        <h3 className='font-semibold dark:text-gray-300'>{skill.name}</h3>


                    </motion.div>
                ))}

                {/* </motion.div> */}

            </div>

            <h2 className='text-3xl py-1 dark:text-gray-200'>Tools</h2>
            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mt-2 mb-10'>
                {/* <motion.div> */}
                {tools.map((skill) => (
                    <motion.div whileInView={{ opacity: [0, 1] }} transition={{ duration: 1 }} key={skill.name}
                        className='flex flex-col items-center  justify-between gap-4 p-4 shadow-md shadow-blue-300 rounded-xl hover:scale-105 ease-in duration-300 dark:shadow-teal-300 dark:hover:bg-gray-800 hover:bg-gray-200'>

                        <div className=''>
                            <Image src={"/skill-icons/" + skill.imgPath} alt={skill.name} width={64} height={64} title={skill.name} />
                        </div>
                        <h3 className='font-semibold dark:text-gray-300'>{skill.name}</h3>


                    </motion.div>
                ))}

                {/* </motion.div> */}

            </div>


        </div>
    )
}

export default Skills