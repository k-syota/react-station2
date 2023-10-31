import axios from "axios";
import { useEffect, useState } from "react";
import ThreadList from "./components/ThreadList";
import Header from "./components/Header";

function App() {
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
      <Header />
      <div className="px-12 h-screen bg-gray-500">
        <div className="text-center p-4">
          <p className="text-2xl p-5 text-white">一覧</p>
          <ul>
            {threads.map((t) => (
              <ThreadList key={t.id} title={t.title} />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
