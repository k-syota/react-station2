import axios from "axios";
import { useEffect, useState } from "react";

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
      <div>
        <header className=" bg-lime-400 py-3 flex justify-around">
          <p className="text-center font-serif font-bold text-4xl">掲示板</p>
          <button type="button" className="right-4 top-5">
            スレッドを立てる
          </button>
        </header>
      </div>
      <div className="px-12 h-screen bg-gray-500">
        <div className="text-center p-4">
          <p className="text-xl p-5">一覧</p>
          <ul>
            {threads.map((t) => (
              <li
                key={t.id}
                className="font-bold p-2 cursor-pointer mb-2 bg-slate-200 rounded-md"
              >
                {t.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
