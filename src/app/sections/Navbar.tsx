"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { navLinks } from "../constants";

const NavBarItem = ({onClick=()=>{}}) => {
  return (
    <ul className="nav-ul">
      {navLinks.map(({ id, name, href }) => (
        <Link key={id} onClick={onClick} href={href}>
          <li className="nav-li" >
            {name}
          </li>
        </Link>
      ))}
    </ul>
  );
};
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleIsOpen = () => setIsOpen((prev) => !prev);
  const closeMenu=()=>setIsOpen(false);
  return (
    <header className="fixed top-0 right-0 left-0 z-20 bg-black/90">
      <div className="max-w-7xl mt-5">
        <div className="flex items-center justify-between c-space ">
          <Link
            href="/"
            className=" text-neutral-300 font-semibold text-xl hover:text-white"
          >
            Hafid
          </Link>
          <button onClick={toggleIsOpen}>
            <Image
              height={10}
              width={10}
              alt="toggle"
              src={isOpen ? "/assets/close.svg" : "/assets/menu.svg"}
              className="sm:hidden flex  h-6 w-6 text-neutral-300  hover:text-white"
            />
          </button>
          <nav className="sm:flex hidden ">
            <NavBarItem onClick={()=>{}} />
          </nav>
        </div>
      </div>
      <nav className={`  nav-sidebar ${isOpen?'max-h-screen':'max-h-0'} `}>
        <NavBarItem onClick={closeMenu}/>
      </nav>
    </header>
  );
};

export default Navbar;
