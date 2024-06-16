import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import ModeToggle from "./ToggleTheme";

const Header = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  const handleToggle = () => setToggle(!toggle);

  return (
    <header className="flex justify-between px-10 py-2 fixed w-full z-10">
      <a href="/" className="logo text-2xl font-bold ">
        Home
      </a>

      {/* Desktop Nav */}
      <nav className="hidden md:block">
        <ul className="flex items-center">
          <li>
            <ModeToggle />
          </li>
          <li>
            <a href="/portfolio/#contact">Contact</a>
          </li>
        </ul>
      </nav>

      {/* Mobile Nav */}
      <nav
        className={!toggle ? "mobile-nav left-[-100%]" : "mobile-nav left-0"}
      >
        <ul className="flex flex-col">
          <li>
            <a href="/portfolio/#contact">Contact</a>
          </li>
        </ul>
      </nav>

      {/* Toggle button */}
      <button onClick={handleToggle} className="block md:hidden">
        {!toggle ? <AiOutlineMenu size={30} /> : <AiOutlineClose size={30} />}
      </button>
    </header>
  );
};

export default Header;
