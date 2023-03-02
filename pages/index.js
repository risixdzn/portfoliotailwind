import Head from 'next/head'

import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillTwitterCircle , AiFillLinkedin, AiFillYoutube} from 'react-icons/ai'

import Image from 'next/image'
import deved from '../public/dev-ed-wave.png'
import design from '../public/design.png'
import code from '../public/code.png'
import consulting from '../public/consulting.png'
import web1 from '../public/web1.png'
import web2 from '../public/web2.png'
import web3 from '../public/web3.png'
import web4 from '../public/web4.png'
import web5 from '../public/web5.png'
import web6 from '../public/web6.png'

import { useState} from 'react';

export default function Home() {

  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className={darkMode ? 'dark' : ""}>
      <Head>
        <title>Ricardo Amorim Portfolio</title>
        <link rel='icon' href='/favicon.ico'></link>
      </Head>
      
      <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900'>
        <section className='h-screen'>
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl font-medium dark:text-white'>Ricardo Amorim</h1>
            <ul className='flex items-center'>
              <li className='cursor-pointer text-2xl'><BsFillMoonStarsFill className='dark:text-white' onClick={()=> setDarkMode(!darkMode)}/></li>
              <li><a href='#' className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8'>Resume</a></li>
            </ul>
          </nav>
          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-teal-600 font-medium  md:text-6xl dark:text-teal-400'>Ricardo</h2>
            <h3 className='text-black dark:text-gray-200 text-2xl py-2 md:text-3xl '>Developer and designer.</h3>
            <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-gray-400'>A student learning front-end development by himself. Join me down below and let's work together!</p>
          </div>
          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-white'>
            <AiFillTwitterCircle/>
            <AiFillLinkedin/>
            <AiFillYoutube/>
          </div>
          <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-95 w-95'>
            <Image src={deved} layout='fill' objectFit='cover'/>
          </div>
        </section>
        
        <section>
          <div>
            <h3 className='text-3xl py1 mt-20 font-medium dark:text-white '>Services I offer</h3>
            <p className='text-md py-5 leading-8 text-gray-800 dark:text-gray-200'>Since the beginning of my journey as a developer,
              i've done remote work for <span className='text-teal-500'>agencies </span>
              consulted for <span className='text-teal-500'>startups</span> and collaborated with talented 
              people to create digital products for both business and consumer use.
            </p>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-200'>
              I offer from a wide range of services, including programming and teaching.
            </p>
            <div className='lg:flex gap-10'>
              <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-200'>
                <Image className='mx-auto' src={design} width={100} height={100}></Image>
                <h3 className='text-lg font-medium pt-8 pb-2'>Beaultiful Designs.</h3>
                <p>Creating elegant designs suited for your needs following core design teory</p>
                <h4 className='py-4 text-teal-600'>Design tools i use</h4>
                <p className='text-gray-800 py-1'>Photoshop</p>
                <p className='text-gray-800 py-1'>Illustrator</p>
                <p className='text-gray-800 py-1'>Figma</p>
              </div>
              
              <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-200'>
                <Image className='mx-auto' src={code} width={100} height={100}></Image>
                <h3 className='text-lg font-medium pt-8 pb-2'>Beaultiful Designs.</h3>
                <p>Creating elegant designs suited for your needs following core design teory</p>
                <h4 className='py-4 text-teal-600'>Design tools i use</h4>
                <p className='text-gray-800 py-1'>Photoshop</p>
                <p className='text-gray-800 py-1'>Illustrator</p>
                <p className='text-gray-800 py-1'>Figma</p>
              </div>

              <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-200'>
                <Image className='mx-auto' src={consulting} width={100} height={100}></Image>
                <h3 className='text-lg font-medium pt-8 pb-2'>Beaultiful Designs.</h3>
                <p>Creating elegant designs suited for your needs following core design teory</p>
                <h4 className='py-4 text-teal-600'>Design tools i use</h4>
                <p className='text-gray-800 py-1'>Photoshop</p>
                <p className='text-gray-800 py-1'>Illustrator</p>
                <p className='text-gray-800 py-1'>Figma</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div>
            <h3 className='text-3xl py-2 font-medium dark:text-white'>Portfolio</h3>
            <p className='text-md py-5 leading-8 text-gray-800 dark:text-gray-200'>Since the beginning of my journey as a developer,
              i've done remote work for <span className='text-teal-500'>agencies</span>
              consulted for <span className='text-teal-500'>startups</span> and collaborated with talented 
              people to create digital products for both business and consumer use.
            </p>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-200'>
              I offer from a wide range of services, including programming and teaching.
            </p>
          </div>
          <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
            <div className='basis-1/3 flex-1'>
              <Image src={web1} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout="responsive"></Image>
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={web2} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout="responsive"></Image>
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={web3} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout="responsive"></Image>
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={web4} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout="responsive"></Image>
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={web5} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout="responsive"></Image>
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={web6} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout="responsive"></Image>
            </div>
          </div>
        </section>

      </main>
    </div>
  )
}
