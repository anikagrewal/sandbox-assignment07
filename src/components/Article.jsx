import { useEffect, useState } from "react";
import "../styles.css";

export default function Article({ userId }) {
  const [authors, setAuthors] = useState(null);

  useEffect(() => {
    const authors_url = `https://jsonplaceholder.typicode.com/users/`;
    async function getAuthors() {
      const resp = await fetch(authors_url);
      const data = await resp.json();
      setAuthors(data);
    }
    getAuthors();
  }, []);

  return (
    <div className="authors-container">
      <div>
        {authors &&
          authors.map((author, index) => {
            if (userId === author.id) {
              return (
                <div key={index} className="authors">
                  <div className="author-name">{author.name}</div>
                </div>
              );
            }
          })}
      </div>
    </div>
  );
}
