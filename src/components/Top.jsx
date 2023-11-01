import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";
import ThreadList from "./ThreadList";
import Pagination from "./Pagination";

const Top = () => {
  const [threads, setThreads] = useState([]);
  const [error, setError] = useState(null); // エラーステートを追加
  const [offset, setOffset] = useState(1);

  useEffect(() => {
    // 非同期関数を定義
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://railway.bulletinboard.techtrain.dev/threads?offset=${offset}`
        );
        setThreads(response.data);
      } catch (error) {
        // エラーが発生した場合にエラーステートを更新
        setError("データの取得に失敗しました。");
        console.error(error);
      }
    };

    // fetchData関数を呼び出し
    fetchData();
  }, [threads, offset]);

  const prevOffset = () => {
    if (offset > 10) {
      setOffset(offset - 10);
    }
  };

  const nextOffset = () => {
    setOffset(offset + 10);
  };

  return (
    <>
      <p className="text-2xl p-5 text-white">スレッド一覧</p>
      <ul>
        {threads.map((t) => (
          <ThreadList key={t.id} title={t.title} />
        ))}
      </ul>
      <Pagination prev={prevOffset} next={nextOffset} />
    </>
  );
};

export default Top;
