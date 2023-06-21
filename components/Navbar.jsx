import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaMailBulk, FaBook } from 'react-icons/fa'

const Navbar = () => {

  const [navigation, setNavigation] = useState(false)

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "portfolio",
    },
    {
      id: 3,
      link: "experience",
    },
    {
      id: 4,
      link: "me",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <div className="w-full h-20 z-10 fixed bg-white text-black duration-300 ease-in">
      <div className="flex justify-between items-center w-full h-full max-w-screen-xl mx-auto p-4">
        <Link href="/#home">
          <h1 className="text-3xl lg:text-4xl font-bold cursor-pointer tracking-wider">
            AFV
          </h1>
        </Link>



        <div className="flex justify-between">

          <ul className="hidden md:flex">

            {
              links.map(({ id, link }) => (
                <Link key={{ id }} href={`/#${link}`}>
                  <li className="ml-10 text-sm cursor-pointer duration-200 ease-out hover:scale-105 tracking-wider uppercase font-medium py-2">
                    {link}
                  </li>
                </Link>
              ))
            }

          </ul>

          {/* resume button (can add darkmode/lightmode button here later) */}
          <a className="font-medium bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8 mr-5 md:mr-0 hover:bg-gradient-to-l hover:from-cyan-500 hover:to-teal-500 duration-100 hover:ring-2 hover:ring-gray-300"
            href='/AFV_Resume.pdf' target='_blank'>Resume</a>

          {
            !navigation && (
              <div className="md:hidden cursor-pointer p-1" onClick={() => setNavigation(true)}>
                <FaBars size={30}></FaBars>
              </div>
            )
          }

        </div>
      </div>

      {/* MOBILE NAVIGATION MENU */}

      <div className={navigation ? "md:hidden fixed left-0 top-0 w-full h-full bg-black/70 backdrop-blur" : ""}>
        <div className={navigation ? "fixed right-0 top-0 w-4/5 h-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-10 ease-in duration-200" : "fixed top-0 right-[-100%] p-10 h-full ease-in duration-200"}>

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

          <div className="mt-24 flex flex-col h-fit gap-20">

            <ul className="uppercase">

              {
                links.map(({ id, link }) => (
                  <Link key={{ id }} href={`/#${link}`}>
                    <li className="py-4 text-2xl tracking-wider cursor-pointer rounded-md duration-100 hover:scale-105">
                      {link}
                    </li>
                  </Link>
                ))
              }

            </ul>

            {/* social links - can clean this up like navbar later */}

            <div>
              <div className="grid grid-cols-3 mx-auto w-4/5 gap-10">
                <div className="flex items-center justify-center rounded-full shadow-md p-3 cursor-pointer bg-blue-900 duration-100 hover:scale-105">
                  <Link href={"https://www.linkedin.com/in/austin-fv/"} target="_blank">
                    <FaLinkedin size={25}></FaLinkedin>
                  </Link>
                </div>

                <div className="flex items-center justify-center rounded-full shadow-md p-3 cursor-pointer bg-blue-900 duration-100 hover:scale-105">
                  <FaGithub size={25}></FaGithub>
                </div>

                <div className="flex items-center justify-center rounded-full shadow-md p-3 cursor-pointer bg-blue-900 duration-100 hover:scale-105">
                  <FaMailBulk size={25}></FaMailBulk>
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
