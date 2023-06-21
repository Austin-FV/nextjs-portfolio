import Image from 'next/image';
import Head from 'next/head';
import { Inter } from 'next/font/google'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillLinkedin, AiFillGithub, AiFillMail, AiFillProfile} from 'react-icons/ai'
import guycoding from '../public/guy-coding.png'
import design from '../public/design.png'
import code from '../public/code.png'
import consulting from '../public/consulting.png'
import web1 from "../public/assets/web1.png"
import web2 from "../public/assets/web2.png"
import web3 from "../public/assets/web3.png"
import web4 from "../public/assets/web4.png"
import web5 from "../public/assets/web5.png"
import web6 from "../public/assets/web6.png"
import { useState } from 'react';
import React from 'react';
// import { Document, Page } from 'react-pdf';
// import resume from "../public/2023-04-30-AustinVargheseResume.pdf"
// import {pdfjs, Document, Page} from 'react-pdf'

// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`

import HomePage from '@/components/HomePage';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  
  return (
    <div className='bg-transparent'>
      <HomePage/>
    </div>
  )
}
