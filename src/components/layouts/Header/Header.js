"use client";
import { useState } from "react";
import Logo from "./Logo";
import HumburgIcon from "./HumburgIcon";
import NavBar_List from "./NavBar_List";
import MobileView_NavBar from "./MobileView_NavBar";
import SearchBar from "./SearchBar";

const Header = () => {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  const openHandler = () => {
    setMobileMenuVisible(true);
  };

  const closeHandler = () => {
    setMobileMenuVisible(false);
  };

  return (
    <header className="top-0 left-0  right-0 nw-full  bg-white text-black py-4 px-6 shadow-md flex justify-around items-center">
      <Logo />
      <NavBar_List />
      <SearchBar />
      <HumburgIcon openHandler={openHandler} />
      <MobileView_NavBar closeHandler={closeHandler} mobileMenuVisible={mobileMenuVisible} />
    </header>
  );
};

export default Header;
