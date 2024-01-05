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
import { BlogCard } from './components/blog-card';
import { ArticlesList } from './static/article-list';

export default function Projects() {

  // const refHTML = useRef<HTMLElement>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();
  const articles = ArticlesList;


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
                    <div className="font-bold pl-4 pt-4 text-3xl md:text-3xl lg:text-4xl text-center font-bold">Featured blogs
                    <hr style={{
                        border: "2px solid cyan",
                        textAlign: "center",
                        width: '10%',
                        margin: '0px auto'
                      }}></hr>
                    </div>
                  </Reveal>
            </main>
            
            <main className="max-w-6xl my-16 mx-auto flex flex-wrap justify-center align-center gap-8 p-4">
              {
                articles && articles.map((x) => {
                  return (
                    <BlogCard data={x}/>
                  )
                })
              }
            </main>

          <Footer />
        </div>
      </div>
    )
}