"use client"
import React, {Suspense} from 'react'
import Navbar from './layouts/navbar'
import styles from '../app/styles/home.module.css';
import { Socials } from './components/socials';
import { Reveal } from './components/reveal';
import { Footer } from './layouts/footer';
import { useRouter } from "next/navigation";
import TetrisLoader from './components/loading';

export default function Home() {

  const [timer, setTimer] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setTimer(false)
    }, 4000)
  }, [])

  return (
      // <Suspense fallback={<TetrisLoader />}>
      //   <Content />
      // </Suspense>
      <>
      { timer ? <TetrisLoader /> : <Content /> }
      </>
  )
}


export const Content = () => {
  return (
    <div className="bg-white">
    <div>
      <Navbar />
      <div className="flex flex-col">
        <Socials />
        <main className='flex justify-center py-8 mb-40 px-8 sm:px-2'>
          <div className="text-center">
            <Reveal>
              <p className="text-3xl md:text-3xl lg:text-6xl font-bold max-w-screen-md lg:leading-tight">
                We Bring Your Precious Business Online
              </p>
              <p className="py-4 max-w-lg text-stone-500 text-center justify-center mx-auto">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae odio assumenda rerum aperiam explicabo fuga?  
              </p> 
            </Reveal>
            <Reveal>
              <button className={`${styles.glowingBtn} bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-3 px-10 rounded mt-8 text-xl rounded-full`}>
                Start now
              </button>
            </Reveal>
          </div>
        </main>
      </div>
      <main className="bg-black py-20 mb-32">
        <div className="max-w-screen-lg flex flex-col justify-center mx-auto items-center md:lg:gap-30 md:lg:flex-row">
          <div className="px-8">
            <Reveal>
              <div className="font-bold text-white text-3xl lg:text-6xl lg:leading-tight">
              Take Advantage of Digitalization
                <hr style={{
                  border: "1px solid cyan",
                  width: "15%"
                }} />
              </div>
            </Reveal>
            <Reveal>
            <div className="pt-8 text-stone-400 max-w-md text-lg">
              Think of us as an integral part of your team, skilled in both software development & 
              shaping digital marketing strategies plus execution, all under one-roof.
            </div>
            </Reveal>
          </div>
          <Reveal>
            <img src="/assets/images/phone.png" alt="test" className='w-96 pt-24 md:lg:pt-0'/>
          </Reveal>
        </div>
      </main>
      <Footer />
    </div>
  </div>
  )
}