"use client";
import React from 'react';
import { useState } from 'react'
import Image from 'next/image'
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import { MobileDrawer } from './mobileDrawer';
import navbarStyles from '../styles/mobileDrawer.module.scss'
import Link from 'next/link';
import { useRouter } from "next/router";
import { usePathname} from 'next/navigation';

export default function Navbar() {

  const [sidebarOpened, setSidebarOpened] = useState(false);

  const navbarList = [
    {
      title: 'Home',
      path: '/'
    }, 
    {
      title: 'Projects',
      path: '/projects'
    },  
    {
      title: 'FAQ',
      path: '/#FAQ'
    },  
  ]

  const openLink = (url: string) => { 
    window.open(url, "_blank");
  }

  // const router = useRouter();
  const pathName = usePathname();

  return (
    <div className="bg-white/75 backdrop-blur fixed w-full z-50">
      <div className="flex justify-between items-center max-w-screen-xl mx-auto py-4 px-6 flex-wrap">
        <div className="text-slate-700 font-bold text-xl flex items-center">
          <img src="/assets/images/backbones-logo.png" alt="" className="w-8 h-8 mr-2" />
          backbones.id
        </div>
        <div className="hidden lg:block md:block">
          <ul className="flex justify-center items-center text-md mx-auto">
            {
              navbarList && navbarList.map((x, i) => {
                return (
                  <li 
                  className="mr-12 text-[#807e7e] font-medium"
                  key={i}
                  >
                    <span>
                      <Link href={x?.path}>{ x?.title }</Link>
                    </span>
                  </li>
                )
              })
            }
          </ul>
        </div>
        <div>
          <div className="hidden md:block">
            <button className={`bg-primary hover:bg-cyan-700 text-white font-bold py-1 px-4 rounded text-md rounded-lg`}>
              <Link href="/projects">
                  Our work
              </Link>
            </button>
          </div>
          <div className="block md:hidden">
            <MobileDrawer />
          </div>
        </div>
      </div>
    </div>
  )
}
