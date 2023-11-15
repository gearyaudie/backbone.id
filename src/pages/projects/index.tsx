
import Navbar from '../../app/layouts/navbar';
import '../../globals.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Projects() {
    return (
      <div className="bg-white">
        <div>
          <Navbar />
          <div className="flex flex-col">
            <div className="bg-white shadow-lg my-12 mt-24 max-w-md mx-auto rounded-full px-12 py-4">
              Our Socials --{'>'}
              <InstagramIcon className="mx-2 ml-6" />
              <LinkedInIcon className="mx-2" />
            </div>
          </div>

          <main className="max-w-5xl mx-auto px-4 bg-white">
                <p className="font-bold pl-4 pb-8 text-3xl text-slate-700">Notable projects</p>
                <div className="flex flex-wrap px-4 gap-4 justify-between relative">
                    <div className="relative">
                        <img src="/assets/images/afloor.png" alt="" style={{width: 580}} />
                        <div className="block md:hidden lg:hidden absolute top-0 text-white bg-black/75 h-full
                          px-4 py-8
                        ">
                            <p className="text-xl font-bold pb-4 text-white underline decoration-4 underline-offset-8 
                                decoration-cyan-500">Furniture Listing AFloor</p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat minus adipisci id assumenda reprehenderit commodi, illum laboriosam sit in eveniet.
                          <div className="text-stone-500 pt-8">
                              VS Code    React JS     Next JS    Netlify
                          </div>
                        </div>
                    </div>
                    <div className="hidden md:block lg:block">
                        <div className="flex flex-col text-right justify-between">
                            <div className="bg-white shadow-xl absolute right-2 mt-8 max-w-lg px-8 py-8 text-stone-500 z-0">
                                <p className="text-xl font-bold pb-4 text-black underline decoration-4 underline-offset-8 
                                decoration-cyan-500">Furniture Listing AFloor</p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat minus adipisci id assumenda reprehenderit commodi, illum laboriosam sit in eveniet.
                                <div className="text-stone-500 pt-8">
                                    VS Code    React JS     Next JS    Netlify
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap px-4 py-12 gap-4 justify-between relative">
                    <div>
                        <div className="flex flex-col text-right justify-between">
                            <div className="bg-white shadow-xl absolute left-2 mt-20 max-w-md px-8 py-8 text-stone-500 z-0">
                                <p className="text-xl font-bold pb-4 text-black underline decoration-4 underline-offset-8 decoration-cyan-500">
                                  Portofolio Site
                                </p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat minus adipisci id assumenda reprehenderit commodi, illum laboriosam sit in eveniet.
                                <div className="text-stone-500 pt-8">
                                    VS Code    React JS     Next JS    Netlify
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        {/* <img src="https://placehold.co/580x362" alt="" /> */}
                        <img src="/assets/images/portofolio.PNG" alt="" style={{width: 580}} />
                    </div>
                </div>
          </main>

          <main className="max-w-screen-lg mx-auto px-4 py-12 bg-white">
                <p className="font-bold pl-10 pb-8 text-3xl text-slate-700">More projects</p>
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
                </div>
          </main>

          <main className="bg-white">
            <div className="max-w-screen-lg mx-auto">
              <div className="bg-black text-white px-12 py-32 rounded-3xl	">
                <div className="max-w-md">
                  <div className="text-2xl font-bold pb-6">
                    Tell us about your project
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
              </div>
            </div>
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
                  backbone.id
                </div>
                <div>
                  @backbone.id 2023
                </div>
              </div>
            </footer>
          </main>
        </div>
      </div>
    )
}