import React, { useState } from "react";
import style from "../style/navbar.module.css";
import { MdOutlineMenu } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";

function Navbar() {
  const [menuburger, setMenuburger] = useState(false);
  return (
    <nav className={style.navbar}>
      <div className={style.fullNavbar}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Mission</li>
          <li>Contack</li>
        </ul>
      </div>
      <button className={style.hyburgerBtn} onClick={() => setMenuburger(true)}>
        <MdOutlineMenu />
      </button>
      {menuburger ? 
        <div className={style.hyburgerModal}>
          <p onClick={() => setMenuburger(false)}>
            <IoCloseSharp />
          </p>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Mission</li>
            <li>Contack</li>
          </ul>
        </div>
       : null}
    </nav>
  );
}

export default Navbar;
