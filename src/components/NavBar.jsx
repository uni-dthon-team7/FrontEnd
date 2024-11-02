import React from "react";
import { Link, useLocation } from "react-router-dom";
import HomeIcon from "../assets/HomeIcon";
import SearchIcon from "../assets/SearchIcon";
import BookmarkIcon from "../assets/BookmarkIcon";

const NavBar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <nav className="navbar fixed bottom-0 h-14 w-full flex justify-center left-0 right-0 border-t bg-white">
      <div className="flex items-center justify-around w-full">
        <Link to="/search">
          <SearchIcon
            alt="search"
            className={`w-5 h-5 ${
              currentPath === "/search" ? "text-black" : "text-gray-500"
            }`}
          />
        </Link>
        <Link to="/">
          <HomeIcon
            alt="home"
            className={`w-5 h-5 ${
              currentPath === "/" ? "text-black" : "text-gray-500"
            }`}
          />
        </Link>
        <Link to="/bookmark">
          <BookmarkIcon
            alt="bookmark"
            className={`w-5 h-5 ${
              currentPath === "/bookmark" ? "text-black" : "text-gray-500"
            }`}
          />
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
