import { Reveal } from "../components/reveal"

export const Footer = () => {
    return (
        <main className="bg-white">
        <div className="max-w-screen-lg mx-auto">
          <section
            className="bg-black text-white px-12 py-32 rounded-3xl	">
              <Reveal>            
                <div className="max-w-md">
                  <div className="text-2xl font-bold pb-6">
                    Tell us about your business
                  </div>
                  <hr className="pt-6 pb-6"/>
                  <div>
                    <p>Our office</p>
                    <div className="block justify-between pt-4 min-[500px]:flex">
                      <div>
                        <p className='font-bold'>Coming soon</p>
                        <p>No physical location as of today</p>
                      </div>
                      <div className="pt-6 min-[500px]:pt-0">
                        <p className='font-bold'>Contact me</p>
                        <p>+62 123 123 123</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
          </section>
        </div>
        <Reveal>                
          <footer className="px-16 pt-24 pb-16 max-w-screen-lg mx-auto">
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