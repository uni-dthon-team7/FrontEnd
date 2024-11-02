import React from "react";
import homeIcon from "../assets/home.svg";
import searchIcon from "../assets/search.svg";
import bookmarkIcon from "../assets/bookmark.svg";

const NavBar = () => {
  return (
    <nav className="navbar absolute bottom-0 h-14 w-full bg-[#5D5D5D] flex justify-center left-0 right-0">
      <div className="flex items-center justify-around w-full">
        <img src={searchIcon} alt="search" className="w-5 h-5" />
        <img src={homeIcon} alt="home" className="w-5 h-5" />
        <img src={bookmarkIcon} alt="bookmark" className="w-5 h-5" />
      </div>
    </nav>
  );
};

export default NavBar;
