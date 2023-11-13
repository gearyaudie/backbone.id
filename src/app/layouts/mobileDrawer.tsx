"use client";

import React from "react"
import navbarStyles from '../styles/mobileDrawer.module.scss'
import Link from "next/link";
import DragHandle from '@mui/icons-material/DragHandle';

export function MobileDrawer() {

    const [sidebarOpened, setSidebarOpened] = React.useState(false);


  return (
    <>
      <nav className={navbarStyles.navbar}>
        <div className={`${navbarStyles.container2} ${navbarStyles.flex}`}>
          <nav className={navbarStyles.menuMobile}>
            <DragHandle onClick={() => setSidebarOpened(true)}/>
            <div
              className={
                sidebarOpened
                  ? `${navbarStyles.navSidebar} ${navbarStyles.active}`
                  : navbarStyles.navSidebar
              }
            >
              <button
                className={navbarStyles.closeIcon}
                onClick={() => setSidebarOpened(false)}
              >
                <img
                  src="https://i.ibb.co/Ykxn2Mk/CITYPNG-COM-PNG-Close-X-Logo-White-Icon-736x736.png"
                  alt=""
                />
              </button>
              <div className={navbarStyles.navSidebarContent}>
                <li onClick={() => setSidebarOpened(false)}>
                  <Link href="/">Home</Link>
                </li>
                <li onClick={() => setSidebarOpened(false)}>
                  <Link href="/">Projects</Link>
                </li>
              </div>
            </div>
          </nav>
        </div>
      </nav>
    </>
  )
}

