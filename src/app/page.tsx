"use client"
import React, {Suspense} from 'react'
import Navbar from './layouts/navbar'
import styles from '../app/styles/home.module.css';
import { Socials } from './components/socials';
import { Reveal } from './components/reveal';
import { Footer } from './layouts/footer';
import { useRouter } from "next/navigation";
import TetrisLoader from './components/loading';
import { NeedHelp } from './components/need-help';
import { useAnimation, useInView, motion } from "framer-motion";
import AnimatedText from './components/animated-text';
import SpeechBubble from './components/speech-bubble';

export default function Home() {

  const [timer, setTimer] = React.useState(true);

  const [tetrisLoaded, setTetrisLoaded] = React.useState<any>(null);

  const setLoaderSession = async () => {
    let isTetrisLoaded = await sessionStorage.getItem("tetrisIsLoaded");
    
    if(!tetrisLoaded) {
      await sessionStorage.setItem("tetrisIsLoaded", "true");
    } else {
      setTetrisLoaded(null);
      await sessionStorage.removeItem("tetrisIsLoaded");
    }
    await setTetrisLoaded(isTetrisLoaded);
  }

  React.useEffect(() => {
    setTimeout(() => {
      setTimer(false)
    }, 3500)
    setLoaderSession();

  }, [])

  return (
      // <Suspense fallback={<TetrisLoader />}>
      //   <Content />
      // </Suspense>
      <>
      { timer && !tetrisLoaded ? <TetrisLoader /> : <Content /> }
      </>
  )
}


const Content = () => {

  return (
    <div className="bg-white">
    <div>
      <Navbar />
      <div className="relative flex flex-col">
        {/* <Socials /> */}
        <main className='flex justify-center py-4 mb-[260px] mt-32 px-8 sm:px-2'>
          <div className="text-center">
              <p className="text-3xl md:text-3xl lg:text-6xl font-bold max-w-screen-md lg:leading-tight">
                <AnimatedText text="We Bring Your Precious Business Online" />
              </p>
              <Reveal>
                <p className="pt-6 pb-4 text-stone-500 text-center justify-center mx-auto">
                  Design? Code? No-Code? We got you!
                </p> 
              </Reveal>
            <Reveal>
              <div className="flex my-8 justify-center gap-6">
                <button className={`${styles.glowingBtn} bg-primary hover:bg-cyan-700 text-white font-bold py-2 px-8 rounded text-lg rounded-full`}>
                  Start now
                </button>
                {/* <button className={`bg-white border-2 border-primary text-primary font-semibold py-2 px-8 rounded text-lg rounded-full`}>
                  Contact us
                </button> */}
              </div>
            </Reveal>
          </div>
        </main>
        <div className="absolute left-0 right-0 bottom-[-40%] max-w-[1600px] mx-auto">
          <div className="absolute right-[18%] top-0 flex gap-6">
            <div className="bg-white border-secondary border-2 mt-2 text-secondary rounded-full p-4 w-12 h-12 font-bold text-xl flex justify-center items-center top-4">
                1
            </div>
            <div className="bg-secondary shadow-lg rounded-2xl w-full max-w-[350px] p-4 mb-2">
              <div className="text-xl font-medium text-white">Affordable</div>
              {/* <div className="text-3xl text-accent font-semibold pt-2">Design + code</div> */}
              <div className="text-sm text-stone-200 mt-2">Will be made available with full transparency</div>
            </div>
          </div>
          <div className="absolute right-[18%] top-28 flex gap-6">
            <div className="bg-white border-secondary border-2 mt-2 text-secondary rounded-full p-4 w-12 h-12 font-bold text-xl flex justify-center items-center top-4">
                2
            </div>
            <div className="bg-secondary shadow-lg rounded-2xl w-full max-w-[350px] p-4 mb-2">
              <div className="text-xl font-medium text-white">Quick turnaround</div>
              {/* <div className="text-3xl text-accent font-semibold pt-2">Design + code</div> */}
              <div className="text-sm text-stone-200 mt-2">Will be made available with full transparency</div>
            </div>
          </div>
          <div className="absolute right-[16%] top-64 flex gap-6">
            <div className="bg-white shadow-lg rounded-2xl w-full max-w-[350px] p-4 mb-2">
              <div className="text-xl font-medium">Have ownership</div>
              {/* <div className="text-3xl text-primary font-semibold pt-2">1x, 2x+ Projects</div> */}
              <div className="text-sm text-stone-500 mt-2">Will be made available with full transparency</div>
            </div>
            <div className="bg-secondary border-white border-2 mt-2 text-white rounded-full p-4 w-12 h-12 font-bold text-xl flex justify-center items-center top-4">
                3
            </div>
          </div>
          <div className="absolute right-[16%] bottom-16 flex gap-6">
            <div className="bg-white shadow-lg rounded-2xl w-full max-w-[350px] p-4 mb-2">
              <div className="text-xl font-medium">Long term, scalable</div>
              {/* <div className="text-3xl text-primary font-semibold pt-2">1x, 2x+ Projects</div> */}
              <div className="text-sm text-stone-500 mt-2">Flexible relationship duration</div>
            </div>
            <div className="bg-secondary border-white border-2 mt-2 text-white rounded-full p-4 w-12 h-12 font-bold text-xl flex justify-center items-center top-4">
                4
            </div>
          </div>
          <motion.div
            className="box"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
            duration: 1.6,
            delay: 0.5,
            ease: [0.16, 1, 0.3, 1],
          }}>
            <img src="/assets/images/laptop-nihao.png" alt="" className='max-w-[900px] ml-12' />
          </motion.div>
        </div>
      </div>
      <main className="bg-secondary py-32 pt-[280px] z-10">
      </main>
      <main className="bg-black py-20 mb-32 z-10">
        <div className="max-w-screen-xl mx-auto">
          <div className="font-bold text-white text-3xl text-center lg:text-6xl lg:leading-tight">
            Take Advantage of Digitalization
            <div className="mt-2 w-[150px] h-[4px] bg-accent mx-auto"></div>
          </div>
          <div className="flex items-center max-w-[900px] mx-auto mt-16 gap-12">
            <img src="/assets/images/pie-chart-2-1.png" alt="" className="mx-auto max-w-[250px]"/>
            <div className="text-stone-200">
              <div className="text-white text-3xl font-semibold pb-4">50% of businesses are online</div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam provident repellendus alias doloremque 
              aspernatur distinctio sapiente sed, debitis consequuntur qui!
            </div>
          </div>
          <div className="flex items-center max-w-[800px] mx-auto mt-16 gap-12">
            <div className="text-stone-200">
              <div className="text-white text-3xl font-semibold pb-4">50% of businesses are online</div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam provident repellendus alias doloremque 
              aspernatur distinctio sapiente sed, debitis consequuntur qui!
            </div>
            <img src="/assets/images/pie-chart-2-2.png" alt="" className="mx-auto max-w-[250px]"/>
          </div>

        </div>
      </main>
        {/* <div className="max-w-screen-lg flex flex-col justify-center mx-auto items-center md:lg:gap-30 md:lg:flex-row">
          <div className="px-8">
            <Reveal>
              <div className="font-bold text-white text-3xl lg:text-6xl lg:leading-tight">
              Take Advantage of Digitalization
                <hr className="w-[15%] border-2 border-accent mt-4" />
              </div>
            </Reveal>
            <Reveal>
            <div className="pt-8 text-[#F5F5F5] max-w-md text-lg">
              Get your share of the shifting digital economy PIE. Generate traffic by being involved in 
              technological advancements, start with creating your online presence.
            </div>
            </Reveal>
          </div>
          <Reveal>
            <img src="/assets/images/phone.png" alt="test" className='w-96 pt-40'/>
          </Reveal>
        </div> */}


      <Footer />
      {/* <NeedHelp /> */}
    </div>
  </div>
  )
}