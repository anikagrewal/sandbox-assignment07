import "./styles.css";
import { useEffect, useRef, useState } from "react";
import Article from "./components/Article";

export default function App() {
  const [info, setInfo] = useState();

  const url = "https://jsonplaceholder.typicode.com/posts";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setInfo(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h2 className="header">Recent Posts </h2>
      <div className="container">
        <div>
          {info &&
            info.map((post, index) => {
              return (
                <div key={index} className="post">
                  <div className="title">{post.title}</div>
                  <div className="author">
                    By:
                    <Article userId={post.userId} />
                  </div>
                  <div className="body">{post.body}</div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
