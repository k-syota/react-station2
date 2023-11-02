import React from "react";
import { Link } from "react-router-dom";

const ThreadList = (props) => {
  const { id, title } = props;
  return (
    <>
      <Link to={`/thread/${id}`} state={{ title: title }}>
        <li className="mx-auto font-bold p-2 cursor-pointer mb-2 bg-white rounded-md w-1/4 duration-500 hover:bg-blue-200">
          {title}
        </li>
      </Link>
    </>
  );
};

export default ThreadList;
