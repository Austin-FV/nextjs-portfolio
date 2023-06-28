import Image from 'next/image';
import Head from 'next/head';
import { Inter } from 'next/font/google'
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
