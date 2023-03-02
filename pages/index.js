import Head from 'next/head'

import {BsFillMoonStarsFill} from 'react-icons/bs'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ricardo Amorim Portfolio</title>
        <link rel='icon' href='/favicon.ico'></link>
      </Head>
      <main className='bg-white px-10'>
        <section className='h-screen'>
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl'>Ricardo Amorim</h1>
            <ul className='flex items-center'>
              <li className='cursor-pointer text-2xl'><BsFillMoonStarsFill/></li>
              <li><a href='#' className='bg-cyan-500 text-white px-4 py-2 rounded-md ml-8'>Resume</a></li>
            </ul>
          </nav>
        </section>
      </main>
    </div>
  )
}
