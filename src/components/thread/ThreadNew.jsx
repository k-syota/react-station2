import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export const ThreadNew = () => {
  const [error, setError] = useState(null);
  const [inputTitle, setInputTitle] = useState("");

  const fetchInputTitle = (e) => {
    setInputTitle(e.target.value);
  };

  const postData = async () => {
    try {
      await axios
        .post("https://railway.bulletinboard.techtrain.dev/threads", {
          title: inputTitle,
        })
        .then((response) => {
          alert("作成が完了しました");
          setInputTitle("");
        });
    } catch (error) {
      setError("データの取得に失敗しました。");
      console.error(error);
    }
  };

  return (
    <>
      <h2 className="text-2xl p-5 text-white">スレッド新規作成</h2>
      <form action="" method="post">
        <input
          type="text"
          value={inputTitle}
          className="w-1/2 h-16 rounded-md px-10 text-lg"
          placeholder="タイトルを入力"
          onChange={fetchInputTitle}
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
          onClick={postData}
          className="bg-white hover:bg-gray-300 p-2 duration-700 rounded-sm"
        >
          作成
        </button>
      </div>
    </>
  );
};
