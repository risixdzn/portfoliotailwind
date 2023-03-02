import Head from 'next/head'

import {BsFillMoonStarsFill} from 'react-icons/bs'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ricardo Amorim Portfolio</title>
        <link rel='icon' href='/favicon.ico'></link>
      </Head>
      <main>
        <section className='bg-blue-700 h-screen'>
          <nav>
            <h1>RicardoAmorim</h1>
            <ul>
              <li><BsFillMoonStarsFill/></li>
              <li><a href='#'>Resume</a></li>
            </ul>
          </nav>
        </section>
      </main>
    </div>
  )
}
