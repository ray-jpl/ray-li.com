import React from "react";
import Link from 'next/link';
import { siteTitle } from "./Layout";

const Navbar: React.FC = () => {
  return (
    <nav className="w-full px-4 my-2 flex flex-row justify-between">
      <div className="p-2 mx-1 rounded-lg hover:bg-skin-fillDark text-xl font-bold hover:text-skin-accent">
        <Link href="/">{siteTitle}</Link>
      </div>

      <div className="flex margin-0">
        <Link href="/projects"><a className="p-2 mx-1 rounded-lg hover:bg-skin-fillDark hover:text-skin-accent">Projects</a></Link>
        <Link href="/blog"><a className="p-2 mx-1 rounded-lg hover:bg-skin-fillDark hover:text-skin-accent">Blog</a></Link>
        <Link href="/#contact"><a className="p-2 mx-1 rounded-lg hover:bg-skin-fillDark hover:text-skin-accent">Contact</a></Link>
      </div>

      <div>
        <div className="p-2 mx-1 rounded-lg hover:bg-skin-fillDark">
          THEMES
        </div>
      </div>
    </nav>

  )
}

export default Navbar