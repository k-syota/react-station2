import React from "react";
import { Link } from "react-router-dom";

const New = () => {
  return (
    <>
      <h2 className="text-2xl p-5 text-white">スレッド新規作成</h2>
      <form action="" method="post">
        <input
          type="text"
          className="w-1/2 h-16 rounded-md px-10 text-lg"
          placeholder="タイトルを入力"
        />
      </form>
      <div className="mt-4 flex items-center justify-evenly">
        <Link
          to="/"
          className="bg-white hover:bg-gray-300 p-2 duration-700 rounded-sm"
        >
          一覧に戻る
        </Link>
        <button
          type="submit"
          className="bg-white hover:bg-gray-300 p-2 duration-700 rounded-sm"
        >
          作成
        </button>
      </div>
    </>
  );
};

export default New;
