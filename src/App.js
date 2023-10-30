import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  useEffect(() => {
    const getPostLists = axios
      .get("https://railway.bulletinboard.techtrain.dev/threads?offset=1")
      .then((data) => {
        setThreads(data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  const [threads, setThreads] = useState([]);
  console.log(threads);
  return (
    <>
      <div className="p-12 h-screen bg-gray-500">
        <header className="text-center font-serif font-bold text-4xl">
          掲示板
        </header>
        <div className="text-center p-4">
          <p className="text-xl p-5">一覧</p>
          <ul>
            {threads.map((t) => (
              <li className="font-bold p-2 cursor-pointer mb-2 bg-slate-200 rounded-md">
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
