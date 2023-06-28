import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaMailBulk, FaBook, FaSun, FaMoon, FaReadme, FaBookReader, FaPaperclip, FaPaperPlane, FaRegHandPaper, FaRegNewspaper, FaRegPaperPlane } from 'react-icons/fa'
import { AiFillLinkedin, AiFillGithub, AiFillMail, AiFillProfile, AiOutlinePaperClip, AiFillBook, AiFillRead } from 'react-icons/ai'
import useColorMode from '@/hooks/useColorMode';
import { SunIcon, MoonIcon } from "./Icons";
import { motion } from 'framer-motion'

const Navbar = () => {

  // deved
  const [darkMode, setDarkMode] = useState(false);

  // set dark mode with hook
  const [colorMode, setColorMode] = useColorMode();

  const [navigation, setNavigation] = useState(false)

  // check if page is not at the top to adjust navbar
  const [pageScroll, setPageScroll] = useState(false);

  useEffect(() => {
    const sub = window.addEventListener('scroll', () => setPageScroll(window.scrollY >= 90))

    return sub;
  }, [])

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "skills",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <div className={`w-full h-20 z-10 fixed bg-white text-black duration-300 ease-in dark:bg-gray-900 ring-teal-500
    ${pageScroll && "ring-1"}`}>
      <div className="flex justify-between items-center w-full h-full max-w-screen-xl mx-auto p-4">
        <Link href="/#home" scroll={false}>
          <h1 className="text-3xl lg:text-4xl font-bold cursor-pointer tracking-wider ml-1 hover:text-teal-600 dark:text-white dark:hover:text-teal-600 ease-in duration-200">
            <span>A</span><span className="text-teal-600">F</span><span>V</span>
          </h1>
        </Link>



        <div className="flex justify-between">

          <ul className="hidden md:flex">

            {
              links.map(link => (
                <Link key={link.id} href={`/#${link.link}`} scroll={false}>
                  <li className="ml-10 text-sm cursor-pointer duration-200 ease-in hover:text-teal-500 tracking-wider uppercase font-semibold py-2 dark:text-white dark:hover:text-teal-500">
                    {link.link}
                  </li>
                </Link>
              ))
            }

          </ul>

          {/* resume button (can add darkmode/lightmode button here later) */}
          <a className="font-medium bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-5 md:mr-0 hover:bg-gradient-to-l hover:from-cyan-500 hover:to-teal-500 duration-100 hover:ring-2 ring-gray-300"
            href='/AFV_Resume.pdf' target='_blank'>
            Resume
          </a>
          <button
            onClick={() => setColorMode(colorMode === "light" ? "dark" : "light")}
            className="bg-gray-200 rounded-md p-3 my-0 ml-5 mr-3 hover:ring-2 ring-gray-300 dark:bg-gray-600">
            {/* {
              colorMode === "dark" ?
              <FaSun size={20}></FaSun> : 
              <FaMoon size={20}></FaMoon>
                // <SunIcon className={"fill-dark"}></SunIcon> :
                // <MoonIcon className={"fill-dark"}></MoonIcon>
            } */}
            <FaMoon size={15} className="my-0 dark:text-white" />
          </button>

          <div className="md:hidden cursor-pointer p-1" onClick={() => setNavigation(true)}>
            <FaBars size={30} className="dark:text-white"></FaBars>
          </div>

          {/* Disappear on click, not needed */}
          {/* {
            !navigation && (
              <div className="md:hidden cursor-pointer p-1" onClick={() => setNavigation(true)}>
                <FaBars size={30} className="dark:text-white"></FaBars>
              </div>
            )
          } */}

        </div>
      </div>

      {/* MOBILE NAVIGATION MENU */}

      <div className={
        navigation
          ? "md:hidden fixed left-0 top-0 w-full h-full "
          : ""}>
        <div className={
          navigation
            ? "fixed right-0 top-0 w-full h-full bg-black/70 backdrop-blur text-white p-10 ease-in duration-200 "
            : "fixed top-0 right-[-100%] p-10 h-full ease-in-out duration-200"}>

          {/* nav logo and exit button */}

          <div>
            <div className="flex w-full items-center justify-between">
              <Link href='/#home'>
                <h2 className="text-3xl font-bold tracking-wider cursor-pointer">
                  AFV
                </h2>
              </Link>
              <div className="p-3 cursor-pointer" onClick={() => setNavigation(false)}>
                <FaTimes size={30}></FaTimes>
              </div>

            </div>
          </div>

          {/* mobilenav links */}

          <div className="mt-20 flex flex-col h-fit gap-20 text-center">

            <ul className="uppercase">

              {
                links.map(link => (
                  <li key={link.id} className="py-4 text-2xl tracking-wider rounded-md duration-100 hover:scale-105 mx-12 ">
                    <Link href={`/#${link.link}`} onClick={() => setNavigation(false)} className="">
                      {link.link}
                    </Link>
                  </li>
                ))
              }

            </ul>

            {/* social links - can clean this up like navbar later */}

            <div>
              <div className="grid grid-cols-2 mx-auto w-2/5 gap-5 aspect-square">
                <div className="flex items-center justify-center rounded-xl shadow-md p-3 cursor-pointer bg-teal-800 duration-100 hover:scale-105">
                  <Link href={"https://www.linkedin.com/in/austin-fv/"} target="_blank" title="LinkedIn">
                    <AiFillLinkedin size={30} />
                  </Link>
                </div>

                <div className="flex items-center justify-center rounded-xl shadow-md p-3 cursor-pointer bg-teal-800 duration-100 hover:scale-105">
                  <Link href={"https://github.com/Austin-FV"} target="_blank" title="GitHub">
                    <AiFillGithub size={30} />
                  </Link>
                </div>

                <div className="flex items-center justify-center rounded-xl shadow-md p-3 cursor-pointer bg-teal-800 duration-100 hover:scale-105">
                  <Link href={"mailto:austinfv01@gmail.com"} title="Email">
                    <AiFillMail size={30} />
                  </Link>
                </div>

                <div className="flex items-center justify-center rounded-xl shadow-md p-3 cursor-pointer bg-teal-800 duration-100 hover:scale-105">
                  <Link href={"/AFV_Resume.pdf"} target="_blank" title="Resume">
                    <FaBook size={30} />
                  </Link>
                </div>

              </div>

              {/* <div className="flex items-center justify-center rounded-full shadow-md p-3 cursor-pointer bg-blue-900 duration-100 hover:scale-105">
                <Link href={"https://www.linkedin.com/in/austin-fv/"} target="_blank">
                  <h2 className="flex"><FaBook></FaBook> Resume</h2>
                </Link>
              </div>

              <a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8 mr-5 md:mr-0"
                href='/2023-04-30-AustinVargheseResume.pdf' target='_blank'>
                Resume
              </a> */}

            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
