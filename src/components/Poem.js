import React, {useState} from "react";

function Poem({ poems }) {
  const { title, content, author } = poems
  const [isRead, setIsRead] = useState(false)

  function readPoems() {
    setIsRead(!setIsRead)

  const readPeoms = poems.filter (poem => {
    return poem.name.toLowerCase().includes(isRead.toLowerCase)
  })

  return (
    <div>
      <h3>Title{title}</h3>
      <p>{content}</p>
      <p>
        <strong>{author}</strong>
      </p>
      <button onClick={(readPoems) => isRead(true)} >Mark as read</button>
    </div>
  );
  } 
}

export default Poem;
