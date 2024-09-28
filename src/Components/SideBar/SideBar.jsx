import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
function SideBar() {
  return (
    <div
      className="w-[301px] h-screen bg-[#000000]
    pl-[50px]"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/5/56/Spotify_logo_horizontal_black.jpg"
        className="w-[164px] h-[41px] object-contain"
        alt=""
      />
      <nav className="w-full flex justify-center">
        <ul className="w-full flex flex-col justify-center">
          <li to="/" className="text-[#fff]">
            Home
          </li>
          <FaHome className="text-[#fff] relative " />
          <li to="Search" className="text-[#fff]">
            Search
          </li>
          <li className="text-[#fff]">Your Labery</li>
          <li className="text-[#fff]">Create PlayList</li>
          <li to="Like Songs" className="text-[#fff]">
            Like Songs
          </li>
          <li className="text-[#fff]">Your Episodes</li>
        </ul>
      </nav>
      <button>Toggle Dark Mode</button>
    </div>
  );
}

export default SideBar;
