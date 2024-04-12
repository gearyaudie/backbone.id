import { Reveal } from "../components/reveal"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import Link from "next/link";

export const Footer = () => {

  const openLink = (url: string) => { 
    window.open(url, "_blank");
  }

    return (
        <main className="bg-white">
        <div className="bg-neutral-dark">
          <section className="max-w-[1200px] mx-auto text-white px-12 py-12 rounded-xl flex justify-between items-center gap-6">        
            <div className="flex flex-col flex-1 text-white max-w-[500px]">
              <div className="text-5xl font-bold pb-4 leading-tight">
                Unlock your digital potential now
              </div>
              <div className="text-[#C9C9C9]">
                Experience digital transformation firsthand. Explore tailored solutions to elevate your online impact.
              </div>
              <div className="bg-[#A0B2B4] text-stone-800 rounded-2xl py-2 px-6 mt-6 w-fit font-lg font-semibold cursor-pointer"
                onClick={() => openLink('https://wa.link/wnzkgo')}
              >
                Start now
              </div>
            </div>
            <img src="/assets/images/footer-marketing.jpg" alt="" className="hidden max-w-[435px] rounded-2xl flex-1 md:block"/>
          </section>
        </div>
        <Reveal>                
          <footer className="px-16 pt-24 pb-16 max-w-[1200px] mx-auto">
            <div className="flex sm:justify-center items-center md:lg:justify-between flex-col md:lg:flex-row">
              <div className="text-center md:text-left">
                <div className="text-slate-700 font-bold text-3xl">
                  backbones.id
                </div>
                <div className="text-stone-700 mt-2 max-w-[300px]">
                  Get to know us, here are some extra contact info for further inquiries.
                </div>
                <div className="flex gap-4 mt-6 justify-center md:justify-start">
                  <div className="bg-stone-800 text-white p-2 rounded-full">
                    <Link href="https://www.linkedin.com/company/98865282/admin/feed/posts/">
                      <LinkedInIcon />
                    </Link>
                  </div>
                  <div className="bg-stone-800 text-white p-2 rounded-full">
                    <Link href="https://www.linkedin.com/company/98865282/admin/feed/posts/">
                      <TwitterIcon />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="mt-12 md:mt-0">
                <div className="text-stone-700 text-lg font-bold mb-4">Contacts</div> 
                <ul>
                  <li><Link href="https://wa.link/wnzkgo">- Direct</Link></li>
                  <li><Link href="mailto:gearyaudie.ga@gmail.com">- Email</Link></li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <div className="text-stone-700 text-lg font-bold mb-4">Links</div> 
                <ul>
                  <li><Link href="/projects">- Projects</Link></li>
                  <li><Link href="#faq">- FAQ</Link></li>
                </ul>
              </div>
            </div>
          </footer>
          <hr />
          <div className="text-center text-stone-500 py-4">
            &copy;2024 backbones.id - All Rights Reserved
          </div>
        </Reveal>
      </main>
    )
}