import React from "react";
import { Link } from "react-router-dom";

const HeaderLink = () => {
  return (
    <>
      <div>
        <Link
          to="/thread/new"
          className="right-4 top-5 bg-white hover:bg-gray-300 p-4 duration-700 rounded-md"
        >
          スレッドを立てる
        </Link>
      </div>
    </>
  );
};

export default HeaderLink;
