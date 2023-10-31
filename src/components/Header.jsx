import React from "react";

const Header = () => {
  return (
    <>
      <header className=" bg-lime-400 px-48 py-3 flex justify-between">
        <p className="text-center font-serif font-bold text-4xl">掲示板</p>
        <button
          type="button"
          className="right-4 top-5 bg-white hover:bg-gray-300 p-4 duration-700"
        >
          スレッドを立てる
        </button>
      </header>
    </>
  );
};

export default Header;
