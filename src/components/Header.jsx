import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <header className=" bg-lime-400 px-48 py-4 flex justify-between items-center">
        <p className="text-center font-serif font-bold text-4xl">掲示板</p>
        <Link
          to="/thread/new"
          className="right-4 top-5 bg-white hover:bg-gray-300 p-4 duration-700 rounded-md"
        >
          スレッドを立てる
        </Link>
      </header>
    </>
  );
};
