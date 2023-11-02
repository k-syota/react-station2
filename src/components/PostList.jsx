import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";

const PostList = (props) => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null); // エラーステートを追加
  const params = useParams();
  const location = useLocation();
  const threadTitle = location.state.title;

  useEffect(() => {
    // 非同期関数を定義
    const getPostList = async () => {
      try {
        const response = await axios.get(
          `https://railway.bulletinboard.techtrain.dev/threads/${params.id}/posts`
          //   "https://railway.bulletinboard.techtrain.dev/threads/f9785a7e-837c-4dd5-a87b-833ca224a378/posts"
        );
        setPosts(response.data.posts);
      } catch (error) {
        // エラーが発生した場合にエラーステートを更新
        setError("データの取得に失敗しました。");
        console.error(error);
      }
    };

    getPostList();
  }, [posts]);
  return (
    <>
      <p className="text-2xl p-5 text-white">
        スレッドのタイトル：{threadTitle}
      </p>
      {posts.length > 0 ? (
        posts.map((p) => (
          <p
            key={p.id}
            className="mx-auto font-bold p-2 mb-2 bg-white rounded-md w-1/4"
          >
            {p.post}
          </p>
        ))
      ) : (
        <p className="text-white font-bold text-lg">投稿はありません</p>
      )}
      <Link
        to="/"
        className="block bg-white hover:bg-gray-300 w-1/2 mx-auto mt-20 p-2 duration-700 rounded-sm"
      >
        一覧に戻る
      </Link>
    </>
  );
};

export default PostList;
