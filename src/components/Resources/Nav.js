import React, { useRef, useEffect } from "react";
import "./Nav.css";

import { NavLink } from "react-router-dom";
import 'remixicon/fonts/remixicon.css'


const Nav = (props) => {

  const headerRef = useRef(null);

  const menuRef = useRef(null);

  let bg;
  if (props.bg === null || props.bg === undefined) {
    bg = "#0b4a91"
  } else {
    bg = props.bg
  }

  let ff;
  if (props.font === null || props.font === undefined) {
    ff = "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif"
  } else {
    ff = props.font
  }

  let ITEMS;
  if (props.nav === null || props.nav === undefined) {
    ITEMS = [{
        display: "Empty",
        url: "/1",
    },
    {
        display: "List",
        url: "/2",
    },
    {
        display: "Failed",
        url: "/3",
    },
    {
        display: "Props",
        url: "/4",
    },
    ]
  } else {
    ITEMS = props.nav
  }


  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("header__shrink");
      } else {
        headerRef.current.classList.remove("header__shrink");
      }
    });

    return () => {
      window.removeEventListener("scroll", null);
    };
  }, []);

  const toggleMenu = () => menuRef.current.classList.toggle("active__menu");


  return (
    <header style={{background: bg}} className="header" ref={headerRef}>
        <div className="navigation">

          <div className="nav__menu" ref={menuRef} onClick={toggleMenu}>
            <ul className="nav__list">
              {ITEMS.map((item, index) => (
                <li className="nav__item" key={index} style={{fontFamily:ff}}>
                  <NavLink
                    to={item.url}
                    className={(navClass) =>
                      navClass.isActive ? "active" : ""
                    }
                  >
                    {item.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="nav__right d-flex align-items-center gap-5 ">
            <span className="mobile__menu">
              <i className="ri-menu-line" onClick={toggleMenu}></i>
            </span>
          </div>
        </div>

    </header>
  );
};

export default Nav;