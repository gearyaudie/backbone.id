"use client";
import { Reveal } from '@/app/components/reveal';
import Navbar from '../../app/layouts/navbar';
import '../../globals.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { motion, useAnimation, useInView } from "framer-motion"
import { useScroll } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { Socials } from '@/app/components/socials';
import { Footer } from '@/app/layouts/footer';
import { NeedHelp } from '@/app/components/need-help';

export default function Projects() {

  // const refHTML = useRef<HTMLElement>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();


  useEffect(() => {
    if(isInView) {
      mainControls.start("visible");
      console.log("fire")
    }
  }, [isInView])

  // const { scrollYProgress } = useScroll({
  //   target: refHTML,
  //   offset: ["0 1", "1.33 1"]
  // })

    return (
      <div className="bg-white">
        <div>
          <Navbar />
          <div className="flex flex-col">
            <Socials />
          </div>

            <main className="max-w-6xl mx-auto px-4 bg-white">
                  <Reveal>
                    <div className="font-bold pl-4 pt-4 text-3xl md:text-3xl lg:text-4xl text-center font-bold">Featured projects
                    <hr style={{
                      border: "2px solid cyan",
                      textAlign: "center",
                      width: '10%',
                      margin: '0px auto'
                    }}></hr>
                    </div>
                  </Reveal>
                  <Reveal>
                    <p className="py-4 max-w-lg text-stone-500 text-center justify-center mx-auto pb-16">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae odio assumenda rerum aperiam explicabo fuga?  
                    </p> 
                  </Reveal>
                  <Reveal>
                    <div className="flex flex-wrap px-4 gap-0 justify-between relative">
                        <div className="relative">
                            <img src="/assets/images/afloor.png" alt="" style={{width: 580}} />
                        </div>
                        <div className="flex flex-col text-right justify-between">
                            <div className="bg-white shadow-xl right-2 left-2 max-w-xl px-8 py-8 text-stone-500 z-0 md:lg:absolute md:lg:mt-12 md:lg:left-auto">
                                <p className="text-xl font-bold pb-4 text-black underline decoration-4 underline-offset-8 
                                decoration-cyan-500">Furniture Listing AFloor</p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat minus adipisci id assumenda reprehenderit commodi, illum laboriosam sit in eveniet.
                                <div className="text-stone-500 pt-8">
                                    VS Code    React JS     Next JS    Netlify
                                </div>
                            </div>
                        </div>
                    </div>
                  </Reveal>
                  <Reveal>
                    <div className="flex flex-wrap px-4 py-12 gap-0 justify-between relative">
                        <div className="order-last md:lg:order-first">
                            <div className="flex flex-col text-right justify-between">
                                <div className="bg-white shadow-xl right-2 left-2 max-w-xl px-8 py-8 text-stone-500 z-0 md:lg:absolute md:lg:mt-12">
                                    <p className="text-xl font-bold pb-4 text-black underline decoration-4 underline-offset-8 decoration-cyan-500">
                                      MPX &quot;Motorcycle spareparts&quot; company
                                    </p>
                                      Full stack app. Listing page, UI/UX, and Crud API.
                                    <div className="text-stone-500 pt-8">
                                        VS Code    React JS     Next JS    Netlify    GoLang    Heroku    MongoDB
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <img src="/assets/images/mpx.PNG" alt="" style={{width: 580}} />
                        </div>
                    </div>
                  </Reveal>
            </main>

          <Reveal>
            <div className="max-w-screen-xl mx-auto px-4 py-20 pb-40 bg-white text-center">
                  <div className="font-bold pb-8 text-3xl text-slate-700 text-center mx-auto">More projects
                    <hr style={{
                      border: "2px solid cyan",
                      textAlign: "center",
                      width: '10%',
                      margin: '0px auto'
                    }}></hr>
                  </div>
                  <div className="flex flex-wrap px-4 gap-4 justify-center">
                      <div>
                          <img src="https://placehold.co/300x150" alt="" />
                      </div>
                      <div>
                          <img src="https://placehold.co/300x150" alt="" />
                      </div>
                      <div>
                          <img src="https://placehold.co/300x150" alt="" />
                      </div>
                      <div>
                          <img src="https://placehold.co/300x150" alt="" />
                      </div>
                      <div>
                          <img src="https://placehold.co/300x150" alt="" />
                      </div>
                      <div>
                          <img src="https://placehold.co/300x150" alt="" />
                      </div>
                  </div>
            </div>
          </Reveal>
          <Footer />
          <NeedHelp />
        </div>
      </div>
    )
}