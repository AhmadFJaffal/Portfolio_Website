import React, { useState } from "react";
import "./Navbar.css";
import MobileNav from "./MobileNav/MobileNav";
import { Link } from "react-scroll";

function NavBar() {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "./Ahmad-Jaffal-CV.pdf";
    link.setAttribute("download", "Ahmad-Jaffal-CV.pdf"); // Or any other extension
    document.body.appendChild(link);
    link.click();
    link.parentNode.removeChild(link);
  };
  return (
    <>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />

      <nav className="nav-wrapper">
        <div className="nav-content">
          Ahmad Jaffal
          <ul>
            <li>
              <Link
                activeClass="active"
                to="hero"
                smooth
                spy
                offset={-80}
                className="menu-item"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                activeClass="active"
                to="skills"
                smooth
                spy
                offset={-120}
                className="menu-item"
              >
                Skills
              </Link>
            </li>

            <li>
              <Link
                activeClass="active"
                to="work-exp"
                smooth
                spy
                offset={-100}
                className="menu-item"
              >
                Work Experience
              </Link>
            </li>

            <li>
              <Link
                activeClass="active"
                to="contact"
                smooth
                spy
                offset={-100}
                className="menu-item"
              >
                Contact Me
              </Link>
            </li>

            <button className="contact-btn" onClick={downloadCV}>
              Download CV
            </button>
          </ul>
          <button className="menu-btn" onClick={toggleMenu}>
            <span
              className={"material-symbols-outlined"}
              style={{ fontSize: "1.8rem" }}
            >
              {openMenu ? "close" : "menu"}
            </span>
          </button>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
