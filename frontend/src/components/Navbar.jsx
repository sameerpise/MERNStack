import React, {  useState } from "react";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import { data } from "../restApi.json";

const Navbar = () => {
  const [show, setShow] = useState(false);
  // function myFunction() {
  //   var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  //   var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  //   var scrolled = (winScroll / height) * 100;
  //   document.getElementById("myBar").style.width = scrolled + "%";
  //   }
  //   myFunction()
  return (
    <>
    <nav>
      <div className="logo">🚩<h3 className="Logoname">Maharashtriyan</h3></div>
      <div className={show ? "navLinks showmenu" : "navLinks" }>
        <div className="links">
          {data[0].navbarLinks.map((element) => {
            return (
              <Link
                to={element.link}
                key={element.id}
                spy={true}
                smooth={true}
                duration={500}
              >
                {element.title}
              </Link>
            );
          })}
        </div>
        <Link to="heroSection"
          spy={true}
          smooth={true}
          duration={500}
          className="menuBtn Rt"> ⬆Return to Top</Link>
        <Link
          to="menu"
          spy={true}
          smooth={true}
          duration={500}
          className="menuBtn"
        >
         🍔 OUR MENU
        </Link>
      </div>
      <div className="hamburger" onClick={() => setShow(!show)}>
        <GiHamburgerMenu />
      </div>
    
    </nav>
   
    </>
  );
};

export default Navbar;
