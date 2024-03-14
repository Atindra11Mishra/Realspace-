
import { useState } from "react";
import { Link } from "react-router-dom";
import {FaTimes} from "react-icons/fa"
import {CiMenuFries} from "react-icons/ci"

const Header = () => {
  const[click,setClick] = useState(false);

  const handleClick = () =>{
    setClick(!click);
  }
  
  return (
    <>
      <nav className="bg-slate-50">
        <div className="flex justify-between items-center px-4 py-2 md:px-10 lg:px-20">
          <span className="text-2xl sm:text-2xl lg:text-4xl font-bold text-orange-950">RealSpace Groups</span>
          <button className="block sm:hidden" onClick={handleClick}>
            {click ? <FaTimes /> : <CiMenuFries />}
          </button>
          <ul className="hidden sm:flex sm:gap-16 px-16 font-semibold text-lg  py-4">
            <li>
              <Link to="" spy={true} smooth={true} className="hover:text-sky-700">
                Home
              </Link>
            </li>
            <li>
              <Link to="about" spy={true} smooth={true} className="hover:text-sky-700">
                About
              </Link>
            </li>
            <li>
              <Link to="projects" spy={true} smooth={true} className="hover:text-sky-700">
                Projects
              </Link>
            </li>
            <li>
              <Link to="contact" spy={true} smooth={true} className="hover:text-sky-700">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className={click ? 'block' : 'hidden'}>
          <ul className="px-4 py-2 text-center sm:hidden">
            <li>
              <Link
                to=""
                spy={true}
                smooth={true}
                onClick={handleClick}
                className="block py-2 hover:text-sky-700"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="about"
                spy={true}
                smooth={true}
                onClick={handleClick}
                className="block py-2 hover:text-sky-700"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                spy={true}
                smooth={true}
                onClick={handleClick}
                className="block py-2 hover:text-sky-700"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                onClick={handleClick}
                className="block py-2 hover:text-sky-700"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;