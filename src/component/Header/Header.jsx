
import { useState } from "react";
import { Link } from "react-router-dom";
import {FaTimes} from "react-icons/fa"
import {CiMenuFries} from "react-icons/ci"
import context from "react-bootstrap/esm/AccordionContext";

const Header = () => {
  const[click,setClick] = useState(false);

  const handleClick = () =>{
    setClick(!click);
  }
  
  return (
    <>
    
    <nav  className="bg-slate-50">
      <div className="h-10vh flex justify-between z-50 text-black lg:py-5 px-20 py-4">
        <div className="flex itmes-center flex-1">
          <span className="  text-left text-3xl font-bold text-orange-950">RealSpace Groups</span>
        </div>
      <div className="lg:flex md:flex lg: flex-1 items center justify-end font-normal hidden">
      <div className="flex-10">
         <ul className=" py-1  flex gap-12 mr-16 text-[17px] font-medium">
        <Link spy={true} smooth={true} className="hover:text-sky-700" to=""><li>Home</li></Link>
        <Link spy={true} smooth={true} className="hover:text-sky-700" to="about"><li>About</li></Link>
        <Link spy={true} smooth={true} className="hover:text-sky-700" to="projects"><li>Projects</li></Link>
        <Link spy={true} smooth={true} className="hover:text-sky-700" to="contact"><li>Contact</li></Link>
       </ul>

      </div>
      </div>

      </div>
      <div>
        {click && context }
      </div>

      <button className="block sm:hidden transition" onClick={handleClick}>
        {click? <FaTimes/>: <CiMenuFries/>}
      </button>
      </nav>
     
    </>
  );
};

export default Header;