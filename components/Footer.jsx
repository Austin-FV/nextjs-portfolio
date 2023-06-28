import React from 'react'
import Link from 'next/link'
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaMailBulk, FaBook, FaSun, FaMoon } from 'react-icons/fa'
import { AiFillLinkedin, AiFillGithub, AiFillMail, AiFillProfile } from 'react-icons/ai'


const Footer = () => {
    return (
        <div id='contact' className='pt-10 pb-10 bg-gray-100 dark:bg-gray-800 rounded-t-xl ease-in duration-300'>
            <h2 className='py-5 text-3xl tracking-wider font-bold dark:text-gray-100'>Contact</h2>
            <div className='flex justify-center gap-6 lg:gap-10 py-3 text-gray-100 mb-5'>

                <Link href={"https://www.linkedin.com/in/austin-fv/"} target='_blank' title='LinkedIn' className=''>
                    <div className='p-2 rounded-lg bg-teal-600 hover:bg-teal-800'>
                        <FaLinkedin size={25} />
                    </div>
                </Link>

                <Link href={"https://github.com/Austin-FV"} target='_blank' title='GitHub' className=''>
                    <div className='p-2 rounded-lg bg-teal-600 hover:bg-teal-800'>
                        <FaGithub size={25} />
                    </div>
                </Link>

                <Link href={"mailto:austinfv01@gmail.com"} title='Email' className=''>

                    <div className='p-2 rounded-lg bg-teal-600 hover:bg-teal-800'>
                        <AiFillMail size={25} />
                    </div>
                </Link>

                <Link href={"/AFV_Resume.pdf"} target='_blank' title='Resume' className=''>
                    <div className='p-2 rounded-lg bg-teal-600 hover:bg-teal-800'>
                        <FaBook size={25} />
                    </div>
                </Link>

            </div>

            <div className=''>
                <p className='text-gray-500'>© 2023 Austin Varghese. <br></br>All Rights Reserved</p>
            </div>

        </div>
    )
}

export default Footer