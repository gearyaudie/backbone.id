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
  // const router = useRouter();
  const pathName = usePathname();

  return (
    <div className="bg-white fixed w-full z-50">
      <div className="flex justify-between items-center max-w-screen-xl mx-auto py-4 px-6 flex-wrap">
        <div className="text-slate-700 font-bold text-xl">
          backbones.id
        </div>
        <div className="hidden lg:block md:block">
          <ul className="flex justify-center bg-white pr-24 text-sm">
            <li 
              className="mr-12 text-slate-700"
            >
              <span className={pathName == "/"  ? "font-bold" : ""}>
                <Link href="/">Home</Link>
              </span>
            </li>
            <li 
              className="mr-12 text-slate-700"
            >
                <Link href="/projects">
                  <span className={pathName == "/projects"  ? "font-bold" : ""}>
                      Projects
                  </span>
                </Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="sm:block lg:hidden md:hidden">
            <MobileDrawer />
          </div>
        </div>
      </div>
    </div>
  )
}
