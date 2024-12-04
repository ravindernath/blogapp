import { useState } from "react";
import Image from "./Image";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-4 text-2xl font-bold">
        <Image src="logo.png" alt="Blog Logo" w={32} h={32} />
        <span>My Blog</span>
      </Link>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <div
          className="cursor-pointer text-4xl"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? "X" : "☰"}
        </div>
        {/* Mobile Link list */}
        <div
          className={`w-full h-screen flex flex-col items-center justify-center gap-8 font-medium text-lg absolute top-16 transition-all ease-in-out ${
            open ? "-right-0" : "-right-[100%]"
          }`}
        >
          <Link to="/" className="">Home</Link>
          <Link to="/" className="">Trending</Link>
          <Link to="/" className="">Most Popular</Link>
          <Link to="/" className="">About</Link>
          <Link to="/login" className="">
            <button className="py-2 px-4 rounded-lg bg-blue-800 text-white">
              Login
            </button>
          </Link>
        </div>
      </div>

      {/* Desktop  Menu */}
      <div className="hidden md:flex items-center gap-8 xl-gap-12 font-medium">
        <Link to="/" className="">Home</Link>
        <Link to="/" className="">Trending</Link>
        <Link to="/" className="">Most Popular</Link>
        <Link to="/" className="">About</Link>
        <Link to="/login" className="">
          <button className="py-2 px-4 rounded-lg bg-blue-800 text-white">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
