import React, { useState, useEffect } from "react";
import axios from "axios";

const DetaFetching = () => {
  const [post, setPost] = useState([]);
  const [id, setId] = useState(1)
  const [idFromButtonClick, setIdFromButtonClick] = useState(1)

  const handleFetchPostButtonClick = ()=> {
    setIdFromButtonClick(id)
  }

  useEffect(() => {
    axios
      .get(`http://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
      .then((res) => {
        console.log(res);
        setPost(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }, [idFromButtonClick]);
  return (
    <div>
      <input type="text" value={id} onChange={e => setId(e.target.value)} />
      <button type="button" onClick={handleFetchPostButtonClick} >Fetch Post</button>
      <p>{post.title}</p>
      {/* <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default DetaFetching;
