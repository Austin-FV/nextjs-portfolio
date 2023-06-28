import { useState, useEffect } from 'react'
import React from 'react'
import { AiFillEye, AiFillGithub } from 'react-icons/ai'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

// TEMPORARY FOR DESIGN, WILL NEED MY OWN IMAGES
import design from '../public/design.png'
import code from '../public/code.png'
import consulting from '../public/consulting.png'
import web1 from "../public/assets/web1.png"
import web2 from "../public/assets/web2.png"
import web3 from "../public/assets/web3.png"
import web4 from "../public/assets/web4.png"
import web5 from "../public/assets/web5.png"
import web6 from "../public/assets/web6.png"

// import {Modal} from "reactstrap"
import Modal from './Modal'

const Portfolio = () => {

    const projects = [
        // {
        //     id: 1,
        //     title: "GPX Parser",
        //     imageSrc: web1,
        //     url: "gpx-parser",
        //     description: "desc",
        //     tech: ["Python", "Nodejs"]
        // },
        // {
        //     id: 2,
        //     title: "2",
        //     imageSrc: web2,
        //     url: "2",
        //     description: "desc",
        //     tech: ["Python", "Nodejs"]
        // },
        // {
        //     id: 3,
        //     title: "3",
        //     imageSrc: web3,
        //     url: "3",
        //     description: "desc",
        //     tech: ["Python", "Nodejs"]
        // },
        // {
        //     id: 4,
        //     title: "4",
        //     imageSrc: web4,
        //     url: "4",
        //     description: "desc",
        //     tech: ["Python", "Nodejs"]
        // },
    ]

    return (
        <div id='portfolio' className='w-full pt-20 pb-20'>
            {/* lg:min-h-screen */}
            <div className='max-w-screen-xl mx-auto text-center py-6'>
                <h1 className='text-5xl md:text-6xl tracking-wider uppercase font-bold dark:text-white'>
                    Portfolio
                </h1>
                {/* <p className='py-4 dark:text-gray-300 font-medium'>
                    Here is a showcase of some of my projects that can also be found on<span className='text-teal-500 font-semibold'><a href="https://github.com/Austin-FV" target='_blank'> Github</a></span>!
                </p> */}
                <p className='py-4 dark:text-gray-300 font-medium'>
                    Uh Oh!<br/> Currently Re-Imagining this Section, in the meantime visit my <span className='text-teal-500 font-semibold'><a href="https://github.com/Austin-FV" target='_blank'> GitHub </a></span>to view my projects!
                </p>

                <div className='max-w-5xl mx-auto grid md:grid-cols-2 gap-8'>

                    {
                        projects.map(({ id, title, imageSrc, url, description, tech }) => (
                            // <Link key={id} href={'/#'}>
                            <div key={id} className='group shadow-md shadow-gray-600 overflow-hidden rounded-md aspect-square flex items-center justify-center relative'>
                                <Image src={imageSrc} alt={title} title={title} className='rounded-md duration-200 aspect-square hover:scale-110 object-cover ' />

                                <div className='absolute bottom-0 top-0 left-0 right-0 px-4 py-10 bg-gray-800 opacity-90 text-center'>
                                    <p className='text-white font-semibold'>{title}</p>
                                </div>
                            </div>
                            // </Link>
                        ))
                    }

                </div>

            </div>

            {/* <Modal></Modal> */}

            <motion.div></motion.div>
            {/* <section>
                    <div className='pt-5'>
                        <h3 className='text-3xl py-1'>Experience</h3>
                        <p className='text-md py-5 leading-8 text-gray-800 dark:text-gray-200'>Here are some of the
                            <span className='text-teal-500'> technologies </span>I have worked with!</p>
                    </div>
                </section>
                <section>
                    <div className='pt-5'>
                        <h3 className='text-3xl py-1'>Services I offer</h3>
                        <p className='text-md py-5 leading-8 text-gray-800 dark:text-gray-200'>some more
                            <span className='text-teal-500'> extra </span>text here</p>
                    </div>

                    <div className='lg:flex gap-10'>
                        <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white'>
                            <div className='flex justify-center'>
                                <Image src={design} width={100} height={100} />
                            </div>
                            <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
                            <p className='py-2'>
                                Creating elegant design suited for your needs and design theory.
                            </p>
                            <h4 className='py-4 text-teal-600'>Design Tools Used</h4>
                            <p className='text-gray-800 py-1'>Figma</p>
                        </div>
                        <div className='text-center shadow-lg p-10 rounded-xl my-10'>
                            <div className='flex justify-center'>
                                <Image src={code} width={100} height={100} />
                            </div>
                            <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
                            <p className='py-2'>
                                Creating elegant design suited for your needs and design theory.
                            </p>
                            <h4 className='py-4 text-teal-600'>Design Tools Used</h4>
                            <p className='text-gray-800 py-1'>Figma</p>
                        </div>
                        <div className='text-center shadow-lg p-10 rounded-xl my-10'>
                            <div className='flex justify-center'>
                                <Image src={consulting} width={100} height={100} />
                            </div>
                            <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
                            <p className='py-2'>
                                Creating elegant design suited for your needs and design theory.
                            </p>
                            <h4 className='py-4 text-teal-600'>Design Tools Used</h4>
                            <p className='text-gray-800 py-1'>Figma</p>
                        </div>
                    </div>

                </section>

                <section>
                    <div>

                        <h3 className='text-3xl py-1'>Portfolio</h3>
                        <p className='text-md py-5 leading-8 text-gray-800'>some more
                            <span className='text-teal-500'> extra </span>text here</p>

                    </div>

                    <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
                        <div className='basis-1/3 flex-1 flex justify-center'>
                            <Image src={web1} className='rounded-lg object-cover' width={'500'} height={'500'} />
                        </div>
                        <div className='basis-1/3 flex-1 flex justify-center'>
                            <Image src={web2} className='rounded-lg object-cover' width={'500'} height={'500'} />
                        </div>
                        <div className='basis-1/3 flex-1 flex justify-center'>
                            <Image src={web3} className='rounded-lg object-cover' width={'500'} height={'500'} />
                        </div>
                        <div className='basis-1/3 flex-1 flex justify-center '>
                            <Image src={web4} className='rounded-lg object-cover' width={'500'} height={'500'} />
                        </div>
                        <div className='basis-1/3 flex-1 flex justify-center'>
                            <Image src={web5} className='rounded-lg object-cover' width={'500'} height={'500'} />
                        </div>
                        <div className='basis-1/3 flex-1 flex justify-center'>
                            <Image src={web6} className='rounded-lg object-cover' width={'500'} height={'500'} />
                        </div>
                    </div>
                </section>

                <section>
                    <div className='pt-5'>
                        <h3 className='text-3xl py-1'>Contact Me</h3>
                        <p className='text-md py-5 leading-8 text-gray-800 dark:text-gray-200'>some more
                            <span className='text-teal-500'> extra </span>text here</p>
                    </div>
                </section> */}
        </div>
    )
}

export default Portfolio