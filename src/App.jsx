import { Header } from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { New } from "./components/thread/New";
import { Top } from "./components/Top";
import { PostList } from "./components/PostList";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div>
          <div className="px-12 h-screen bg-gray-500">
            <div className="text-center p-4">
              <Routes>
                <Route path="/" element={<Top />} />
                <Route path="/thread/new" element={<New />} />
                <Route path="/thread/:id" element={<PostList />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
