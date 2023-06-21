import '@/styles/globals.css'
// import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
// import { useState } from 'react'

export default function App({ Component, pageProps }) {
  // const [darkMode, setDarkMode] = useState(false)
  return <>
    <Navbar/>
    <Component {...pageProps} />
  </>
}
