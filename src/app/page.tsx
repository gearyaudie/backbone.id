"use client"
import React, {Suspense} from 'react'
import Navbar from './layouts/navbar'
import styles from '../app/styles/home.module.css';
import { Socials } from './components/socials';
import { Inter } from "@next/font/google";
import { Reveal } from './components/reveal';
import { Footer } from './layouts/footer';
import { useRouter } from "next/navigation";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import TetrisLoader from './components/loading';
import { NeedHelp } from './components/need-help';
import { useAnimation, useInView, motion } from "framer-motion";
import AnimatedText from './components/animated-text';
import SpeechBubble from './components/speech-bubble';
import FAQComponent from './components/faq';
import { RevealAbsolute } from './components/reveal-absolute';
import LaptopProjects from './components/laptop-projects';

const regularFont = Inter
({
  variable: "--regular-font",
  weight: ["400", "600", "800"] ,
  preload: false,
});

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
  const items = [
    {
      title: 'Can I get a refund?',
      content: (
        <>
          <p>Yes you can get a 50% refund on the total amount given that you requested it within 7 days of Work In Progress.</p>
        </>
      ),
    },
    {
      title: 'Is this a scam?',
      content: (
        <>
          <p>No.</p>
        </>
      ),
    },
    // Add more items as needed
  ];

  const openLink = (url: string) => { 
    window.open(url, "_blank");
  }

  const images = [
    '/assets/images/nihao-laptop.webp',
    '/assets/images/mpx-laptop.webp',
    '/assets/images/afloor-laptop.webp',
    '/assets/images/el-laptop.webp',
    // Add more image URLs as needed
  ];

  return (
    <div className={`${regularFont.variable} bg-white`}>
      <div>
        <Navbar />
        <div className="relative flex flex-col" style={{
          backgroundColor: "#ffffff",
        }}>
          {/* <Socials /> */}
          <main className='flex justify-center py-4 lg:mb-[280px] mt-32 px-2 md:px-8'>
            <div className="text-center">
                <div className="rounded-2xl border-primary border-2 text-primary w-fit mx-auto px-4 mb-4 cursor-pointer md:mb-0">
                  <a href="#features">
                    New: Check Our Latest Features!
                  </a>
                </div>
                <p className="text-3xl font-regular lg:text-6xl pt-4 px-10 font-semibold max-w-screen-md lg:leading-tight">
                  <AnimatedText text="We Bring Your Precious Business Online" />
                </p>
                <p className="pt-4 text-[#807e7e] font-semibold text-center justify-center mx-auto">
                  Design? Code? No-Code? We got you!
                </p> 
                <div className="flex mt-12 mb-4 justify-center gap-6">
                  <button className={`bg-white border-2 border-primary text-primary font-semibold py-2 px-8 rounded text-lg rounded-full`}>
                    Contact us
                  </button>
                  <button className={`${styles.glowingBtn} bg-primary hover:bg-cyan-700 text-white font-bold py-2 px-8 rounded text-lg rounded-full`}
                    onClick={() => openLink('https://wa.link/wnzkgo')}
                  >
                    Start now
                  </button>
                </div>
     
            </div>
          </main>
          <div className="relative left-0 right-0 bottom-[-40%] max-w-[1600px] mx-auto flex justify-center items-end pb-20 lg:pb-0 lg:absolute">
            <motion.div
              className="box"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
              duration: 1.6,
              delay: 0.5,
              ease: [0.16, 1, 0.3, 1],
            }}>
              <LaptopProjects images={images} />
              <img src="/assets/images/laptop.webp" alt="" className="absolute w-full max-w-[1000px] top-0 h-auto px-8 z-100" />
            </motion.div>
          </div>
        </div>
        <main className="bg-secondary py-2 lg:py-32 lg:pt-[360px]">
          <div className="max-w-[1200px] mx-auto flex gap-6 mt-24 px-10" id="features">
            <div className="flex-[2.5] flex-col">
              <div className="relative bg-[#02303A] border-2 border-[#034C59] text-[#E0FFFF] h-fit pl-8 pt-4 pb-44 rounded-xl overflow-hidden">
                <div className="text-2xl font-semibold py-2 text-[#E0FFFF]">Affordability</div>
                    Pricing that makes sense! No corners cut. <br />Get your money&apos;s worth with your desired package.
                    <div className="absolute bottom-0 right-0 left-10 bg-white w-full">
                      <Reveal>
                        <div className="flex px-4 py-4 items-center">
                          <div className="bg-[#f2f2f2] p-2 pr-0 rounded-lg flex justify-center items-center ml-4">
                            <ArrowBackIosIcon className="text-black"/>
                          </div>
                          <div className="text-black pl-4 text-lg font-medium">Pricing Details</div>
                        </div>
                        <hr className="px-2 max-w-[90%] mx-auto" />
                        <div className="text-black px-8 pt-4 pb-8">
                            Coming soon..
                        </div>
                      </Reveal>
                    </div>
              </div>
              <div className="flex gap-4 pt-4 h-fit flex-wrap">
                <div className="bg-[#02303A] border-2 border-[#045A68] text-[#AFEEEE] p-4 px-6 rounded-xl flex-1">
                    <div className="text-2xl font-semibold py-2 text-[#E0FFFF]">Long term, scalable</div>
                    Have a multiple time deal, <br />
                    Have a one time deal
                    <Reveal>
                      <div className="flex justify-end pt-10">
                          {/* <img src="/assets/images/snorlax.png" alt="" className="max-w-[180px] w-fit h-full" /> */}
                      </div>
                    </Reveal>
                </div>
                <div className="bg-[#02303A] border-2 border-[#045A68] text-[#AFEEEE] p-4 px-6 rounded-xl flex-1">
                    <div className="text-2xl font-semibold py-2 text-[#E0FFFF]">Quick turnaround</div>
                      Get it done asap. <br />
                      Per project requirements.
                      <Reveal>
                        <div className="pt-16 text-right">
                              <span className="font-semibold text-4xl">2 weeks</span> on average
                        </div>
                      </Reveal>
                </div>
            </div>
            </div>
            <div className="hidden relative bg-[#02303A] border-2 border-[#045A68] text-[#AFEEEE] flex-1 rounded-xl overflow-hidden
              md:block
            ">
              <div className="text-2xl font-semibold py-2 text-[#E0FFFF] p-4 px-6 pt-6">Have ownership</div>
              <div className="px-6">Your product is fully yours.</div>
              <div className="px-6">Source code, figma links.</div>
              <hr className="border border-[#045A68] mt-8"/>
              <RevealAbsolute>
                <img src="/assets/images/figma-test.png" alt="" className="absolute object-cover w-full h-full" />
              </RevealAbsolute>
            </div>
          </div>
        </main>
        <main className="bg-white max-w-[1200px] mx-auto py-32 px-20"> 
            <div className="flex gap-16 justify-center items-center flex-col md:flex-row">
              <div className="flex-1">
                <img src="/assets/images/deployments.png" alt="" className="w-full shadow-xl max-w-[475px]" />
              </div>
              <div className="max-w-[475px] flex-1 font-regular">
                <div className="font-bold text-3xl">Grasp your user base and enhance your business</div>
                <div className="text-stone-700 text-lg pt-4">
                  Let&apos;s be real here, we don&apos;t always follow up with existing users. This is made possible
                  with a database of users on your hands, this will open up the window for new marketing opportunities .
                </div>
                <div></div>
              </div>
            </div>
        </main>
        <main className="bg-black py-20 mb-32 z-10">
          <div className="max-w-screen-xl mx-auto">
            <div className="text-neutral-light text-lg text-center pb-2">TRENDS</div>
            <div className="font-semibold text-white text-2xl text-center px-8 lg:text-5xl lg:leading-tight">
              <AnimatedText text="Take Advantage of Digitalization" />
              {/* <div className="mt-2 w-[150px] h-[4px] bg-accent mx-auto"></div> */}
            </div>
            <div className="flex mt-16 mb-10 gap-10 justify-center items-center h-full flex-col md:flex-row">
              <div className="shadow-lg bg-[#02303A] text-[#AFEEEE] rounded-xl max-w-[300px] h-full">
                  <img src="/assets/images/pie-chart-2-1.png" alt="" className="mx-auto max-w-[250px] pt-8"/>
                  <div className="px-8 py-8">
                    <div className=" text-2xl font-semibold pb-4 text-[#E0FFFF]">50% of businesses are online</div>
                    Half of all businesses have embraced the online realm, marking a pivotal shift in today&apos;s marketplace dynamics.
                  </div>
              </div>
              <div className="shadow-lg bg-[#02303A] text-[#AFEEEE] rounded-xl max-w-[300px]">
                  <img src="/assets/images/pie-chart-2-2.png" alt="" className="mx-auto max-w-[250px] pt-8"/>
                  <div className="px-8 py-8">
                    <div className=" text-2xl font-semibold pb-4 text-[#E0FFFF]">80% form brand impressions from websites</div>
                    Your brand&apos;s digital storefront—the website—molds crucial first impressions.
                  </div>
              </div>
            </div>
          </div>
        </main>
        <main className="bg-white max-w-[900px] mx-auto mb-32 text-center" id="FAQ">
          <div className="font-bold text-4xl pb-12"><AnimatedText text="FAQs" /></div>
          <Reveal>
            <FAQComponent items={items}/>
          </Reveal>
        </main>
        <Footer />
        {/* <NeedHelp /> */}
      </div>
    </div>
  )
}