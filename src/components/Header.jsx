// REACT HOOKS
import { useEffect } from "react";

// REACT ROUTER HOOKS
import { Link } from "react-router-dom";

// FROM ASSETS
import Logo from "../assets/images/Medicine.svg";

// ICONS
import { AiOutlineSearch } from "react-icons/ai";

// COMPONENTS
import Cart from "./Cart";
import User from "./User";

const Header = () => {
  return (
    <header className="header">
      <div className="scontainer flex">
        <div className="logo">
          <Link to={"/"}>
            <img src={Logo} alt="Logo" />
          </Link>
        </div>
        <div className="search flex">
          <AiOutlineSearch className="searchIcon" />
          <input type="text" placeholder="Search ..." />
        </div>
        <div className="account flexCenter">
          <Cart />
          <User />
        </div>
      </div>
    </header>
  );
};

export default Header;
