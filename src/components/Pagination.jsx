import React from "react";

export const Pagination = (props) => {
  const { prev, next } = props;
  return (
    <>
      <div className="flex justify-evenly">
        <button
          type="button"
          onClick={prev}
          className="bg-white hover:bg-gray-300 p-2 duration-700 rounded-sm"
        >
          前の１０件
        </button>
        <button
          type="button"
          onClick={next}
          className="bg-white hover:bg-gray-300 p-2 duration-700 rounded-sm"
        >
          次の１０件
        </button>
      </div>
    </>
  );
};
