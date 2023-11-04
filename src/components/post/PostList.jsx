import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";

export const PostList = (props) => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [inputPost, setInputPost] = useState("");
  const params = useParams();
  const location = useLocation();
  const threadTitle = location.state.title;

  useEffect(() => {
    const getPostList = async () => {
      try {
        const response = await axios.get(
          `https://railway.bulletinboard.techtrain.dev/threads/${params.id}/posts`
        );
        setPosts(response.data.posts);
      } catch (error) {
        setError("データの取得に失敗しました。");
        console.error(error);
      }
    };

    getPostList();
  }, [posts]);

  const fetchInputPost = (e) => {
    setInputPost(e.target.value);
    console.log(inputPost);
  };

  const postData = async () => {
    try {
      await axios
        .post(
          `https://railway.bulletinboard.techtrain.dev/threads/${params.id}/posts`,
          {
            post: inputPost,
          }
        )
        .then((response) => {
          alert("作成が完了しました");
          setInputPost("");
        });
    } catch (error) {
      setError("データの取得に失敗しました。");
      console.error(error);
    }
  };

  return (
    <>
      <p className="text-2xl p-5 text-white">
        スレッドのタイトル：{threadTitle}
      </p>
      <div className="flex">
        <div className="w-1/2">
          {posts.length > 0 ? (
            posts.map((p) => (
              <p
                key={p.id}
                className="mx-auto font-bold p-2 mb-2 bg-white rounded-md w-1/2"
              >
                {p.post}
              </p>
            ))
          ) : (
            <p className="text-white font-bold text-lg">投稿はありません</p>
          )}
        </div>
        <div className="w-1/2">
          <form action="" method="post">
            <textarea
              className="w-3/4 h-40 rounded-md p-4 text-lg"
              type="text"
              name=""
              id=""
              value={inputPost}
              onChange={fetchInputPost}
              placeholder="投稿しよう！"
            />
          </form>
          <button
            onClick={postData}
            type="submit"
            className="block bg-lime-400 hover:bg-lime-100 w-1/2 mx-auto mt-6 p-2 duration-700 rounded-sm"
          >
            投稿
          </button>
        </div>
      </div>
      <Link
        to="/"
        className="block bg-white hover:bg-gray-300 w-1/2 mx-auto mt-20 p-2 duration-700 rounded-sm"
      >
        一覧に戻る
      </Link>
    </>
  );
};
