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

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ricardo Amorim Portfolio</title>
        <link rel='icon' href='/favicon.ico'></link>
      </Head>
      
      <main className='bg-white px-10 md:px-20 lg:px-40'>
        <section className='h-screen'>
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl'>Ricardo Amorim</h1>
            <ul className='flex items-center'>
              <li className='cursor-pointer text-2xl'><BsFillMoonStarsFill/></li>
              <li><a href='#' className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8'>Resume</a></li>
            </ul>
          </nav>
          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-teal-600 font-medium  md:text-6xl'>Ricardo</h2>
            <h3 className='text-2xl py-2 md:text-3xl'>Developer and designer.</h3>
            <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto'>A student learning front-end development by himself. Join me down below and let's work together!</p>
          </div>
          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
            <AiFillTwitterCircle/>
            <AiFillLinkedin/>
            <AiFillYoutube/>
          </div>
          <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden'>
            <Image src={deved} layout='fill' objectFit='cover'/>
          </div>
        </section>
        
        <section>
          <div>
            <h3 className='text-3xl py1 mt-20'>Services I offer</h3>
            <p className='text-md py-5 leading-8 text-gray-800'>Since the beginning of my journey as a developer,
              i've done remote work for <span className='text-teal-500'>agencies</span>
              consulted for <span className='text-teal-500'>startups</span> and collaborated with talented 
              people to create digital products for both business and consumer use.
            </p>
            <p className='text-md py-2 leading-8 text-gray-800'>
              I offer from a wide range of services, including programming and teaching.
            </p>
            <div>
              <div className='text-center shadow-lg p-10 rounded-xl my-10'>
                <Image className='mx-auto' src={design} width={100} height={100}></Image>
                <h3 className='text-lg font-medium pt-8 pb-2'>Beaultiful Designs.</h3>
                <p>Creating elegant designs suited for your needs following core design teory</p>
                <h4 className='py-4 text-teal-600'>Design tools i use</h4>
                <p className='text-gray-800 py-1'>Photoshop</p>
                <p className='text-gray-800 py-1'>Illustrator</p>
                <p className='text-gray-800 py-1'>Figma</p>
              </div>
              
              <div className='text-center shadow-lg p-10 rounded-xl my-10'>
                <Image className='mx-auto' src={code} width={100} height={100}></Image>
                <h3 className='text-lg font-medium pt-8 pb-2'>Beaultiful Designs.</h3>
                <p>Creating elegant designs suited for your needs following core design teory</p>
                <h4 className='py-4 text-teal-600'>Design tools i use</h4>
                <p className='text-gray-800 py-1'>Photoshop</p>
                <p className='text-gray-800 py-1'>Illustrator</p>
                <p className='text-gray-800 py-1'>Figma</p>
              </div>

              <div className='text-center shadow-lg p-10 rounded-xl my-10'>
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
            <h3 className='text-3xl py-2'>Portfolio</h3>
            <p className='text-md py-5 leading-8 text-gray-800'>Since the beginning of my journey as a developer,
              i've done remote work for <span className='text-teal-500'>agencies</span>
              consulted for <span className='text-teal-500'>startups</span> and collaborated with talented 
              people to create digital products for both business and consumer use.
            </p>
            <p className='text-md py-2 leading-8 text-gray-800'>
              I offer from a wide range of services, including programming and teaching.
            </p>
          </div>
          <div>
            <div>
              <Image src={web1}></Image>
            </div>
            <div>
              <Image src={web2}></Image>
            </div>
            <div>
              <Image src={web3}></Image>
            </div>
            <div>
              <Image src={web4}></Image>
            </div>
            <div>
              <Image src={web5}></Image>
            </div>
            <div>
              <Image src={web6}></Image>
            </div>
          </div>
        </section>

      </main>
    </div>
  )
}
