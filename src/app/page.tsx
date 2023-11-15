import Navbar from './layouts/navbar'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Home() {
  return (
    <div className="bg-white">
      <div>
        <Navbar />
        <div className="flex flex-col">
          <div className="bg-white shadow-lg my-20 max-w-md mx-auto rounded-full px-12 py-4">
            Our Socials --{'>'}
            <InstagramIcon className="mx-2 ml-6" />
            <LinkedInIcon className="mx-2" />
          </div>
          <main className='flex justify-center py-8 mb-40 px-8 sm:px-2'>
            <div className="text-center">
              <p className="text-3xl md:text-3xl lg:text-4xl font-bold max-w-screen-md leading-normal">
                We Help Businesses<span className="text-cyan-500"></span> Generate
                Valuable Traffic
              </p>
              <p className="py-4 max-w-lg text-stone-500 text-center justify-center mx-auto">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae odio assumenda rerum aperiam explicabo fuga?  
              </p> 
              <button className="bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-8 rounded mt-8 text-xl rounded-full">
                Start now
              </button>
            </div>
          </main>
        </div>
        <main className="bg-white py-8 pb-32">
          <div className="max-w-screen-lg flex justify-center mx-auto items-center gap-48">
            <div className="px-8 sm:px-2">
              <div className="font-bold text-slate-700 text-3xl">
                Technology and branding
              </div>
              <div className="pt-4 text-stone-500 max-w-md">
                Think of us as an integral part of your team, skilled in both software development & 
                shaping digital marketing strategies plus execution, all under one-roof.
              </div>
            </div>
            <img src="/assets/images/phone.png" alt="test" className='w-64 hidden lg:block'/>
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
