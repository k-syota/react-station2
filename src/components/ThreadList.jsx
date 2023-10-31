import React from "react";

const ThreadList = (props) => {
  const { title } = props;
  return (
    <>
      <li className="mx-auto font-bold p-2 cursor-pointer mb-2 bg-white rounded-md w-1/4 duration-500 hover:bg-blue-200">
        {title}
      </li>
    </>
  );
};

export default ThreadList;
