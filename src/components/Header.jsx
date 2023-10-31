import React from "react";
import HeaderLink from "./HeaderLink";

const Header = () => {
  return (
    <>
      <header className=" bg-lime-400 px-48 py-4 flex justify-between items-center">
        <p className="text-center font-serif font-bold text-4xl">掲示板</p>
        <HeaderLink />
      </header>
    </>
  );
};

export default Header;
