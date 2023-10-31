import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";
import ThreadList from "./ThreadList";

const Top = () => {
  const [threads, setThreads] = useState([]);
  const [error, setError] = useState(null); // エラーステートを追加

  useEffect(() => {
    // 非同期関数を定義
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://railway.bulletinboard.techtrain.dev/threads?offset=1"
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
  }, []); // 空の依存配列を渡して初回レンダリング時のみ実行されるようにする
  return (
    <>
      <p className="text-2xl p-5 text-white">一覧</p>
      <ul>
        {threads.map((t) => (
          <ThreadList key={t.id} title={t.title} />
        ))}
      </ul>
    </>
  );
};

export default Top;
