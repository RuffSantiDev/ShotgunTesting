import React from "react";
import { HeaderMenu } from "./HeaderMenu";

import '../../css/Header.css';

export const Header = () => {
  
  return (
    <header className="Header">
      <h1>SHOTGUN</h1>
      <HeaderMenu />
      {/* <p>The ultimate drinking game!</p> */}
    </header>
  )
}



