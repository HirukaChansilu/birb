import { useContext } from "react";
import { NavbarContext } from "../../App";

import "./styles.css";

import logo from "./logo.svg";

export default function Navbar() {
  const { theme } = useContext(NavbarContext);

  return (
    <nav className={theme !== "dark" ? "nav-light" : ""}>
      <div className="logo-c">
        <img src={logo} />
        Birb
      </div>
      <a href="/shop">Shop</a>
    </nav>
  );
}
