import { Reveal } from "../components/reveal"

export const Footer = () => {
    return (
        <main className="bg-white my-48">
        <div className="max-w-screen-lg mx-auto">
          <section className="bg-neutral-dark text-white px-12 py-12 rounded-xl flex justify-between items-center gap-10">        
                <div className="flex flex-col flex-1 text-[#A0B2B4]">
                  <div className="text-5xl font-bold pb-4 leading-tight">
                    Unlock your digital potential now
                  </div>
                  <div className="text-[#C9C9C9]">
                    Experience digital transformation firsthand. Explore tailored solutions to elevate your online impact."
                  </div>
                  <div className="bg-[#A0B2B4] text-white rounded-2xl py-2 px-6 mt-4 w-fit font-lg font-semibold cursor-pointer">
                    Start now
                  </div>
                </div>
                <img src="/assets/images/footer-marketing.jpg" alt="" className="hidden max-w-[435px] rounded-2xl flex-1 md:block"/>
          </section>
        </div>
        <Reveal>                
          <footer className="px-16 pt-24 pb-16 mt-20 max-w-screen-lg mx-auto">
            <div className="flex pb-16 sm:justify-start justify-center">
              <div className="font-bold mr-16">
                Home
              </div>
              <div className="font-bold">
                Projects
              </div>
            </div>
            <hr className="py-8"/>
            <div className="flex sm:justify-center items-center md:lg:justify-between flex-col md:lg:flex-row">
              <div className="text-slate-700 font-bold text-xl">
                backbones.id
              </div>
              <div>
                @backbones.id 2023
              </div>
            </div>
          </footer>
        </Reveal>
      </main>
    )
}