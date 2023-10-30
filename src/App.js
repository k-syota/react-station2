// import axios from "axios";

function App() {
  // const getPostLists = axios.get()
  return (
    <>
      <div className="p-12 h-screen bg-gray-500">
        <header className="text-center font-serif font-bold text-4xl">
          掲示板
        </header>
        <div className="text-center p-4">
          <p className="text-xl p-5">一覧</p>
          <ul>
            <li className="font-bold p-2 cursor-pointer mb-2 bg-slate-200 rounded-md">
              テスト１
            </li>
            <li className="font-bold p-2 cursor-pointer mb-2 bg-slate-200 rounded-md">
              テスト１
            </li>
            <li className="font-bold p-2 cursor-pointer mb-2 bg-slate-200 rounded-md">
              テスト１
            </li>
            <li className="font-bold p-2 cursor-pointer mb-2 bg-slate-200 rounded-md">
              テスト１
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
