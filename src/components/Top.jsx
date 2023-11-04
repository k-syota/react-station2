import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";
import { ThreadList } from "./thread/ThreadList";
import { Pagination } from "./Pagination";

export const Top = () => {
  const [threads, setThreads] = useState([]);
  const [error, setError] = useState(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const getThreads = async () => {
      try {
        const response = await axios.get(
          `https://railway.bulletinboard.techtrain.dev/threads?offset=${offset}`
        );
        setThreads(response.data);
      } catch (error) {
        setError("データの取得に失敗しました。");
        console.error(error);
      }
    };

    getThreads();
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
          <ThreadList key={t.id} title={t.title} id={t.id} />
        ))}
      </ul>
      <Pagination prev={prevOffset} next={nextOffset} />
    </>
  );
};
